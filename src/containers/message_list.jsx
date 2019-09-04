import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from '../components/message.jsx';


class MessageList extends Component {

    constructor(props) {
      super(props);
    }
  
    renderList = () => {
      return this.props.messages.map((message) => {
        return <Message key={message.created_at} message={message}/>;
      });
    }
    
    render() {
      return(
        <div>
          {this.renderList()}
        </div>
      );
    }
  }

function mapStateToProps(state) {
    return {
        messages: state.messages
    }
};

export default connect(mapStateToProps)(MessageList);