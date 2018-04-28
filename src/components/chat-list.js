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
    let rows = [];
    for (let i = 0; i < this.chatList.length; i++) {
     
      rows.push(<li className="contact" key={i} onClick={this.selectChat.bind(this, i)}>
        <div className="wrap">
        <img src={this.chatList[i].img} alt="" />
          <div className="meta">
            <p className="name">{this.chatList[i].name}</p>

          </div>
        </div>
      </li>)
    }
    return rows;
  }
  render() {
    this.chatList = this.props.chatList;


    return (







      <div id="sidepanel">
        <div id="contacts">
          <ul>
            {this.getItems().map(function (i, e) {
              return i;
            })}
          </ul>
        </div>

      </div>

    );
  }
}
export default ChatList;
