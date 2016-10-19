// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <h1 className="header">OMG You Got Me!</h1>
        <img className="logo" src="/img/OMG.jpg"/>
        <p>
          This is the Main Page!
        </p>
      </div>
    );
  }
}