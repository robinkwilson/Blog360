import React, { Component } from 'react';

import { View, Text, Image, StyleSheet } from 'react-vr';
import { stylesheet } from './index.js';

export default class Map extends Component {

	constructor (props) {
			super (props);
			//will have props deal with which map to render
	}

	render () {
		return (
			<View 
				style={ StyleSheet.flatten([
					stylesheet.mapView, 
					stylesheet.viewBox, 
					this.props.hide ? stylesheet.hideAllViews : ''])
				}>
					<Image style={stylesheet.mapImage}
						source={require('../../static_assets/globeStaticView.jpeg')} /> 
					
			</View>
		);
	}

}