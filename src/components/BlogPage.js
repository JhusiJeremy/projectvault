// src/components/BlogPage.js
import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import BlogBox from './BlogBox';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    let that = this;
    let localhost8080 = window.location.host;
    $.get('http://'+localhost8080+'/api/blogs/', function(data, status){
      that.setState({ blogs: data });
    });
  }

  render() {
    return (
      <div className="page-container">
        <div className="blogs-container">
          {this.state.blogs.map(blog=> {
            return (
              <BlogBox 
                key={blog.title} 
                imgUrl={blog.imgUrl} 
                title={blog.title}
                _id={blog._id} />
            );
          })}
        </div>
      </div>
    );
  }
}

BlogPage.displayName = 'BlogPage';
