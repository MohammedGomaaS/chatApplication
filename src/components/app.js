import React from 'react';
import ChatDetails from './chat-details';
import ChatList from './chat-list';
import EditorComponent from './test';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import data from '../data';
class App extends React.Component {

  constructor() {
    super();
    this.state = { isLoaded: false };
    this.chatList = [];
    this.currentChatIndex = 0;
    this.data = null;
    this.handler.bind(this);
  }

  componentDidMount() {
    this.getChatData();
    this.getChatList();
    this.setChatIndex(0);
    this.setState({ isLoaded: true });
 
  }
  handler(value) {

  
    this.setChatIndex(value);
    this.setState({ isLoaded: !this.state.isLoaded });
  
  }
  render() {

    return (
      <div className="container">
    
        <ChatList chatList={this.chatList} handler={this.handler.bind(this)} />
        <ChatDetails chatIndex={this.currentChatIndex} />
       

      </div>
    );
  }
  getChatData() {
    this.data = data;
  }
  setChatIndex(id) {

    this.currentChatIndex = id;

  }
  getChatList() {
    for (let i = 0; i < data.length; i++) {
      this.chatList.push({ id: data[i].id, name: data[i].name[1] })
    }
  }


}
export default App;