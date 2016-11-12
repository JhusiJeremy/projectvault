// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router';
import PageHeader from './PageHeader';
import BlogBox from './BlogBox';
import axios from 'axios';

export default class HomePage extends React.Component {
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
      <div className="home">
        <PageHeader imgUrl="/img/Monkey-BusinessA" header1="Project Vault" header2="This ain't no place for no hero." />
        <div className="page-container">
          <p>
            Welcome to my playground!<br /><br />
          </p>
          <p style={{textAlign: "left"}}>  
            It is the place where I can try any web technology I have learned.
            This site is currently constructed using Node.js, React.js and Mongodb.
            I am trying to use as few package as possible in order to polish my programming skills. <br /><br />
          </p>
          <p>  
            So...What's in the box?<br /><br />
          </p>
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
      </div>
    );
  }
}
HomePage.displayName = "HomePage";


