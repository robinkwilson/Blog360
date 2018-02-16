import React from 'react';
import { Animated, View } from 'react-vr';
import { connect } from 'react-redux';

import stylesheet from './content/stylesheet.js';
import { GrayPanel, BlogPost } from './_common';

export function Middle(props) {
  const {blog_title, blog_text} = props;
  return (
    <GrayPanel styles={stylesheet.mid_view}>
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

export default connect(mapState)(Middle);
