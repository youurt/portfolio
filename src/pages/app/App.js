import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { useDarkMode, useFetch } from './../../hooks';
import {
  Border,
  LeftInfo,
  RightInfo,
  Navbar,
  Footer,
} from './../../components/';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About, Contact, Ideas, Post } from './../../pages';
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
import { url } from '../../utils/api';

const App = () => {
  const [theme, themeToggler, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const { ideas, loading } = useFetch(url);

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
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/projects">
                  <Ideas theme={theme} ideas={ideas} loading={loading} />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/posts/:slugId/:slug">
                  <Post theme={theme} ideas={ideas} loading={loading} />
                </Route>
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
