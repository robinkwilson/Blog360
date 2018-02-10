import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  asset,
  Pano,
  View,
  Text
} from 'react-vr';

import {
  _Text,
  GrayPanel,
  BlogPost,
  LeftIcon
} from './_common';

import stylesheet from './content/stylesheet.js';

export default class Home2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Pano
          source={asset('seattle.jpg')}
          style={{
            transform: [{ rotateY: -135 }]
          }}
        />
        <GrayPanel styles={stylesheet.midView}>
          <BlogPost title={'Hello World'} text={'honkey wonkey butter cups ?'} />
          <_Text styles={stylesheet.title} text={'Hello world!!'} />
        </GrayPanel>
      </View>
    );
  }
}