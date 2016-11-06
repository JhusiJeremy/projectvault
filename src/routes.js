// src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
// components
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import BlogDetail from './components/BlogDetail';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="blog" component={BlogPage}/>
    <Route path="blog/:id" component={BlogDetail} />
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;