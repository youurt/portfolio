import styled from 'styled-components';

const MainText = styled.div`
  /* margin-top: 1em; */
  /* margin-bottom: 1em; */
  /* margin-right: 3em; */
  /* padding-left: 3em; */

  font-size: 2.8em;
  font-weight: 700;
  line-height: 1.1;

  color: purple;

  -webkit-font-smoothing: antialiased;
  margin-left: ${({ open }) => (open ? '3em' : '0em')};

  transition: all 1.25s ease-out;

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;
const SpanText = styled.span`
  color: red;
`;

export { MainText, SpanText };
