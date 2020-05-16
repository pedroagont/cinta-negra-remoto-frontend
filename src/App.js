import React, { Fragment } from 'react';

// Components
import Navigation from './components/Navigation';

// Misc
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { Container } from 'reactstrap';
import Routes from './Routes';

function App() {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <Container className="my-5">
          <Switch>
              { Routes }
          </Switch>
        </Container>
      </Router>
    </Fragment>
  );
}

export default App;
