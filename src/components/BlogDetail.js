// src/components/BlogDetail.js
import React from 'react';
import { Link, browserHistory } from 'react-router';
import axios from 'axios';

export default class BlogDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: { title: "",
              date: "", 
              imgUrl: "",
              tags:[],
              content: ""
            }
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/blogs/'+this.props.params.id)
      .then(response => {
        if (response.data.length===0)
          browserHistory.push('/notfound');
        else
          this.setState({ blog: response.data[0] });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    let blog = this.state.blog;
    let content = blog.content.split("<br/>");
    return (
      <div className="blog-detail">
        <h1>{blog.title}</h1>
        {(blog.tags.length>1)? <h4>{"Tags:"}</h4>:<h4>{"Tag:"}</h4>}
        {blog.tags.map((tag)=><h4 key={tag}>{tag}</h4>)}
        <p>Last Update: {blog.date.slice(0, blog.date.indexOf("T"))}</p>
        {content.map((paragraph)=><p key={paragraph}>{paragraph}<br/></p>)}
      </div>
    );
  }
}

BlogDetail.displayName = 'BlogDetail';
