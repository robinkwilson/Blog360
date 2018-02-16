import React from 'react';

import { View, Image, asset } from 'react-vr';
import stylesheet from './content/stylesheet.js';

export default function MapView(props) {
  return (
      <View
        style= {[
          stylesheet.mapView,
          stylesheet.viewBox]
        }>
      <Image
        style={stylesheet.mapImage}
        source={asset('/globeStaticView.jpeg')} />
      </View>
    );
}
