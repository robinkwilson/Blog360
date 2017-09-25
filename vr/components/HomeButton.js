import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, VrButton } from 'react-vr';
import { stylesheet } from './index.js';

export default class HomeButton extends Component {

	constructor (props) {
		super (props);
		this.state = {
			backgroundColor: '#00004c80'
		}
	}

	render () {
		return (
			<VrButton style={[
				stylesheet.homeButton, 
				{backgroundColor: this.state.backgroundColor}]} onClick={() => this.props.resetHome()} onEnter={() => this.setState({backgroundColor: '#00004c'})} onExit={() => this.setState({backgroundColor: '#00004c80'})}>
				<Text
          style={{
            fontSize: 0.4,
            fontWeight: '400',
						textAlign: 'center',
          }}>
          Home
        </Text></VrButton>
		);
	}
}