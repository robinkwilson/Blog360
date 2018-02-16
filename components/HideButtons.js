import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-vr';

import stylesheet from './content/stylesheet.js';
import { toggleHide } from './store';

import HideButton from './HideButton.js';

class HideButtons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#77787980'
    };
    this.handleHide = this.handleHide.bind(this);
  }

  handleHide(){
    const { handleHide, toggleHide } = this.props;
    handleHide(); // from Home
    toggleHide(); // from connect wrapper
  }

  render() {
    const { toggleHide, hide, handleHide } = this.props;
    return (
      <View>
        <HideButton styles={stylesheet.hide_button_top} handleHide={this.handleHide} hide={hide} />
        <HideButton styles={stylesheet.hide_button_bottom} handleHide={this.handleHide} hide={hide} />
      </View>
    );
  }
}

const mapState = (state) => {
  return {
    hide: state.hide.hide,
  }
}

const mapDispatch = (dispatch) => {
  return {
    toggleHide: () => dispatch(toggleHide()),
  }
}

export default connect(mapState, mapDispatch)(HideButtons);