import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../src/pages/Home';
import About from '../src/pages/About';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
