// src/components/BlogPage.js
import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import BlogBox from './BlogBox';

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/blogs')
      .then(response => {
        this.setState({ blogs: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="page-container">
        <p>This is the blog page</p>
        <div className="blogs-container">
          {this.state.blogs.map(blog=> {
            return (
              <BlogBox key={blog.title} imgUrl={blog.imgUrl} title={blog.title} />
            );
          })}
        </div>
      </div>
    );
  }
}

BlogPage.displayName = 'BlogPage';
