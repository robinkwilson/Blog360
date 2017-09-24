import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, Animated, VrButton } from 'react-vr';
import { stylesheet} from './index.js';

export default class Left extends Component {

	constructor (props) {
		super (props);
	}

	render () {
		return (
			<Animated.View style={[stylesheet.rightView, stylesheet.viewBox, {alignItems: 'stretch',}, this.props.hide ? {display:'none'} : '']}>
				<VrButton style={{flexDirection: 'row', marginBottom: .1}}>
					<Image style={{width: .75, height: .75, marginRight: .05}}
source={require('../../static_assets/cat.jpg')} />
					<Text style={{fontSize: 0.4, verticalAlign: 'middle'}}>About</Text>
				</VrButton>
				<VrButton style={{flexDirection: 'row'}}>
					<Image style={{width: .75, height: .75, marginRight: .05}}
source={require('../../static_assets/cat.jpg')} />
					<Text style={{fontSize: 0.4, verticalAlign: 'middle'}}>Berlin</Text>
				</VrButton>
				<VrButton style={{flexDirection: 'row', marginBottom: .1}}>
					<Image style={{width: .75, height: .75, marginRight: .05}}
source={require('../../static_assets/cat.jpg')} />
					<Text style={{fontSize: 0.4, verticalAlign: 'middle'}}>Kutna Hora</Text>
				</VrButton>
			</Animated.View>
		);
	}
}

{/* <Image style={{width: 1, height: 1, }}
source={require{'./static_assets/cat.jpg'}}
/> */}