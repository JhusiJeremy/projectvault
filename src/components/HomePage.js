// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router';
import PageHeader from './PageHeader';
import BlogContainer from './BlogContainer';
import $ from 'jquery';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    let localhost8080 = window.location.host;
    $.get('http://'+localhost8080+'/api/blogs/', (data, status)=>{
      this.setState({ blogs: data.slice(0,1) });
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
            Trying to use as few package as possible in order to polish my programming skills.
            Bootstrap and <del>JQuery</del> are powerful, but not necessary for building a nice web app.
            Why Project Vault? I was playing Fallout 4 and Borderland 2 when I started this project.
            Vault has implication of treasure, isolation, <del>nuclear war</del> and many cool stuffs. 
            And it also sounds pretty cool.<br /><br />
          </p>

          <p style={{borderBottom: "3px double rgba(0, 0, 0, 0.05)"}}>  
            What's Hot?<br />
          </p>
          <BlogContainer blogs={this.state.blogs} />

          <p style={{borderBottom: "3px double rgba(0, 0, 0, 0.05)"}}>  
            What's New?<br />
          </p>
          <BlogContainer blogs={this.state.blogs} />

          <p style={{borderBottom: "3px double rgba(0, 0, 0, 0.05)"}}>  
            TODO List<br />
          </p>
          <ul style={{display:'block', marginLeft:'38%'}}>
            <li>Add Redux.</li>
            <li>Server side rendering.</li>
            <li>Add some popover and tooltips.</li>
          </ul>
          
        </div>
      </div>
    );
  }
}
HomePage.displayName = "HomePage";


