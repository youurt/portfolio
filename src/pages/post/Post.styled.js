import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const Header = styled.h1`
  font-weight: 700;
  font-size: 3.5rem;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const HeaderSmall = styled.h2`
  font-size: 2.55em;
  font-weight: 600;
`;

export const TextBlock = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
`;

export const PostedOn = styled.p`
  font-size: 1rem;
  opacity: 0.75;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 1.5em;
`;

export const Motion = styled(motion.div)``;

export const Image = styled.img`
  max-width: 600px;
  height: auto;
  padding: 0;
  margin: 0;
  border: 0;
  width: 100%;
`;
