import styled from 'styled-components';

const MainText = styled.div`
  margin-left: ${({ open }) => (open ? '8em' : '3em')};
  margin-top: 1em;
  margin-bottom: 1em;
  margin-right: 3em;
  display: block;
  font-size: 2.8em;
  font-weight: 700;
  line-height: 1.1;
  -webkit-font-smoothing: antialiased;
  color: purple;
  transition: 0.5s all ease-out;

  @media (max-width: 768px) {
    max-width: 1400px;
  }
`;
const SpanText = styled.span`
  color: red;
`;

export { MainText, SpanText };
