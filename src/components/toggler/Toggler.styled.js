import styled from 'styled-components';

export const Button = styled.div`
  background: ${({ theme }) => theme.iconColor};
  color: ${({ theme }) => theme.iconColor};

  background: transparent;
  border: none;
  margin-left: 2em;
  margin-bottom: 2em;

  z-index: 10;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
