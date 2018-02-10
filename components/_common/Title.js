import React from 'react';

import { Text } from 'react-vr';
import { stylesheet } from './index.js';

export default function Subtitle(props) {
  const { text } = props;
  return (
    <Text style={ stylesheet.title }>{text}</Text>
  );
}