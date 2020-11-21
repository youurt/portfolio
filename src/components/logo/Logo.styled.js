import styled from 'styled-components';

export const Logo = styled.div`
  transition: var(--transition);
  color: ${({ theme }) => (theme === 'light' ? 'purple' : 'red')};
  /* position: fixed; */
  /* top: 90%; */
  /* left: 3rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 4em;
  margin-bottom: 2em;
  z-index: 10;
`;
