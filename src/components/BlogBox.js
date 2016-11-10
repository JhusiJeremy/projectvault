// src/components/BlogBox.js
import React from 'react';
import { Link } from 'react-router';

export default class BlogBox extends React.Component {
  render() {
    return (
      <div className="blog-box">
        <img src={this.props.imgUrl} />
        <Link to={`/blog/${this.props._id}`}><p>{this.props.title}</p></Link>
      </div>
    );
  }
}

BlogBox.propTypes = {
  imgUrl: React.PropTypes.string,
  title: React.PropTypes.string,
  _id: React.PropTypes.string
}

BlogBox.displayName = "BlogBox";