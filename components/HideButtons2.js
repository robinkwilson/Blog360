import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, Image, StyleSheet, VrButton } from 'react-vr';
import { stylesheet } from './index.js';
import { toggleHide } from './store';

class HideButtons2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#77787980'
    };
  }

  render() {
    const { toggleHide, hide, handleHide } = this.props;
    return (
      <View>
        <VrButton
          style={[
            stylesheet.toggleViewButton,
            { backgroundColor: this.state.backgroundColor }]}
          onClick={() => { handleHide(); toggleHide(); }}
          onEnter={() => this.setState({ backgroundColor: '#777879' })}
          onExit={() => this.setState({ backgroundColor: '#77787980' })}>
          <Text
            style={{
              fontSize: 0.3,
              fontWeight: '400',
              textAlign: 'center',
            }}>
            {hide === false ? 'Show' : 'Hide'}
          </Text>
        </VrButton>

        <VrButton
          style={[
            stylesheet.toggleViewButtonBottom,
            { backgroundColor: this.state.backgroundColor }]}
          onClick={() => { handleHide(); toggleHide(); }}
          onEnter={() => this.setState({ backgroundColor: '#777879' })}
          onExit={() => this.setState({ backgroundColor: '#77787980' })}>
          <Text
            style={{
              fontSize: 0.3,
              fontWeight: '400',
              textAlign: 'center',
            }}>
            {hide === false ? 'Show' : 'Hide'}
          </Text>
        </VrButton>
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

export default connect(mapState, mapDispatch)(HideButtons2);