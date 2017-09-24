import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, VrButton } from 'react-vr';
import { stylesheet } from './index.js';

export default class ShowHideButton extends Component {

	constructor (props) {
		super (props);
	}

	render () {
		return (
			<VrButton style={stylesheet.toggleViewButton} onClick={() => this.props.handleHide()}>
				<Text
          style={{
            fontSize: 0.4,
            fontWeight: '400',
          }}>
          {this.props.hide > 0 ? 'Show' : 'Hide'}
        </Text></VrButton>
		);
	}
}