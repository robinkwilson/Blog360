import React from 'react';

import { View, Image, VrButton, asset } from 'react-vr';

import stylesheet from '../content/stylesheet.js';

export function LeftIcon(props) {
  const { changePano, key } = props;
  const { panoRef, panoRotateY, imgRef } = props.info;
  return (
    <View key={key}>
      <VrButton
        style={stylesheet.left_icon_container}
        onClick={() => changePano(panoRef, panoRotateY)}
      >

        <Image
          style={stylesheet.left_icon_img}
          source={asset(`${imgRef}`)}
        />

      </VrButton>
    </View>
  );
}

export default LeftIcon;