// src/components/BlogLayout.js

import React from 'react';
import PageHeader from './PageHeader';

export default class BlogDetail extends React.Component {

  render() {
    return (
      <div className="blog">
        <PageHeader imgUrl="/img/AffigMonkeysA.png" header1="My Blogs" header2="This ain't no place for no better men." />
        {this.props.children || "Nothing found in Blog Page."}
      </div>
    );
  }
}

BlogDetail.displayName = 'BlogLayout';