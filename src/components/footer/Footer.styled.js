import styled from 'styled-components';

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3.5rem;
`;

export const FooterFirst = styled.div`
  text-align: left;
`;
export const FooterCenter = styled.div`
  text-align: center;
`;
export const FooterLast = styled.div`
  text-align: right;
`;

export const Big = styled.div`
  font-size: 2em;
  text-transform: uppercase;
  font-weight: 800;
  color: red;
`;
