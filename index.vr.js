import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';
import AboutMe from './vr/components/AboutMe.js';
import Map from './vr/components/Map.js';
import Middle from './vr/components/Middle.js';
import { MemoryRouter, Redirect, Route, Switch } from 'react-router';

export default class Blog360 extends React.Component {
  render() {
    return (
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
  }
  constructor (props) {
    super(props);
    this.state = {
      hide: false,
    }
    this._onPressButton = this._onPressButton.bind(this);
  }

  _onPressButton () {
    if (!this.state.hide) this.setState({ hide: true });
    else this.setState({ hide: false });
    console.log(this.state.hide);
  }

  render() {
    return (
      <View>
        <Pano source={asset('seattle.jpg')} style={{
          transform: [
				    {rotateY: -120}],}}/>
          <VrButton
            style={{
              width: 1, 
              height: .5, 
              textAlign: 'center',
              textAlignVertical: 'center',
              backgroundColor: '#77787980', 
              transform: [{translate: [-2, 3, -5]}]}}
            onClick={this._onPressButton}
          ><Text
          style={{
            fontSize: 0.4,
            fontWeight: '400',
          }}>
          {this.state.hide ? 'Show' : 'Hide'}
        </Text></VrButton>
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