import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside, useDarkMode } from './../../hooks';
import {
  Border,
  LeftInfo,
  RightInfo,
  Burger,
  Menu,
  Toggle,
  Logo,
  Test,
  Navbar,
} from './../../components/';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, About, Ideas, Work, Blur } from './../../pages';
import GlobalTheme from './App.styled';
import { darkTheme, lightTheme } from './theme';
import styled from 'styled-components';

const App = () => {
  const [open, setOpen] = useState(false);
  const [theme, themeToggler, componentMounted] = useDarkMode();
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  }

  const GridLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-areas:
      'nav nav nav'
      'asideLeft main asideRight'
      'footer footer footer';
    /* grid-template-rows: auto auto 1fr;
    grid-template-columns: auto auto 1fr; */
    grid-template-rows: 1fr 9fr 1fr;

    grid-template-columns: 1fr 6fr 1fr;
    /* animation: resize 2000ms ease infinite alternate;

    @keyframes resize {
      to {
        grid-template-columns: 1fr 2fr 1fr;
      }
    } */
  `;

  const Nav = styled.nav`
    grid-area: nav;

    /* position: sticky; */
    top: 0;
    z-index: 10;
  `;
  const AsideLeft = styled.aside`
    grid-area: asideLeft;
  `;
  const AsideRight = styled.aside`
    grid-area: asideRight;
  `;
  const Main = styled.main`
    grid-area: main;
  `;
  const Footer = styled.footer`
    grid-area: footer;
    position: sticky;
    bottom: 0;
  `;

  // const Text = styled.div`
  //   padding-left: 7em;
  //   transition: 0.5s all ease-out;
  //   -webkit-font-smoothing: antialiased;
  // `;

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <GlobalTheme open={open} />
        <GridLayout>
          {/* <Border /> */}
          <Nav>
            <Menu open={open} theme={theme} />
          </Nav>
          <AsideLeft>
            <LeftInfo />
          </AsideLeft>
          <Main>
            <Switch>
              <Route exact path='/'>
                <div ref={node}>
                  <Home open={open} />
                </div>
              </Route>
              <Route path='/about'>
                <About open={open} />
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
          <Footer>
            <Toggle theme={theme} toggleTheme={themeToggler} />
          </Footer>
        </GridLayout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
