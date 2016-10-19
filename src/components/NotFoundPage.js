// src/components/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router'; 

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="notfound">
        <h1>404</h1>
        <h2>Page Not Found!</h2>
        <div className="">
          <p>
            <Link to='/'>Go back to home page.</Link>
          </p>
        </div>
      </div>
    );
  }
}