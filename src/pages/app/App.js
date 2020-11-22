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
import { Home, About, Ideas, Work } from './../../pages';
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
            <Navbar theme={theme} toggleTheme={themeToggler} />
          </Nav>
          <AsideLeft>
            <LeftInfo />
          </AsideLeft>
          <Main>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/ideas'>
                <Ideas />
              </Route>
              <Route path='/work'></Route>
              <Work />
            </Switch>
          </Main>
          <AsideRight>
            <RightInfo />
          </AsideRight>
          <FooterGrid>
            <Footer />
          </FooterGrid>
        </GridLayout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
