import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  asset,
  Pano,
  View,
  Animated,
} from 'react-vr';

import {
  _Text,
  GrayPanel,
  BlogPost,
  LeftIcon
} from './_common';

import Middle from './Middle.js';
import Left from './Left.js';
import Right from './Right.js';
import HomeButton from './HomeButton.js';
import HideButtons from './HideButtons.js';

import {
  loadHomeThunk,
} from './store';

import stylesheet from './content/stylesheet.js';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opacityValue: new Animated.Value(1),
    };
    this.handleHide = this.handleHide.bind(this);
  }

  componentDidMount() {
    this.props.fetchHome();
  }

  handleHide() {
    const { hide } = this.props;
    if (!hide) { // visible > hidden
      this.setState({ hide: true });
      Animated.timing(
        this.state.opacityValue,
        {
          toValue: 0,
          duration: 1000,
        }
      ).start();
    } else { // hidden > visible
      Animated.timing(
        this.state.opacityValue,
        {
          toValue: 1,
          duration: 1000,
        }
      ).start();
    }
  }

  render() {
    const { cur_pano, hide } = this.props;
    return (
      <View>
        {
          cur_pano && cur_pano.pano_img && <Pano
            source={asset(cur_pano.pano_img)}
            style={{
              transform: [{ rotateY: cur_pano.rotateY }]
            }}
          />
        }
        <HideButtons handleHide={this.handleHide}/>
        <Animated.View style={{ opacity: this.state.opacityValue }}>
          <Left />
          <Middle />
          <Right />
          <HomeButton />
        </Animated.View>
      </View>
    );
  }
}

const mapState = (state) => {
  return {
    cur_pano: state.page.cur_pano_info,
    hide: state.hide.hide,
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchHome: () => dispatch(loadHomeThunk()),
  }
}

export default connect(mapState, mapDispatch)(Home);