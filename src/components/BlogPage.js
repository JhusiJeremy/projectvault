// src/components/BlogPage.js
import React from 'react';
import { Link } from 'react-router';
import PageHeader from './PageHeader'

export default class BlogPage extends React.Component {
  render() {
    return (
      <div className="blog">
        <PageHeader imgUrl="/img/AffigMonkeysA.png" header1="My Blogs" header2="This ain't no place for no better men." />
        <div className="page-container">
          <p>This is the blog page</p>
        </div>
      </div>
    );
  }
}