import React from 'react';
import { Animated, View } from 'react-vr';

import stylesheet from '../content/stylesheet.js';

export function GrayPanel (props) {
  const { children, styles } = props;
  console.log(styles);
  return (
    <Animated.View style={[stylesheet.viewBox, styles]}>
      {children}
    </Animated.View>
  );
}

export default GrayPanel;
