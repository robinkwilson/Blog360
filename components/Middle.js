import React from 'react';

import { Text, Animated } from 'react-vr';
import { stylesheet } from './index.js';

export default function Middle(props) {
  const {title, text} = props;
  return (
    <Animated.View
      style={[stylesheet.midView, stylesheet.viewBox]}
    >
      <Text style={{ fontSize: 0.3 }}>{title}</Text>
      <Text style={{ fontSize: 0.2 }}>{text}</Text>
    </Animated.View>
  );
}
