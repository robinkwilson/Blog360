import React, { Component } from 'react';

import { VrButton, Cylinder } from 'react-vr';

export default class Waypoint extends Component {

	constructor(props) {
		super(props);
		this.state = {
			color: props.selected ? 'yellow' : 'red'
		};
	}

	render() {
		const { x, y, z, selected, setContent, place } = this.props;
		return (
			<VrButton
				onClick={() => { setContent(place)}}
				onEnter={() => this.setState({ color: selected ? 'white' : 'yellow' })}
				onExit={() => this.setState({ color: selected ? 'yellow' : 'red' })}>
				<Cylinder
					radiusTop={0.1}
					radiusBottom={0}
					dimHeight={0.2}
					segments={10}
					style={{
						transform: [{ translate: [x, y, z] }],
						color: this.state.color
					}}
				/>
			</VrButton>
		);
	}
}
