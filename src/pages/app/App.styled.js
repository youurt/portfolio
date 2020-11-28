import styled, { createGlobalStyle } from 'styled-components';

export const GlobalTheme = createGlobalStyle`
  :root {
  --primaryFont: #64327A;
  --secondaryFont: #FA5163;
}
  
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.primaryDark};
    font-family: 'Open Sans', sans-serif;

    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; */
    justify-content: center;
    text-rendering: optimizeLegibility;
    transition: all 0.25s linear;
  }
  
  p{
    color: var(--primaryFont);
    /* color: var(--primaryLight);; */
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
    color: var(--primaryFont);
    font-size: 8rem;
    /* line-height: 2.25em; */
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2.8em;
    }
  }

  h2{
    color: var(--primaryFont);
    font-size: 2.8em;
    font-weight: 700;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;

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
    /* color: ${({ theme }) => theme.primaryHover}; */
    color: var(--primaryFont);
    text-decoration: none;
    
    &:hover {
    color: var(--secondaryFont);
    }
  }

  button {
    appearance: button;
    /* -webkit-writing-mode: horizontal-tb !important; */
    -writing-mode: horizontal-tb !important;
    word-spacing: normal;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    font: 14px;

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
  color: white;
  max-width: 50vw;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2em;
  padding-bottom: 6em;
`;
