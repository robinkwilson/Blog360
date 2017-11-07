import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, Animated, VrButton } from 'react-vr';
import { stylesheet, Right_MenuItem } from './index.js';

export default function Left (props) {

    const { blogEntries, setContent } = props;
    return (
      <Animated.View style={[stylesheet.rightView, stylesheet.viewBox, { alignItems: 'stretch', }, this.props.hide ? { display: 'none' } : '']}>
        <Text style={{ fontSize: 0.2, flexDirection: 'column' }}>{this.props.title}</Text>
        {
          blogEntries.map(blogEntry =>
            (
              <Right_MenuItem setContent={setContent} key={blogEntry.key} info={blogEntry} />
            ))
        }
      </Animated.View>
    );
  }
}
