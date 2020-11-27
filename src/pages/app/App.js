import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './../../hooks';
import {
  Border,
  LeftInfo,
  RightInfo,
  Navbar,
  Footer,
} from './../../components/';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, About, Ideas, Post } from './../../pages';
import {
  GlobalTheme,
  GridLayout,
  Nav,
  AsideLeft,
  AsideRight,
  Main,
  FooterGrid,
} from './App.styled';
import { darkTheme, lightTheme } from './theme';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const [theme, themeToggler, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }
  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <GlobalTheme />
        <GridLayout>
          <Border />
          <Nav>
            <Navbar />
          </Nav>
          <AsideLeft>
            <LeftInfo />
          </AsideLeft>
          <Main>
            <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/ideas' component={Ideas} />
                <Route path='/about' component={About} />
                <Route path='/posts/:id/:slug' component={Post} />
              </Switch>
            </AnimatePresence>
          </Main>
          <AsideRight>
            <RightInfo />
          </AsideRight>
          <FooterGrid>
            <Footer theme={theme} toggleTheme={themeToggler} />
          </FooterGrid>
        </GridLayout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
