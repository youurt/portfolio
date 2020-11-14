import React, { useState, useEffect } from 'react';
import './App.css';

import { Border, Info, Navbar } from './../../components/';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './../about/About';
import Home from './../home/Home';

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
