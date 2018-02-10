import React, { Component } from 'react';
import {
  asset,
  Pano,
  View,
  Text
} from 'react-vr';

import {
  _Text, BlogPost, GrayPanel, LeftIcon, RightIcon
} from './_common';

export default class Home extends Component {

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
        <Text>Hello World!!</Text>
      </View>
    );
  }
}