import React from 'react';
import {
  View,
} from 'react-vr';

import {
  Right,
  Left,
  Middle,
  content } from './index.js';

export default class Germany extends React.Component {

  componentDidMount () {
    this.props.changePano('berlin.jpg', 0);
  }

  render() {
    const { changePano, clickWaypoint, setContent } = this.props
    const { imagesAndPanoInfo, blogEntries } = content.germany
    return (
      <View>
          <Left
            hide={false}
            title={'Germany'}
            changePano={changePano}
            imagesAndPanoInfo={imagesAndPanoInfo} />

          <Right
            hide={false}
            title={'Blog Posts'}
            blogEntries={blogEntries} />

          <Middle
            title={'Berlin and Dresden'}
            text={'Photos of Berlin and Dresden in Germany!'} />
      </View>
    );
  }
};
