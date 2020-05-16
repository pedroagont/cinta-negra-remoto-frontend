import React from 'react';
import { Route } from 'react-router-dom';

// Views
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';

export default [
  <React.Fragment>
    <Route exact path="/login" component={ Login } />
    <Route exact path="/signup" component={ Signup } />
    <Route exact path="/" component={ Home } />
  </React.Fragment>
];
