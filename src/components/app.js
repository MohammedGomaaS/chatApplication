import React from 'react';
import ChatDetails from './chat-details';
import ChatList from './chat-list';
class App extends React.Component {
    render() {
      return (
          <div class="container">
        <ChatList/><ChatDetails/>
        </div>
      );
    }
  }
  export default App;