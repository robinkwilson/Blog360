import React, { Component } from 'react';

import { View, Text, Image, StyleSheet } from 'react-vr';
import stylesheet from '../../static_assets/stylesheet.js';

export default class Map extends Component {

	constructor (props) {
			super (props);
			//will have props deal with which map to render
	}

	render () {
		return (
			<View 
			style={StyleSheet.flatten([stylesheet.mapView, stylesheet.viewBox, this.props.hide ? stylesheet.hideAllViews : ''])}>
			<Text style={{fontSize: 0.3}}>Where do you want to go?</Text>
			</View>
		);
	}

}