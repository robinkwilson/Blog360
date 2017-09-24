import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
	VrButton,
	Cylinder
} from 'react-vr';

import { Map, AboutMe, Middle, stylesheet, content } from './index.js';

export default class Home extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
			hide: false,
			curPanorama: 'seattle.jpg'
    }
    this._onPressButton = this._onPressButton.bind(this);
  }

  _onPressButton () {
    if (!this.state.hide) this.setState({ hide: true });
    else this.setState({ hide: false });
    console.log(this.state.hide);
	}

  render() {
		console.log(Map);
    return (
      <View>
        <Pano source={asset(this.state.curPanorama)} style={{
          transform: [
				    {rotateY: -120}],}}/>

          <VrButton
            style={stylesheet.toggleViewButton}
            onClick={this._onPressButton}
          ><Text
          style={{
            fontSize: 0.4,
            fontWeight: '400',
          }}>
          {this.state.hide ? 'Show' : 'Hide'}
        </Text></VrButton>

				<VrButton
				onClick={() => {this.setState({curPanorama: 'dresden.jpg'})}}>
				<Cylinder
					radiusTop={.1}
					radiusBottom={0}
					dimHeight={.2}
					segments={10}
					style={{
						transform: [{translate: [-2.2, -.1, -2.5]}],
						color: "red"
						}}
				/></VrButton>

        <Middle hide={this.state.hide} isDefaultView={true} title={'About Me'} text={'Lorem ipsum dolor sit amet, id fierent instructior est. Malis volumus posidonium te qui. Te eum nulla integre pericula, sit nobis tation maiestatis ut. Mea ad summo aperiri maiestatis. An mel esse aperiri tibique, at sea tibique moderatius, dolore appareat officiis cum cu.'} />
        <Map hide={this.state.hide} />
      </View>
    );
  }
};

AppRegistry.registerComponent('Blog360', () => Blog360);

/* <Image style={{width: 1, height: 1, }}
source={require{'./static_assets/cat.jpg'}}
/> */

        /* <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          hello
        </Text> */