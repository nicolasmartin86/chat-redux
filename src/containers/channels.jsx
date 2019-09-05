import React, { Component } from 'react';
import { connect } from 'react-redux';
import Channel from '../components/channel.jsx';


class Channels extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div className="second-column-channels">
            {this.props.channels.map((channel) => {            
            return <Channel key={channel} channel={channel} />
            })}
        </div>
      );
    }
}

function mapStateToProps(state) {
        return {
            channels: state.channels
        }
};

export default connect(mapStateToProps)(Channels);