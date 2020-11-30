import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoadingContainer = styled(motion.div)`
  width: 20rem;
  height: 20rem;
  display: flex;
  justify-content: space-around;
  margin-left: 12.5rem;
  padding-top: 9rem;
`;

export const LoadingCircle = styled(motion.span)`
  display: block;
  width: 5rem;
  height: 5rem;
  background-color: var(--primaryFont);
  border-radius: 2.5rem;
`;
