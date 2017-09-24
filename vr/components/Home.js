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

import { Map, AboutMe, Middle, Waypoint, ShowHideButton, stylesheet, content } from './index.js';

export default class Home extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
			hide: false,
			viewArray: ['aboutPage'],
			curPanoViewRotateY: -120,
			curPanoPhoto: 'seattle.jpg',
			curMap: 'globeStaticView.jpg',
    }
		this.handleHide = this.handleHide.bind(this);
		this.handleBack = this.handleBack.bind(this);
  }

  handleHide () {
    if (!this.state.hide) this.setState({ hide: true });
    else this.setState({ hide: false });
    console.log(this.state.hide);
	}
	
	setNewPlace(content) {
		this.setState({
			curPanoViewRotateY: content.pano.rotateY,
			curPanoPhoto: content.pano.imgRef,
			curMap: content.map.imgRef,
		})
	}

	handleBack () {
		console.log("back back");
	}

	click (place) {
		console.log(place);
	}

  render() {
		console.log(Map);

    return (
      <View>
        <Pano source={asset(this.state.curPanoPhoto)} style={{
          transform: [
				    {rotateY: this.state.curPanoViewRotateY}],}}/>

				<ShowHideButton handleHide={this.handleHide} hide={this.state.hide} />

				{/* EasternEurope */}
				<Waypoint hide={this.state.hide} click={this.click} place={'easternEurope'} x={-2.2} y={-.23} z={-3} />
				<Waypoint hide={this.state.hide} click={this.click} place={'seattle'} x={-3.43} y={-0.35} z={-3} />

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