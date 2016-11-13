// src/components/AboutPage.js
import React from 'react';
import PageHeader from './PageHeader'

export default class AboutPage extends React.Component {
  render() {
    return (
      <div className="about">
        <PageHeader imgUrl="/img/Aboriginebats-Onea" header1="About Me" header2="To go home." />
        <div className="page-container">
          <p className="preface">
            Sup! Name's Weihong, a new graduate from school. 
            I am actively seeking for entry-level web developing position in california bay area.
            <br /><br />
            My skill set includes C++, JavaScript, Python, React.js, TCP/IP, HTML/CSS and web security. 
            I am new to node.js and mongodb, thus open to any opinion on web construction. 
            Contact me via gmail and github.
          </p>
        </div>
      </div>
    );
  }
}