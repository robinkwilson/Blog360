import React, { Component } from 'react';

import { View, Text, Image, StyleSheet } from 'react-vr';
import {stylesheet} from './index.js';

export default class AboutMe extends Component {

	constructor (props) {
			super (props);
	}

	render () {
		return (
			<View style={StyleSheet.flatten([stylesheet.midView, stylesheet.viewBox, this.props.hide ? stylesheet.hideAllViews : ''])}>
				<Text style={{fontSize: 0.3}}>About Me</Text>
				<Text style={{fontSize: 0.2}}>Lorem ipsum dolor sit amet, id fierent instructior est. Malis volumus posidonium te qui. Te eum nulla integre pericula, sit nobis tation maiestatis ut. Mea ad summo aperiri maiestatis. An mel esse aperiri tibique, at sea tibique moderatius, dolore appareat officiis cum cu.</Text>
			</View>
		);
	}

}