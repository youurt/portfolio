import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoadingContainer = styled(motion.div)`
  width: 20rem;
  height: 20rem;
  display: flex;
  justify-content: space-around;
  margin: 15rem 15rem;
`;

export const LoadingCircle = styled(motion.span)`
  display: block;
  width: 5rem;
  height: 5rem;
  background-color: var(--primaryFont);
  border-radius: 2.5rem;
`;
