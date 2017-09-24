import React from 'react';
import { AppRegistry } from 'react-vr';
import Home from './vr/components/Home.js';

export default class Blog360 extends React.Component {
  render () {
    return (
      <Home />
    )
  }
}

AppRegistry.registerComponent('Blog360', () => Blog360);