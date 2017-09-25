import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, VrButton, Cylinder, Animated } from 'react-vr';
import stylesheet from '../../static_assets/stylesheet.js';

export default class Waypoint extends Component {

	constructor (props) {
		super (props);
		this.state = {
			color: this.props.selected ? "yellow" : "red"
		}
	}


	render () {
		const { x, y, z, selected, setContent, place } = this.props;
		return (
			<VrButton onClick={() => {setContent(place)}} onEnter={() => this.setState({color: selected ? "white" : "yellow"})} onExit={() => this.setState({color: selected ? "yellow" : "red"})}>
				<Cylinder
					radiusTop={.1}
					radiusBottom={0}
					dimHeight={.2}
					segments={10}
					style={{
						transform: [{translate: [x, y, z]}],
						color: this.state.color
					}}
			/></VrButton>
		);
	}
}