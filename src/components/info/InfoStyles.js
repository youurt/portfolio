import styled from 'styled-components';

const LeftInfo = styled.div`
  width: 11.7rem;
  position: fixed;
  transform: rotate(90deg);
  top: 13.25rem;
  right: -4rem;
  font-size: 1.5em;
  font-weight: 700;
  color: purple;
  display: flex;
  text-align: center;
  padding-top: 1.6em;
  margin-block-start: 6em;
  margin-block-end: 1em;
`;

const RightInfo = styled.div`
  transform: rotate(90deg);
  bottom: 8.25rem;
  right: -4rem;
  width: 11.7rem;
  position: fixed;
  color: inherit;
  text-align: center;
  font-size: 1.5em;
  font-weight: 700;
  display: block;
  padding-top: 1.6em;
  margin-block-start: 1em;
  margin-block-end: 1em;

  text-decoration: none;
`;
const SpanText = styled.span`
  color: red;
`;

export { LeftInfo, RightInfo, SpanText };
