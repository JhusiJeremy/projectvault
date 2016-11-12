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
    axios.get('http://localhost:8080/api/blogs/5816fa40bf32812bf34d9d32')
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
          <p style={{borderBottom: "3px double rgba(0, 0, 0, 0.05)"}}>
            Welcome!<br />
          </p>
          <p className="preface">  
            This is the place where I can play around any web technology I have learned.
            The site is currently constructed using Node.js, React.js and Mongodb.
            Not familiar with Redux and Mongodb's userAdminAnyDatabase, working on it.
            Trying to use as few package as possible in order to polish my programming skills.
            Bootstrap and JQuery are powerful, but not necessary for building a nice web app.<br /><br />
          </p>
          <p style={{borderBottom: "3px double rgba(0, 0, 0, 0.05)"}}>  
            What's Hot?<br />
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
          <br /><br />
          <p style={{borderBottom: "3px double rgba(0, 0, 0, 0.05)"}}>  
            What's in Your Mind?<br />
          </p>
          something
        </div>
      </div>
    );
  }
}
HomePage.displayName = "HomePage";


