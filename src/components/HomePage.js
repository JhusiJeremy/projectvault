// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router';
import PageHeader from './PageHeader'

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <PageHeader imgUrl="/img/Monkey-BusinessA" />
        <p>程序猿拯救世界！</p>
      </div>
    );
  }
}