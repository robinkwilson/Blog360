import React, { Component } from 'react';
import { AppRegistry } from 'react-vr';
import Home2 from './components/Home2.js';
import { Provider } from 'react-redux';
import store from './components/store';

export default class Blog360 extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home2 />
      </Provider>
    );
    // return (
    //   <Home />
    // );
  }
}

AppRegistry.registerComponent('Blog360', () => Blog360);
