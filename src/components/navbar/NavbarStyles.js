import styled from 'styled-components';

const NavbarStyles = styled.div`
  nav {
    background: transparent;
  }

  .nav-header {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    padding: 1rem;
    margin: 1rem 1rem;
  }

  .nav-toggle {
    font-size: 1.5rem;
    /* color: var(--clr-primary-5); */
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    border: none;
    cursor: pointer;
  }

  .nav-toggle:hover {
    /* color: var(--clr-primary-1); */
    transform: rotate(90deg);
  }

  .logo {
    font-size: 1.5rem;
    transition: var(--transition);
    cursor: pointer;
    color: red;
  }

  .links a {
    /* color: var(--clr-grey-3); */
    font-size: 1.5em;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    display: flex;
    padding: 0.2rem 7rem;
    transition: var(--transition);
  }

  .links a:hover {
    /* background: var(--clr-primary-8);
  color: var(--clr-primary-5); */
    /* padding-left: 1.5rem; */
  }

  .social-icons {
    display: none;
  }

  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }

  .show-container {
    height: 10rem;
  }

  @media screen and (min-width: 800px) {
    .nav-center {
      max-width: 1170px;
      margin: 4rem 7rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }

    .nav-header {
      padding: 0;
    }

    .nav-toggle {
      display: none;
    }

    .links-container {
      height: auto !important;
    }

    .links {
      display: flex;
    }

    .links a {
      padding: 0;
      margin: 0 0.5rem;
    }

    .social-icons {
      font-size: 1.5rem;
      display: flex;
    }

    .social-icons a {
      margin: 0 0.5rem;
      /* color: var(--clr-primary-5); */
      transition: var(--transition);
    }

    /* .social-icons a:hover {
    color: var(--clr-primary-7);
  } */
  }
`;

export default NavbarStyles;
