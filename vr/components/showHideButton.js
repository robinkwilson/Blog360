import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, VrButton } from 'react-vr';
import { stylesheet } from './index.js';

export default class ShowHideButton extends Component {

	constructor (props) {
		super (props);
		this.state = {
			backgroundColor: '#77787980'
		}
	}

	render () {
		return (
			<VrButton style={[
				stylesheet.toggleViewButton, 
				{backgroundColor: this.state.backgroundColor}]} onClick={() => this.props.handleHide()} onEnter={() => this.setState({backgroundColor: '#777879'})} onExit={() => this.setState({backgroundColor: '#77787980'})}>
				<Text
          style={{
            fontSize: 0.4,
            fontWeight: '400',
						textAlign: 'center',
          }}>
          {this.props.hide > 0 ? 'Show' : 'Hide'}
        </Text></VrButton>
		);
	}
}