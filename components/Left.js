import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, Animated, VrButton } from 'react-vr';
import { stylesheet, Left_Images } from './index.js';

export default function Left(props) {
  const { title, imagesAndPanoInfo, changePano, hide } = props;
  return (
    <Animated.View
      style={[stylesheet.leftView, stylesheet.viewBox, hide ? { display: 'none' } : '']}>
      <Text style={{ fontSize: 0.2, flexDirection: 'column' }}>{title}</Text>
      {
        imagesAndPanoInfo.map(info =>
          <Left_Images
            key={info.key}
            changePano={changePano}
            info={info} />
        )
      }
    </Animated.View>
  );
}

