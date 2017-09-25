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

export default class EasternEurope extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.changePano('pragueCastle.jpg', 0)
  }

  render() {
    const { changePano, clickWaypoint, setContent } = this.props
    const { imagesAndPanoInfo, blogEntries } = content.easternEurope
    console.log(content.easternEurope);
    return (
      <View>
          <Left hide={true} title={''} changePano={changePano} imagesAndPanoInfo={imagesAndPanoInfo} />
          <Right setContent={setContent} hide={false} title={'Blog Posts'} blogEntries={blogEntries}/>
          <Middle title={'Eastern Europe'} text={"In May 2017, I went to Eastern Europe with the fantastic Jordan Goodell. We explored Berlin and Dresden, Germany; Prague, Kutna Hora, and Olomouc, Czech Republic; Bratislava, Slovakia; Budapest, Hungary; and ended in London, UK. \n\n The photo is Prague Castle."} />
      </View>
    );
  }
};

