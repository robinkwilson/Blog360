import React from 'react';

import { View, Image, VrButton, asset } from 'react-vr';
import { connect } from 'react-redux';

import { changePageThunk } from '../store';
import { _Text } from './index.js';
import stylesheet from '../content/stylesheet.js';

export function RightIcon (props) {
  const { icon_info, changePage } = props;
  console.log('right_Icon_container styles rightIcon:', stylesheet.right_icon_container);
  console.log('right_icon_img styles rightIcon:', stylesheet.right_icon_img);
  return (
    <View>
      <VrButton
        onClick={() => changePage(icon_info.page_id)}
        style={stylesheet.right_icon_container}>
        
        <Image
          style={stylesheet.right_icon_img}
          source={asset(`${icon_info.icon_thumbnail}`)} />
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
    changePage: (icon_id) => dispatch(changePageThunk(icon_id)),
  }
}

export default connect(null, mapDispatch)(RightIcon);