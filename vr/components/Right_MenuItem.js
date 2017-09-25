import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, Animated, VrButton } from 'react-vr';
import { stylesheet} from './index.js';

export default class Right_MenuItem extends Component {

	constructor (props) {
		super (props);
	}

	render () {
		const {imgRef, title, date} = this.props.info;
		return (
			<View>
				<VrButton style={{flexDirection: 'row', marginBottom: .1}}>
					<Image style={{width: .75, height: .75, marginRight: .05}}
source={require(`../../static_assets/cat.jpg`)} />
					<View style={{flexDirection: 'column'}}>
						<Text style={{fontSize: 0.3, textAlign: 'left'}}>{title}</Text>
						<Text style={{fontSize: 0.2, textAlign: 'left'}}>{date}</Text>
					</View>
				</VrButton>
			</View>
		);
	}
}


