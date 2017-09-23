import React, { Component } from 'react';

import { View, Text, Image, StyleSheet } from 'react-vr';
import stylesheet from '../../static_assets/stylesheet.js';

export default class AboutMe extends Component {

	constructor (props) {
		super (props);
	}

	render () {
		return (
			<Pano source={asset('dresden.jpg')} />
		);
	}
}