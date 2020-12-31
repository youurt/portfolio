import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const LoadingContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  padding-top: 4rem;
`;

export const LoadingCircle = styled(motion.span)`
  display: block;
  width: 5rem;
  height: 5rem;
  background-color: var(--primaryFont);
  border-radius: 2.5rem;
`;
