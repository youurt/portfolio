import styled from 'styled-components';

export const Border = styled.div`
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 0.25) 0%,
    rgba(238, 187, 187, 0.25) 45%,
    rgba(0, 212, 255, 0.25) 100%
  );

  padding: 10px;
  background-size: 4px 4px;
  grid-column: 1 / span 2;
  /* padding: 40px 30px 10px 40px; */
  display: block;
  justify-content: center;
`;

export const BorderSmall = styled.div`
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 0.25) 0%,
    rgba(238, 187, 187, 0.25) 45%,
    rgba(0, 212, 255, 0.25) 100%
  );

  padding: 10px;
  background-size: 4px 4px;
`;

export const Container = styled.div`
  display: block;

  margin-top: 5em;
  margin-bottom: 5em;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;

  @media screen and (max-width: 660px) {
    display: flex;
    flex-direction: column;
    margin-top: 20vw;
  }
`;

export const Item2 = styled.div`
  display: block;
  justify-content: center;
  background: ${({ theme }) => theme.primaryDark};
  grid-column: 1 / span 2;
  padding: 40px 30px 10px 40px;

  color: red;

  border: 6px solid purple;
`;

export const Item = styled.div`
  display: block;
  justify-content: center;
  background: ${({ theme }) => theme.primaryDark};
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

export const LabelRight = styled.p`
  text-align: right;
  opacity: 0.75;
  bottom: 0;
  right: 13px;
  font-size: 0.583333rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
