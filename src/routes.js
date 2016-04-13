import React from 'react';
import { Router, Route, IndexRoute, RouteHandler } from 'react-router';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import NotFoundPage from './pages/NotFound';
import Layout from './containers/Layout';

const routes = (
  <Router>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage}/>
      <Route path="about" component={AboutPage}/>
    </Route>
    <Route path="*" component={NotFoundPage}/>
  </Router>
);

export default routes;
