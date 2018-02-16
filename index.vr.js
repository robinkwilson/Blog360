import React, { Component } from 'react';
import { AppRegistry } from 'react-vr';
import Home from './components/Home.js';
import { Provider } from 'react-redux';
import store from './components/store';

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
