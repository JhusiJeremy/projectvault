// src/components/AboutPage.js
import React from 'react';
import PageHeader from './PageHeader'

export default class AboutPage extends React.Component {
  render() {
    return (
      <div className="about">
        <PageHeader imgUrl="/img/Aboriginebats-Onea" />
        <div className="page-container">
          <p>
            About Me <br /><br />
            You do not need to know too much. <br /><br />
            Only thing you need to know is that, <br /><br />
            I am Here <br /><br />
            and you are here. <br /><br />
            Have a nice day! 
          </p>
        </div>
      </div>
    );
  }
}