import styled, { createGlobalStyle } from 'styled-components';

export const GlobalTheme = createGlobalStyle`


  *, *::after, *::before {
    box-sizing: border-box;
    
  }
  


  body {
    /* align-items: center; */
    background: ${({ theme }) => theme.primaryDark};
    /* color: ${({ theme }) => theme.primaryLight}; */
    /* display: flex; */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    justify-content: center;
    text-rendering: optimizeLegibility;
    transition: all 0.25s linear;


  }
  
  /* main{

    @media (max-width: 768px) {
    filter: ${({ open }) => (open ? 'blur(5px)' : 'none')};
    }
  } */

  

  p{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }


  li{
    list-style-type:none;
  }

  h1, h2, h3, h4 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }

  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
      &:hover {
    color: red;
  }
  }
`;

export const GridLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    'nav nav nav'
    'asideLeft main asideRight'
    'footer footer footer';
  grid-template-rows: 1fr 9fr 1fr;

  grid-template-columns: 1fr 3fr 1fr;
`;

export const Nav = styled.nav`
  grid-area: nav;
  top: 0;
  z-index: 10;
`;
export const AsideLeft = styled.aside`
  grid-area: asideLeft;
`;
export const AsideRight = styled.aside`
  grid-area: asideRight;
`;
export const Main = styled.main`
  grid-area: main;
`;
export const Footer = styled.footer`
  grid-area: footer;
  position: sticky;
  bottom: 0;
`;
