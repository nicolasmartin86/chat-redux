import React from 'react';
import MessageList from '../containers/message_list.jsx';
import Channels from '../containers/channels.jsx';

const App = () => {
  return (
    <div className="app">
      <div className="first-column-logo"><img src="../../assets/img/lewagon-logo.png" alt=""/></div>
      <Channels />
      <MessageList />
    </div>
  );
};

export default App;
