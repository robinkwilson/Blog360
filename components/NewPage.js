import React from 'react';

import { Pano } from 'react-vr';

export default function AboutMe() {
  return (
    <Pano source={asset('dresden.jpg')} />
  );
}
