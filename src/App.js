import React, { useState, useEffect } from 'react';
import './App.css';

import Border from './components/Border';
import Navbar from './components/Navbar';
import Info from './components/Info';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Border />
      <Navbar />
      <Info />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
