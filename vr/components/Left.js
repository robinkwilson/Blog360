import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, Animated } from 'react-vr';
import { stylesheet} from './index.js';

export default class Left extends Component {

	constructor (props) {
		super (props);
	}



	render () {
		return (
			<Animated.View style={[stylesheet.leftView, stylesheet.viewBox, this.props.hide ? {display:'none'} : '']}>
				<Text style={{fontSize: 0.3}}>{this.props.title}</Text>
				<Text style={{fontSize: 0.2}}>{this.props.text}</Text>
			</Animated.View>
		);
	}
}

/* <Image style={{width: 1, height: 1, }}
source={require{'./static_assets/cat.jpg'}}
/> */