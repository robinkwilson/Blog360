import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, Animated } from 'react-vr';
import { stylesheet} from './index.js';

export default class Left extends Component {

	constructor (props) {
		super (props);
	}

	render () {
		return (
			<Animated.View style={[stylesheet.rightView, stylesheet.viewBox]}>
				<Text style={{fontSize: 0.3}}>{this.props.title}</Text>
				<Text style={{fontSize: 0.2}}>{this.props.text}</Text>
			</Animated.View>
		);
	}
}