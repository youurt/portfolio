import styled, { createGlobalStyle } from 'styled-components';

export const GlobalTheme = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.primaryDark};

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    justify-content: center;
    text-rendering: optimizeLegibility;
    transition: all 0.25s linear;
  }
  
  p{
    color: ${({ theme }) => theme.primaryHover};
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  strong{
    font-weight:600;
  }

  li{
    list-style-type:none;
  }


  h1{
    color: ${({ theme }) => theme.primaryHover};
    font-size: 8rem;
    /* line-height: 2.25em; */
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: 700;

    @media (max-width: 768px) {
    font-size: 4.4em;
    }
  }

  h2{
    color: ${({ theme }) => theme.primaryHover};
    /* line-height: 1.25em; */
    font-size: 2.8em;
    font-weight: 700;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    /* display: block; */
    /* margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px; */
  } 
  
  h3, h4 {
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
  grid-template-columns: 1fr 2fr 1fr;
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
  margin-bottom: 150px;
`;
export const FooterGrid = styled.footer`
  grid-area: footer;
  display: block;
  /* border-top: 1px solid rgba(243, 228, 228, 0.2); */
  color: white;
  max-width: 50vw;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2em;
  padding-bottom: 6em;
`;
