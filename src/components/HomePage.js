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
            Welcome!<br /><br />
            It is nice to have you around.<br /><br />
            Should I introduce myself first?<br /><br />
            Alright!<br /><br />
            Who am I? I am a<br /><br />
            nerd, dreamer, loser,<br /><br />
            dotaer, OWer, vault dweller,<br /><br />
            五迷，海龟，人群恐惧症患者<br /><br />
            ......<br /><br />
            Wait!<br /><br />
            You are leaving?
          </p>
          <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', borderRadius: '50%'}} src="/img/OMG.jpg" />
          <p>
            Alright, alright ...<br /><br />
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


