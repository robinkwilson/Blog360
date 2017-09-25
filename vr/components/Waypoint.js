import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, VrButton, Cylinder, Animated } from 'react-vr';
import stylesheet from '../../static_assets/stylesheet.js';

export default class Waypoint extends Component {

	constructor (props) {
		super (props);
		this.state = {
			x: this.props.x,
			y: this.props.y,
			z: this.props.z,
			color: 'red'
		}
	}


	render () {
		return (
			<VrButton onClick={() => {this.props.click(this.props.place)}} onEnter={() => this.setState({color: 'white'})} onExit={() => this.setState({color: 'red'})}>
				<Cylinder
					radiusTop={.1}
					radiusBottom={0}
					dimHeight={.2}
					segments={10}
					style={{
						transform: [{translate: [this.state.x, this.state.y, this.state.z]}],
						color: this.state.color
					}}
			/></VrButton>
		);
	}
}