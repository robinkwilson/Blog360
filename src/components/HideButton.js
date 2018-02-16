import React, { Component } from 'react';
import { Text, StyleSheet, VrButton } from 'react-vr';
import { connect } from 'react-redux';

import stylesheet from '../content/stylesheet.js';
import { toggleHide } from '../store';

class HideButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      background_color: '#77787980'
    };
  }

  render() {
    const { styles, hide, handleHide } = this.props;
    const { background_color } = this.state;
    return (
      <VrButton
        style={StyleSheet.flatten([ styles, { backgroundColor: background_color }])}
        onClick={() => { handleHide() }}
        onEnter={() => this.setState({ background_color: '#777879' })}
        onExit={() => this.setState({ background_color: '#77787980' })}
      >
        <Text style={stylesheet.hide_button_text}>
          {hide === false ? 'Hide' : 'Show'}
        </Text>
      </VrButton>
    );
  }
}

export default HideButton;