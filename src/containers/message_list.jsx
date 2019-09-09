import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 

import Message from '../components/message.jsx';
import { fetchMessages } from '../actions/index.js';

class MessageList extends Component {

    constructor(props) {
      super(props);
    }

    componentWillMount = () => {
      return this.fetchMessages();
    };

    componentDidMount = () => {
      this.intervalId = setInterval(this.fetchMessages, 1000);
    };

    componentWillUnmount = () => {
      setTimeout(clearInterval, 3000, this.intervalId);
    };

    fetchMessages = () => {
      return this.props.fetchMessages(this.props.selectedChannel);
    };
  
    renderList = () => {
      return this.props.messages.map((message) => {
        return <Message key={message.created_at} message={message}/>;
      });
    }
    
    render() {
      return(
        <div className="message-list">
          {this.renderList()}
        </div>
      );
    }
  }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
  );
  
}

function mapStateToProps(state) {
    return {
        messages: state.messages,
        selectedChannel: state.selectedChannel
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);