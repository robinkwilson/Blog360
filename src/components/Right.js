import React, { Component } from 'react';
import { connect } from 'react-redux';

import stylesheet from '../content/stylesheet.js';
import { GrayPanel, RightIcon } from './_common';

export function Right (props) {
  const { page } = props;
  return (
    <GrayPanel styles={stylesheet.right_view}>
      {
        page && page.right_icons && page.right_icons.map(
          icon => (<RightIcon key={icon.icon_id} icon_info={icon} />)
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

export default connect(mapState)(Right);