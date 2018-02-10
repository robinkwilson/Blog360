import React from 'react';
import { Text, Animated } from 'react-vr';

import { stylesheet } from './index.js';
import _Text from './_Text';

export function BlogPost(props) {
  const { title, text } = props;
  return (
    <Animated.View>
      <_Text style={ stylesheet.title } text={ title } />
      <_Text style={ stylesheet.subtitle } text={text} />
    </Animated.View>
  );
}

export default BlogPost;
