// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router';
import PageHeader from './PageHeader'
import blogs from '../data/blogs'
import BlogBox from './BlogBox'

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <PageHeader imgUrl="/img/Monkey-BusinessA" header1="Vault Project" header2="This ain't no place for no hero." />
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
            {blogs.map(blog=> {
              return (
                <BlogBox imgUrl={blog.imgUrl} title={blog.title} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

