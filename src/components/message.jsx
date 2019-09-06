import React, { Component } from 'react';


class Message extends Component {
    constructor(props) {
        super(props);
      }

    
    render() {
        return(
            <div className="message-block">
                <div className="message-title">
                    <div className="message-title-author">
                        {this.props.message.author}
                    </div>
                    <div className="message-title-hour">
                        {this.props.message.created_at}
                    </div>
                </div>
                <div className="message-content">
                    <p>{this.props.message.content}</p>
                </div>
            </div>
        );
    }
  };

export default Message;