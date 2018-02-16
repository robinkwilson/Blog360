import React from 'react';
import { Animated, View, StyleSheet } from 'react-vr';

import stylesheet from '../../content/stylesheet.js';

export function GrayPanel (props) {
  const { children, styles } = props;
  return (
    <Animated.View style={StyleSheet.flatten([stylesheet.view_panel, styles])}>
      {children}
    </Animated.View>
  );
}

export default GrayPanel;
