import styled from 'styled-components';

export const Container = styled.div`
  margin-left: ${({ open }) => (open ? '8em' : '3em')};
  display: block;

  margin-right: 3em;
  margin-top: 10vw;
  width: 1075px;
  max-width: 70vw;
  transition: 0.5s all ease-out;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  margin-bottom: 12px;
  @media screen and (max-width: 660px) {
    display: flex;
    flex-direction: column;
    margin-top: 20vw;
  }
`;

export const Item2 = styled.div`
  display: block;
  justify-content: center;

  grid-column: 1 / span 2;
  padding: 40px 30px 10px 40px;

  color: red;

  border: 6px solid purple;
`;

export const Item = styled.div`
  display: block;
  justify-content: center;

  padding: 40px 30px 10px 40px;

  color: red;

  border: 6px solid purple;

  a {
    font-weight: 800;
    font-size: 3.4rem;
    cursor: pointer;
  }
`;

export const Label = styled.p`
  font-size: 0.583333rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
