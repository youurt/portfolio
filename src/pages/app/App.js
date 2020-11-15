import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside, useDarkMode } from './../../hooks';
import { Border, Info, Burger, Menu, Toggle, Logo } from './../../components/';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, About, Ideas, Work } from './../../pages';
import AppStyles from './AppStyles';
import { darkTheme, lightTheme } from './theme';

const App = () => {
  const [open, setOpen] = useState(false);
  const [theme, themeToggler, componentMounted] = useDarkMode();
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
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
          <Menu open={open} theme={theme} />
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Border />
          <Info />
        </div>

        <Switch>
          <Route exact path='/'>
            <Home open={open} />
          </Route>
          <Route path='/about'>
            <About open={open} />
          </Route>
          <Route path='/ideas'>
            <Ideas />
          </Route>
          <Route path='/work'>
            <Work />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
