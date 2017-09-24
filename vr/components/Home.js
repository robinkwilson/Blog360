import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
	VrButton,
  Cylinder,
  Animated,
} from 'react-vr';

import { 
  Right, 
  Left,
  Map, 
  Middle, 
  Waypoint, 
  ShowHideButton, 
  AboutPage,
  NewPage,
  stylesheet, 
  content } from './index.js';

export default class Home extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      hideSlide: new Animated.Value(1),
      hide: false,
			viewArray: ['aboutPage'],
			curPanoViewRotateY: -135,
			curPanoPhoto: 'seattle.jpg',
      curMap: 'globeStaticView.jpg',
      curContent: content.staticTest,
    }
		this.handleHide = this.handleHide.bind(this);
    this.click = this.click.bind(this);
  }

  handleHide () {
    if (!this.state.hide) { // visible > hidden
      this.setState({hide: true});
      Animated.timing(
        this.state.hideSlide,
        {
          toValue: 0,
          duration: 1000,
        }
      ).start (); 
    } else { // hidden > visible
      this.setState({hide: false});
      Animated.timing(
        this.state.hideSlide,
        {
          toValue: 1,
          duration: 1000,
        }
      ).start (); 
    }
	}
	
	// setNewPlace(curContent) {
	// 	this.setState({
	// 		curPanoViewRotateY: curContent.defaultPano.rotateY,
	// 		curPanoPhoto: curContent.defaultPano.imgRef,
	// 		curMap: curContent.map.imgRef,
	// 	})
	// }

	// handleBack () {
	// 	console.log("back back");
	// }

	click (place) {
		console.log(place);
	}

  render () {
    console.log(1);
    return (
      <View>
        <Pano 
          source={asset(this.state.curPanoPhoto)} 
          style={{
            transform: [{rotateY: this.state.curPanoViewRotateY}]
          }}
        />

				<ShowHideButton handleHide={this.handleHide} hide={this.state.hide} />

        <Animated.View style={{opacity: this.state.hideSlide}}>

        
          <AboutPage clickWaypoint={this.click}/> 

        </Animated.View>
      </View>
    );
  }
};

AppRegistry.registerComponent('Blog360', () => Blog360);