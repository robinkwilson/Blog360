import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, VrButton } from 'react-vr';

import stylesheet from '../content/stylesheet.js';
import { loadHomeThunk } from '../store';
import { _Text, } from './_common';

export class HomeButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#00004c80'
    }
  }

  render() {
    const { clickHome } = this.props;
    return (
      <VrButton
        style={[stylesheet.homeButton, { backgroundColor: this.state.backgroundColor }]}
        onClick={() => clickHome()}
        onEnter={() => this.setState({ backgroundColor: '#00004c' })}
        onExit={() => this.setState({ backgroundColor: '#00004c80' })}
      >
        <_Text styles={stylesheet.home_button_text} text={'Home'} />
      </VrButton>
    );
  }
}

const mapState = (state) => {
  return {
    cur_pano: state.page.cur_pano_info,
  }
}

const mapDispatch = (dispatch) => {
  return {
    clickHome: () => dispatch(loadHomeThunk()),
  }
}


export default connect(mapState, mapDispatch)(HomeButton);