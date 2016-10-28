// src/components/BlogBox.js
import React from 'react';
import { Link } from 'react-router';

export default class BlogBox extends React.Component {
  render() {
    return (
      <div className="blog-box">
        <img src={this.props.imgUrl} />
        <p>{this.props.title}</p>
      </div>
    );
  }
}

BlogBox.propTypes = {
  imgUrl: React.PropTypes.string,
  title: React.PropTypes.string,
}

BlogBox.displayName = "BlogBox";