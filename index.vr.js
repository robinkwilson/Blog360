import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-vr';

import store from './src/store';
import Home from './src/Home.js';

export default class Blog360 extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Blog360', () => Blog360);