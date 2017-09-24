
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
		console.log(3);
    return (
      <View>
				<Map />
				{/* EasternEurope */}
				<Waypoint click={this.props.clickWaypoint} place={'easternEurope'} x={-2.2} y={-.23} z={-3} />
				{/* Seattle */}
				<Waypoint click={this.props.clickWaypoint} place={'seattle'} x={-3.43} y={-0.35} z={-3} />
      </View>
    );
  }
};



