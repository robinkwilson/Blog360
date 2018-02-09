import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
  Animated,
} from 'react-vr';

import {
  ShowHideButton,
  AboutPage,
  HomeButton,
  EasternEurope,
  WorldMap,
  Germany
} from './index.js';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hideSlide: new Animated.Value(1),
      hide: false,
      viewArray: ['aboutPage'],
      curPanoViewRotateY: -135,
      curPanoPhoto: 'seattle.jpg',
      curMap: 'globeStaticView.jpg',
      curContent: 'Home',
    };

    this.handleHide = this.handleHide.bind(this);
    this.click = this.click.bind(this);
    this.changePano = this.changePano.bind(this);
    this.resetHome = this.resetHome.bind(this);
    this.setContent = this.setContent.bind(this);
  }

  handleHide() {
    if (!this.state.hide) { // visible > hidden
      this.setState({ hide: true });
      Animated.timing(
        this.state.hideSlide,
        {
          toValue: 0,
          duration: 1000,
        }
      ).start();
    } else { // hidden > visible
      this.setState({ hide: false });
      Animated.timing(
        this.state.hideSlide,
        {
          toValue: 1,
          duration: 1000,
        }
      ).start();
    }
  }

  changePano(imgRef, rotateY) {
    this.setState({
      curPanoViewRotateY: rotateY,
      curPanoPhoto: imgRef,
    })
  }

  resetHome() {
    this.setState({
      curContent: 'Home',
      curPanoViewRotateY: -135,
      curPanoPhoto: 'seattle.jpg',
    });

  }

  setContent(name) {
    name === 'Home'
      ? this.resetHome()
      : this.setState({
        curContent: name
      });
  }

  click(place) {
    console.log(place);
  }

  render() {
    const { curContent, curPanoViewRotateY, curPanoPhoto, hide, hideSlide } = this.state;
    return (
      <View>
        <Pano
          source={asset(curPanoPhoto)}
          style={{
            transform: [{ rotateY: curPanoViewRotateY }]
          }}
        />

        <ShowHideButton handleHide={this.handleHide} hide={hide} />

        <Animated.View style={{ opacity: hideSlide }}>
          <HomeButton resetHome={this.resetHome} />
          {'Home' === curContent &&
            <AboutPage changePano={this.changePano} clickWaypoint={this.click} setContent={this.setContent} />
          }
          {'EasternEurope' === curContent &&
            <EasternEurope changePano={this.changePano} clickWaypoint={this.click} setContent={this.setContent} />
          }
          {('EasternEurope' === curContent || 'Home' === curContent) &&
            <WorldMap setContent={this.setContent} curWaypoint={curContent === 'Home' ? 'Seattle' : 'EasternEurope'} />
          }

          {'Germany' === curContent &&
            <Germany changePano={this.changePano} clickWaypoint={this.click} setContent={this.setContent} />
          }
          {'Prague' === curContent &&
            <EasternEurope changePano={this.changePano} clickWaypoint={this.click} setContent={this.setContent} />
          }
          {'KutnaHora' === curContent &&
            <EasternEurope changePano={this.changePano} clickWaypoint={this.click} setContent={this.setContent} />
          }
        </Animated.View>
      </View>
    );
  }
}