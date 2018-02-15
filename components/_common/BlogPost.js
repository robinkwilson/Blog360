import React from 'react';
import { Text, Animated } from 'react-vr';

import stylesheet from '../content/stylesheet.js';
import _Text from './_Text';

export function BlogPost(props) {
  const { title, text } = props;
  return (
    <Animated.View>
      <_Text styles={ stylesheet.title } text={ title } />
      <_Text styles={ stylesheet.subtitle } text={text} />
    </Animated.View>
  );
}

export default BlogPost;
