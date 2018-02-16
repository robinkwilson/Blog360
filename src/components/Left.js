import React, { Component } from 'react';
import { Animated, View, StyleSheet } from 'react-vr';
import { connect } from 'react-redux';

import stylesheet from './content/stylesheet.js';
import { GrayPanel, _Text, LeftIcon } from './_common';

export function Left(props) {
  const { page } = props;
  return (
    <Animated.View>
      <_Text styles={stylesheet.left_panel_text} text={'Featured Photos'} />
      <GrayPanel styles={stylesheet.left_view}>
        <View style={stylesheet.left_imgs_container}>
          {
            page && page.left_icons && page.left_icons.map(
              (icon) => (<LeftIcon key={icon.id} icon_info={icon} />)
            )
          }
        </View>
      </GrayPanel>
    </Animated.View>
  );
}

const mapState = (state) => {
  //const { page, loaded_panos } = state;
  return {
    page: state.page.page
  }
}

export default connect(mapState)(Left);