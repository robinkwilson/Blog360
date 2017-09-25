import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, Animated, VrButton } from 'react-vr';
import { stylesheet} from './index.js';

export default class Left extends Component {

	constructor (props) {
		super (props);
	}

	render () {
		const {imgRef, panoRef, panoRotateY, key} = this.props.info;
		return (
			<View key={key}>
				<VrButton style={{ marginBottom: .1 }} onClick={() => this.props.changePano(panoRef, panoRotateY)}>
					<Image style={{width: 2, height: 1, marginRight: .05}}
source={require(`../../static_assets/cat.jpg`)} />
				</VrButton>
			</View>
		);
	}
}