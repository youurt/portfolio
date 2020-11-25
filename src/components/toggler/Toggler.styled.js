import styled from 'styled-components';

export const Button = styled.div`
  background: ${({ theme }) => theme.iconColor};
  color: ${({ theme }) => theme.iconColor};

  background: transparent;
  border: none;

  z-index: 10;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
