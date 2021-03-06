import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const Motion = styled(motion.div)``;

export const MainText = styled.div`
  font-size: 2.8em;
  font-weight: 700;
  /* line-height: 1.1; */

  color: var(--primaryFont);
  @media (max-width: 768px) {
    font-size: 1.6em;
    font-weight: 100;
  }
`;
export const SpanText = styled.span`
  color: var(--secondaryFont);
`;

export const Header = styled.h1`
  font-size: 8rem;
  @media (max-width: 768px) {
    font-size: 2.8em;
  }
`;
