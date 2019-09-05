import React, { Component } from 'react';


class Message extends Component {
    constructor(props) {
        super(props);
      }

    
    render() {
        return(
            <div>
                <div className="d-flex">
                    <h3>{this.props.message.author}</h3>
                    <p>{this.props.message.created_at}</p>
                </div>
                <div>
                    <p>{this.props.message.content}</p>
                </div>
            </div>
        );
    }
  };

export default Message;