import React, { Component } from 'react';

import { View, Text, Image, StyleSheet } from 'react-vr';
import stylesheet from '../../static_assets/stylesheet.js';

export default class AboutMe extends Component {

	constructor (props) {
			super (props);
			console.log('props are: ', props);
	}

	render () {
		console.log(this.props.isDefaultView);
		return (
			<View style={StyleSheet.flatten([stylesheet.midView, stylesheet.viewBox, this.props.hide ? stylesheet.hideAllViews : ''])}>
				<Text style={{fontSize: 0.3}}>{this.props.title}</Text>
				<Text style={{fontSize: 0.2}}>{this.props.text}</Text>
			</View>
		);
	}
}