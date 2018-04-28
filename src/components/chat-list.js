import React from 'react';
class ChatList extends React.Component {
  constructor() {
    super();
    this.chatList = [];
    this.selectChat.bind(this);
    this.getItems.bind(this);
  }
  componentDidMount() {

  }
  selectChat(index) {

    this.props.handler(index)
  }
   
   getItems() {
    this.chatList = this.props.chatList;
     let rows=[];
    for (let i = 0; i < this.chatList.length; i++) {

      rows.push(<li key={i} onClick={this.selectChat.bind(this,i)}>{this.chatList[i].name}</li>)
  }
    return rows;
}
  render() {
    this.chatList = this.props.chatList;
    
    
    return (
      <div>
         
        <ul >

          {this.getItems().map(function(i,e){
            return i;
          })}


        </ul>
      </div>
    );
  }
}
export default ChatList;
