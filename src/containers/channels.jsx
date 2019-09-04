import React, { Component } from 'react';
import { connect } from 'react-redux';

class Channels extends Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div>
        </div>
      );
    }
  }

    mapStateToProps = (state) => {
        return {
            channels: state.channels
        }
    };

export default connect(mapStateToProps)(Channels);