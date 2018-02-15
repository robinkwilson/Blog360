import React, { Component } from 'react';
import { View, StyleSheet } from 'react-vr';
import { connect } from 'react-redux';

import { stylesheet } from './index.js';
import { GrayPanel, _Text, LeftIcon } from './_common';

export function Left2(props) {
  const { page } = props;
  return (
    <View>
      <_Text styles={stylesheet.left_panel_text} text={'Featured Photos'} />
      <GrayPanel styles={stylesheet.leftView}>
        <View style={stylesheet.left_img_container}>
          {
            page && page.left_icons && page.left_icons.map(
              (icon) => (<LeftIcon key={icon.id} icon_info={icon} />)
            )
          }
        </View>
      </GrayPanel>
    </View>
  );
}

const mapState = (state) => {
  //const { page, loaded_panos } = state;
  return {
    page: state.page.page
  }
}

export default connect(mapState)(Left2);