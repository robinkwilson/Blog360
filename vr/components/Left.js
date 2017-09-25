import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, Animated, VrButton } from 'react-vr';
import { stylesheet, Left_Images} from './index.js';

export default class Left extends Component {

	constructor (props) {
		super (props);
	}

	render () {
		return (
			<Animated.View style={[stylesheet.leftView, stylesheet.viewBox, this.props.hide ? {display:'none'} : '']}>
				<Text style={{fontSize: 0.2, flexDirection: 'column'}}>{this.props.title}</Text>
				{
					this.props.imagesAndPanoInfo.map( info => 
						<Left_Images key={info.key} changePano={this.props.changePano} info={info} />
					)
				}
			</Animated.View>
		);
	}
}
