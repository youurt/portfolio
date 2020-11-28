import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Motion = styled(motion.div)``;
export const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: 600px;
  text-align: center;
`;

export const Text = styled.div`
  font-size: 1.5rem;
  font-weight: 600px;
  text-align: center;
  color: var(--primaryFont);
`;

export const Border = styled.div`
  background: radial-gradient(
    circle,
    rgb(209, 98, 166, 0.9) 25%,
    rgb(238, 174, 202, 0.1) 50%
  );
  padding: 10px;
  background-size: 2px 2px;
  margin-top: 1em;
`;
export const Item = styled(motion.div)`
  display: block;
  text-align: center;
  z-index: 20;
  background: ${({ theme }) => theme.primaryDark};
  /* padding: 40px 30px 10px 40px; */
  /* min-width: 500px;
  min-height: 400px; */
  color: var(--secondaryFont);
  border: 1px solid ${({ theme }) => theme.primaryLight};

  a {
    font-weight: 800;
    font-size: 3.4rem;
    cursor: pointer;
  }

  @media (max-width: 1068px) {
    min-width: 300px;
  }
`;
