// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router';
import PageHeader from './PageHeader';
import BlogBox from './BlogBox';
import $ from 'jquery';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    let that = this;
    $.get('http://localhost:8080/api/blogs/', function(data, status){
      that.setState({ blogs: data.slice(0,1) });
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
            Bootstrap and <del>JQuery</del> are powerful, but not necessary for building a nice web app.
            Why Project Vault? I was playing Fallout 4 and Borderland 2 when I started this project.
            Vault has implication of treasure, isolation, <del>nuclear war</del> and many cool stuffs. 
            And it also sounds pretty cool<br /><br />
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

          <p style={{borderBottom: "3px double rgba(0, 0, 0, 0.05)"}}>  
            What's New?<br />
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

          <p style={{borderBottom: "3px double rgba(0, 0, 0, 0.05)"}}>  
            TODO List<br />
          </p>
          <ul style={{display:'block', marginLeft:'38%'}}>
            <li>Deploy on Amazon EC2.</li>
          </ul>
          
        </div>
      </div>
    );
  }
}
HomePage.displayName = "HomePage";


