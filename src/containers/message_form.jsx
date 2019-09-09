import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createMessage } from '../actions/index.js';

class MessageForm extends Component {

    constructor(props) {
      super(props);
      this.state = {
          value: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value});
    };


    handleSubmit(event) {
        event.preventDefault();
        this.props.createMessage(this.props.channel, this.props.user, this.state.value);
        this.setState({ value: '' });
    };

    render() {
      return(
        <div className="send-message-form">
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Send" className="btn-danger"/>
            </form>
        </div>
      );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { createMessage: createMessage },
        dispatch
      );
};

function mapStateToProps(state) {
        return {
            channel: state.selectedChannel,
            user: state.user
        }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);