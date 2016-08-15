import React from 'react';
import { Router, Route, IndexRoute, RouteHandler } from 'react-router';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import NotFoundPage from './pages/NotFound';
import Layout from './components/Layout';
import About from './components/About';
import Contacts from './components/Contacts';

const routes = (
  <Router>
    <Route path="/" component={Layout}>
      <IndexRoute component={About}/>
      <Route path="contacts" component={Contacts}/>
    </Route>
    <Route path="*" component={NotFoundPage}/>
  </Router>
);

export default routes;
