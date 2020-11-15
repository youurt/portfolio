import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside, useDarkMode } from './../../hooks';
import { Border, Info, Burger, Menu, Toggle, Logo } from './../../components/';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './../about/About';
import Home from './../home/Home';
import AppStyles from './AppStyles';
import { darkTheme, lightTheme } from './theme';

const App = () => {
  const [open, setOpen] = useState(false);
  const [theme, themeToggler, componentMounted] = useDarkMode();
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  console.log(componentMounted);
  if (!componentMounted) {
    return <div />;
  }

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <AppStyles />
        <div ref={node}>
          <Burger theme={theme} open={open} setOpen={setOpen} />
          <Logo theme={theme} />
          <Menu open={open} />
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </div>
        <Border />
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
