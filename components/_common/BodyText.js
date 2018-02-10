import React from 'react';

import { Text } from 'react-vr';
import { stylesheet } from './index.js';

export default function SubTitle(props) {
  const { text } = props;
  return (
    <Text style={ stylesheet.bodyText }>{text}</Text>
  );
}