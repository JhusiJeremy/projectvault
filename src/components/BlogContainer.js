// src/components/BlogBox.js
import React from 'react';
import { Link } from 'react-router';

export default class BlogContainer extends React.Component {
  render() {
    let style = {};
    if (this.props.blogs.length<3) {
      style.WebkitColumnCount= this.props.blogs.length; /* Chrome, Safari, Opera */
      style.MozColumnCount= this.props.blogs.length; /* Firefox */
      style.ColumnCount= this.props.blogs.length;
    }
    return (
      <div className="blogs-container" style={style}>
        {this.props.blogs.map(blog=> {
          return (
            <BlogBox 
              key={blog.title} 
              imgUrl={blog.imgUrl} 
              title={blog.title}
              _id={blog._id} />
          );
        })}
      </div>
);}}
BlogContainer.propTypes = {
  blogs: React.PropTypes.array.isRequired
}
BlogContainer.displayName = "BlogContainer";

class BlogBox extends React.Component {
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
