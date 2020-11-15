import styled from 'styled-components';

export const Button = styled.div`
  background: ${({ theme }) => theme.iconColor};
  color: ${({ theme }) => theme.iconColor};
  position: fixed;
  top: 5%;
  right: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 10;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
