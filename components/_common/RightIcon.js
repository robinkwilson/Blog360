import React from 'react';

import { View, Text, Image, VrButton, asset } from 'react-vr';
import { connect } from 'react-redux';

import { changePageThunk } from '../store';
import { _Text } from './_Text.js';
import stylesheet from '../content/stylesheet.js';

export function RightIcon (props) {
  const { icon_info, changePageThunk } = props;
  //const { imgRef, title, date, name } = info;
  return (
    <View>
      <VrButton
        onClick={() => changePageThunk(icon_info.page_id)}
        style={stylesheet.right_icon_container}>
        
        <Image
          style={stylesheet.right_icon_container}
          source={asset(`${imgRef}`)} />
        <View style={stylesheet.column}>
          <_Text styles={stylesheet.title} text={icon_info.title} />
          <_Text styles={stylesheet.subtitle} text={icon_info.date} />
        </View>

      </VrButton>
    </View>
  );
}

const mapDispatch = (dispatch) => {
  return {
    changePageThunk: (icon_id) => dispatch(changePageThunk(icon_id)),
  }
}

export default connect(null, mapDispatch)(RightIcon);