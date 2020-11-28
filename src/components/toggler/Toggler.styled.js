import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.div)`
  background: ${({ theme }) => theme.iconColor};
  color: ${({ theme }) => theme.iconColor};

  background: transparent;
  border: none;

  z-index: 10;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
