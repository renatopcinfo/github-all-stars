import React from 'react';
import './App.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../src/pages/Home';
import Profile from '../src/pages/Profile';
import About from '../src/pages/About';
import Team from '../src/pages/Team';
import NavLink from 'react-bootstrap/NavLink';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="https://github.com/" target="_blank">GitHub</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/about">About</Link>
          </NavLink>
          <NavLink>
            <Link to="/team">Team</Link>
          </NavLink>
        </Nav>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/user/:name" component={Profile} />
      </Switch>

    </Router>
  );
}

export default App;
