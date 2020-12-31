import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const BorderSmall = styled(motion.div)`
  background: radial-gradient(
    circle,
    rgb(209, 98, 166, 0.9) 25%,
    rgb(238, 174, 202, 0.1) 50%
  );
  padding: 8px;
  background-size: 2px 2px;
`;

export const ItemSmall = styled(motion.div)`
  display: flex;
  flex-flow: wrap;
  z-index: 20;
  align-items: center;
  background: ${({ theme }) => theme.primaryDark};
  padding: 40px 30px 10px 40px;
  min-width: 500px;
  min-height: 400px;
  border: 1px solid ${({ theme }) => theme.primaryLight};

  a {
    font-weight: 800;
    font-size: 3.4rem;
    cursor: pointer;
  }

  @media (max-width: 1068px) {
    min-width: 180px;
    padding: 5px 5px;
    text-align: center;

    a {
      font-weight: 200;
      font-size: 2rem;
    }
  }
`;

export const Container = styled(motion.div)`
  display: block;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    margin-top: 20vw;
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

export const Categories = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0.75;
  margin-top: 0.5em;
`;

export const Tag = styled.span`
  margin-right: 1em;
  @media (max-width: 1068px) {
    font-weight: 400;
    font-size: 0.7rem;
  }
`;
