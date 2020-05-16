import React, { Fragment } from 'react';

// Views
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';

// Components
import Navigation from './components/Navigation';

// Misc
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
