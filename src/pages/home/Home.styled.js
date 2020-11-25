import styled from 'styled-components';

const MainText = styled.div`
  font-size: 2.8em;
  font-weight: 700;
  /* line-height: 1.1; */

  color: purple;
  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;
const SpanText = styled.span`
  color: red;
`;

export { MainText, SpanText };
