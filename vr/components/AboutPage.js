import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Cylinder,
  Animated,
} from 'react-vr';

import { 
  Right, 
  Left,
  Map, 
  Middle, 
  Waypoint, 
  ShowHideButton, 
  WorldMap,
  stylesheet, 
  content } from './index.js';

export default class About extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      hideSlide: new Animated.Value(1),
      hide: false,
			viewArray: ['aboutPage'],
			curPanoViewRotateY: -135,
			curPanoPhoto: 'seattle.jpg',
      curMap: 'globeStaticView.jpg',
      curContent: content.staticTest,
    }
  }

  render() {
    return (
      <View>
          <Left hide={false} title={'Left View'} text={'HI'}/>
          <Right hide={false} title={'Right View'} text={'HI'}/>
          <Middle title={'Welcome to my Travelling 360 Blog'} text={"This VR blog has been an idea of mine for a long time! I'm very excited to show you the 360 photos I've taken on my travels!"} />
          <WorldMap clickWaypoint={this.props.clickWaypoint} />
      </View>
    );
  }
};

