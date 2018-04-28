import React from 'react';
import data from '../data';
class ChatDetails extends React.Component {
  constructor() {

    super();
    this.data = data;
    this.chatMessages=[];
    this.chatId=null;
    this.chatOwnerId=null;
    this.state = { loaded: false }

  }
  componentWillReceiveProps(nextProps) {
    this.setState({ loaded: true});  
  }
  componentDidMount() {
    this.setData()
    this.setState({ loaded: true });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.chatIndex !== this.props.chatIndex) {
      this.setState({ loaded: true });   
      this.setData();      
    }
    this.setData();     
}
  setData() {
    this.chatMessages = this.data[this.props.chatIndex].messages;
    this.chatId = this.data[this.props.chatIndex].id;
    this.chatOwnerId = this.data[this.props.chatIndex].id_members1;
  }
  render() {




    return (
      <div>
        <ul >
          {this.chatMessages.map(function (item, index) {
            return <li key={index}>{item.body}</li>
          })}
        </ul>
      </div>
    );
  }
}
export default ChatDetails;

