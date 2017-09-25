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
  }

  render() {
    const { changePano, clickWaypoint, setContent } = this.props
    const { imagesAndPanoInfo, blogEntries } = content.about
    return (
      <View>
          <Left hide={false} title={'Seattle and Oakland'} changePano={changePano} imagesAndPanoInfo={imagesAndPanoInfo} />
          <Right setContent={setContent} hide={false} title={'Blog Posts'} blogEntries={blogEntries}/>
          <Middle title={'Welcome to my Travelling 360 Blog'} text={"This VR blog has been an idea of mine for a long time! I'm very excited to show you the 360 photos I've taken on my travels! \n\n These 360 photos started as a street art project. \n\n Click around enjoy!"} />
      </View>
    );
  }
};

