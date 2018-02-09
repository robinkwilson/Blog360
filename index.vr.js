import React from 'react';
import { AppRegistry } from 'react-vr';
import Home from './components/Home.js';
import Home2 from './components/Home2.js';
import { Provider } from 'react-redux';
import store from './store';

export default class Blog360 extends React.Component {
  render() {
    // return (
    //   <Provider store={store}>
    //     <Home2 />
    //   </Provider>
    // );
    return (
      <Home />
    );
  }
}

AppRegistry.registerComponent('Blog360', () => Blog360);
