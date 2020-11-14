import React, { useState, useEffect } from 'react';

import { Border, Info, Navbar } from './../../components/';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './../about/About';
import Home from './../home/Home';
import AppStyles from './AppStyles';

const App = () => {
  return (
    <Router>
      <AppStyles />
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
