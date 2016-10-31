// src/components/AppRoutes.js
import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
// components
import Layout from './Layout';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import BlogPage from './BlogPage';
import NotFoundPage from './NotFoundPage';
// data
import blogs from '../data/blogs';

var routes = (
  <Route path="/" component={Layout}>
    <IndexRoute blogs={blogs} component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="blog" component={BlogPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
    );
  }
}

AppRoutes.displayName = "AppRoutes";