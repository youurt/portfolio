import styled from 'styled-components/macro';

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3.5rem;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const FooterFirst = styled.div`
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const FooterCenter = styled.div`
  text-align: center;
`;
export const FooterLast = styled.div`
  text-align: right;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Big = styled.div`
  font-size: 2em;
  text-transform: uppercase;
  font-weight: 800;
  color: var(--secondaryFont);
`;
