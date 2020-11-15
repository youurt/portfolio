import { createGlobalStyle } from 'styled-components';

const AppStyles = createGlobalStyle`

  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    justify-content: center;
    text-rendering: optimizeLegibility;
    transition: all 0.25s linear;
  }

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
  }
`;

export default AppStyles;
