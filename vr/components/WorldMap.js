
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
  stylesheet, 
  content } from './index.js';

export default class WorldMap extends React.Component {

  constructor (props) {
		super(props);
  }

  render() {
    const isSeattle = this.props.curWaypoint === 'Seattle';
    return (
      <View>
				<Map />
				{/* EasternEurope */}
				<Waypoint selected={!isSeattle} setContent={this.props.setContent} place={'EasternEurope'} x={.2} y={-.5} z={-3} />
				{/* Seattle */}
        <Waypoint selected={isSeattle} setContent={this.props.setContent} place={'Home'} x={-1.05} y={-0.6} z={-3} />
      </View>
    );
  }
};



