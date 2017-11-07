import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, VrButton } from 'react-vr';
import { stylesheet } from './index.js';

export default class ShowHideButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#77787980'
    };
  }

  render() {
    const { handleHide, hide } = this.props;
    return (
      <View>
        <VrButton
          style={[
            stylesheet.toggleViewButton,
            { backgroundColor: this.state.backgroundColor }]}
          onClick={() => handleHide()}
          onEnter={() => this.setState({ backgroundColor: '#777879' })}
          onExit={() => this.setState({ backgroundColor: '#77787980' })}>
          <Text
            style={{
              fontSize: 0.3,
              fontWeight: '400',
              textAlign: 'center',
            }}>
            {hide > 0 ? 'Show' : 'Hide'}
          </Text>
        </VrButton>

        <VrButton
          style={[
            stylesheet.toggleViewButtonBottom,
            { backgroundColor: this.state.backgroundColor }]}
          onClick={() => handleHide()}
          onEnter={() => this.setState({ backgroundColor: '#777879' })}
          onExit={() => this.setState({ backgroundColor: '#77787980' })}>
          <Text
            style={{
              fontSize: 0.3,
              fontWeight: '400',
              textAlign: 'center',
            }}>
            {hide > 0 ? 'Show' : 'Hide'}
          </Text>
        </VrButton>
      </View>
    );
  }
}
