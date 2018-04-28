import React from 'react';
import data from '../data';
// Require Editor JS files.

import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import $ from 'jquery';
window.$ = $;
class ChatDetails extends React.Component {
  constructor() {

    super();
    this.data = data;
    this.message = {
      authorId: null,
      body: null,
      create_at: null
    }
    this.chatMessages = [];
    this.chatId = null;
    this.chatOwnerId = null;
    this.state = { loaded: false };
    this.options = null;


    this.config = {
      placeholderText: 'Type your message here.',
      charCounterCount: false,

      toolbarButtons: ["emoticons", "image", "quickInsert", 'insertImage'],
      quickInsertButtons: ['image'],
      pluginsEnabled: ['quickInsert', 'image', "emoticons"],
      toolbarBottom: false,
    }

    this.handleModelChange = this.handleModelChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);

    this.state = {
      model: ''
    };
  }

  handleModelChange(model) {
    this.setState({
      model: model
    });
    console.log('wowwww');
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ loaded: true });
  }
  componentDidMount() {
    $('.selector').froalaEditor({
      pluginsEnabled: ['image', 'link']
    });
    this.setData()

  }
  componentDidUpdate(prevProps) {
    if (prevProps.chatIndex !== this.props.chatIndex) {
      this.setState({ loaded: true });
      this.setData();
    }
    this.setData();
  }
  sendMessage() {
    this.data[this.props.chatIndex].messages.push(this.message = {
      authorId: this.chatOwnerId,
      body: this.state.model,
      create_at: ''
    });
    console.log(this.state.model)
    this.setState({
      model: ""
    });
    console.log("send", this.data[this.props.chatIndex].messages);
  }
  setData() {
    this.chatMessages = this.data[this.props.chatIndex].messages;
    this.chatId = this.data[this.props.chatIndex].id;
    this.chatOwnerId = this.data[this.props.chatIndex].id_members1;
  }
  render() {
    return (

      <div className="content">
        <div className="messages">
          <ul>
            {this.chatMessages.map(function (item, index) {

              return (<li className="replies">
                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                <FroalaEditorView model={item.body} />
              </li>)
            })}
          </ul>
        </div>
        {/* <div class="send">
          <div class="editor">

            <FroalaEditor tag='textarea' options={this.options} config={this.config} model={this.state.model}
              onModelChange={this.handleModelChange}>
            </FroalaEditor>
          </div>
          <div class="editor-button">
          </div>
        </div> */}
        <div className="message-input">
          <div className="wrap">
          <FroalaEditor tag='textarea' options={this.options} config={this.config} model={this.state.model}
              onModelChange={this.handleModelChange}>
            </FroalaEditor>
            <button onClick={this.sendMessage} class="send-button"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
          </div>
        </div>
      </div>

    );
  }
}
export default ChatDetails;

