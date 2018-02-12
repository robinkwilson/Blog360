import React from 'react';
import { Animated, View } from 'react-vr';
import { connect } from 'react-redux';

import { stylesheet } from './index.js';
import { GrayPanel, BlogPost } from './_common';

export function Middle2(props) {
  const {blog_title, blog_text} = props;
  return (
    <GrayPanel styles={stylesheet.midView}>
      <BlogPost title={blog_title} text={blog_text} />
    </GrayPanel>
  );
}

const mapState = (state) => {
  return {
    blog_title: state.page.page.blog_title,
    blog_text: state.page.page.blog_text,
  }
}

export default connect(mapState)(Middle2);
