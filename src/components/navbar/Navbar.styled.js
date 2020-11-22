import styled from 'styled-components';

export const MenuLink = styled.li`
  padding: 3rem 2rem;
  :last-child {
    margin-right: 13.3rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    :last-child {
      margin-right: 0rem;
    }
  }

  cursor: pointer;
  /* text-align: center; */
  text-decoration: none;
  transition: all 0.3s ease-in;
  text-transform: capitalize;
  font-size: 1.5em;
  font-weight: 700;
`;

export const Nav = styled.div`
  padding: 0 2.7rem;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
  top: 0;
  left: 0;
  right: 0;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  div {
    height: 2px;
    width: 25px;
    border-radius: 5px;
    margin-bottom: 4px;
    background: ${({ theme }) => (theme === 'light' ? 'purple' : 'red')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;

    transform-origin: 3.7px;

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
