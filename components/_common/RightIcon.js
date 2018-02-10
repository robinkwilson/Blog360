import React from 'react';

import { View, Text, Image, VrButton, asset } from 'react-vr';

import { _Text } from './_Text.js';
import stylesheet from '../content/stylesheet.js';

export function RightIcon (props) {
  const { setContent, info } = props;
  const { imgRef, title, date, name } = info;
  return (
    <View>
      <VrButton
        onClick={() => setContent(name)}
        style={stylesheet.right_icon_container}>
        
        <Image
          style={stylesheet.right_icon_container}
          source={asset(`${imgRef}`)} />
        <View style={stylesheet.column}>
          <_Text styles={stylesheet.title} text={title} />
          <_Text styles={stylesheet.subtitle} text={date} />
        </View>

      </VrButton>
    </View>
  );
}

export default RightIcon;