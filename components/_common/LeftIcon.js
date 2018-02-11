import React from 'react';

import { View, Image, VrButton, asset } from 'react-vr';
import { connect } from 'react-redux';

import {
  changePano,
} from '../store';
import stylesheet from '../content/stylesheet.js';

export function LeftIcon(props) {
  console.log('10', props);
  const { icon_info, changePano } = props;
  return (
    <VrButton
      style={stylesheet.left_icon_container}
      onClick={() => changePano(icon_info)}
    >

      <Image
        style={stylesheet.left_icon_img}
        source={asset(`${icon_info.thumbnail_img}`)}
      />

    </VrButton>
  );
}

const mapDispatch = (dispatch) => {
  return {
    changePano: (icon_info) => dispatch(changePano(icon_info)),
  }
}

export default connect(null, mapDispatch)(LeftIcon);