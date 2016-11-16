// src/components/BlogDetail.js
import React from 'react';
import { Link, browserHistory } from 'react-router';
import $ from 'jquery';
import hljs from 'highlight.js';

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
    let that = this;
    $.get('http://localhost:8080/api/blogs/'+this.props.params.id, function(data, status){
      if (data.length===0)
        browserHistory.push('/notfound');
      else
        that.setState({ blog: data[0] });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }

  render() {
    let blog = this.state.blog;
    let content = blog.content;
    return (
      <div className="blog-detail">
        <h1>{blog.title}</h1>
        {(blog.tags.length>1)? <h4>{"Tags:"}</h4>:<h4>{"Tag:"}</h4>}
        {blog.tags.map((tag)=><h4 key={tag}>{tag}</h4>)}
        <p>Last Update: {blog.date.slice(0, blog.date.indexOf("T"))}</p>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
    );
  }
}

BlogDetail.displayName = 'BlogDetail';
