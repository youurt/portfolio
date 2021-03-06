import styled from 'styled-components/macro';

const Left = styled.div`
  z-index: 100;
  background: var(--primaryFont);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 10px;
  @media (max-width: 768px) {
    height: 0px;
  }
`;
const Right = styled.div`
  z-index: 100;
  background: var(--primaryFont);
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 10px;
  @media (max-width: 768px) {
    height: 0px;
  }
`;
const Top = styled.div`
  z-index: 100;
  background: var(--primaryFont);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  @media (max-width: 768px) {
    height: 0px;
  }
`;
const Bottom = styled.div`
  z-index: 100;
  background: var(--primaryFont);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10px;
  @media (max-width: 768px) {
    height: 0px;
  }
`;

export { Left, Right, Top, Bottom };
