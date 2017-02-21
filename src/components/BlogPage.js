// src/components/BlogPage.js
import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import BlogContainer from './BlogContainer';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    let localhost8080 = window.location.host;
    $.get('http://'+localhost8080+'/api/blogs/', (data, status)=>{
      this.setState({ blogs: data });});
  }

  render() {
    return (
      <div className="page-container">
        <BlogContainer blogs={this.state.blogs} />
      </div>
    );
  }
}

BlogPage.displayName = 'BlogPage';
