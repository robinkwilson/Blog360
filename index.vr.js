import React from 'react';
import { AppRegistry } from 'react-vr';
import Home from './components/Home.js';

export default class Blog360 extends React.Component {
  render() {
    console.log('1');
    return (
      <Home />
    )
  }
}

AppRegistry.registerComponent('Blog360', () => Blog360);
