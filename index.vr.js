import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import AboutMe from './vr/components/AboutMe.js';
import Map from './vr/components/Map.js'

export default class Blog360 extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('seattle.jpg')} style={{
          transform: [
				    {rotateY: -120}],}}/>
        <AboutMe />
        <Map />

      </View>
    );
  }
};

AppRegistry.registerComponent('Blog360', () => Blog360);

/* <Image style={{width: 1, height: 1, }}
require={'./static_assets/cat.jpg'}
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