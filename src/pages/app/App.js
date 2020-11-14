import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { Border, Info, Navbar, Burger, Menu } from './../../components/';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './../about/About';
import Home from './../home/Home';
import AppStyles from './AppStyles';
import { theme } from './theme';
import { useOnClickOutside } from './hooks';

const App = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppStyles />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} />
        </div>
        <Border />
        {/* <Border />
      <Navbar /> */}
        <Info open={open} />
        <Switch>
          <Route exact path='/'>
            <Home open={open} />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
