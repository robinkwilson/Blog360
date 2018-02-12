import React, { Component } from 'react';
// import { View, Text, Image, StyleSheet, Animated } from 'react-vr';
import { connect } from 'react-redux';

import { stylesheet } from './index.js';
import { GrayPanel, _Text, LeftIcon } from './_common';

export function Left2(props) {
  const { page } = props;
  return (
    <GrayPanel styles={stylesheet.leftView}>
      <_Text styles={stylesheet.left_panel_container} text={'Featured Photos'} />
      {
        page && page.left_icons && page.left_icons.map(
          (icon) => (<LeftIcon key={icon.id} icon_info={icon} />)
        )
      }
    </GrayPanel>
  );
}

const mapState = (state) => {
  //const { page, loaded_panos } = state;
  return {
    page: state.page.page
  }
}

export default connect(mapState)(Left2);