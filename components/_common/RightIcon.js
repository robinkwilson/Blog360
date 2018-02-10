import React from 'react';

import { View, Text, Image, VrButton, asset } from 'react-vr';

import { Title } from './Title.js';
import { Subtitle } from './Subtitle.js';
import { stylesheet } from '../content/stylesheet.js';

export default function RightIcon (props) {
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
          <Title text={title} />
          <Subtitle text={date} />
        </View>

      </VrButton>
    </View>
  );
}