import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: grid;
  grid-template-columns: auto 100px 100px 100px 150px;
  text-align: center;
  padding: 2em;
  /* background-color: blue; */

  /* height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  } */
`;

export const Links = styled.li`
  font-size: 1.5em;
  font-weight: 700;

  /* font-weight: 700; */
  text-transform: capitalize;
  /* padding: 2rem 0; */
  /* font-weight: bold; */
  /* letter-spacing: 0.5rem; */
  text-decoration: none;
  transition: color 0.3s linear;
  /* @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  } */

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;
