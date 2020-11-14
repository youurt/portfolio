import styled from 'styled-components';

const LeftInfo = styled.div`
  width: 11.7rem;
  position: fixed;
  transform: rotate(-90deg);
  top: 8.25rem;
  left: -3.4rem;
  font-size: 1.5em;
  font-weight: 700;
  color: purple;
  display: flex;
  text-align: center;
  padding-top: 1.6em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const RightInfo = styled.a`
  transform: rotate(90deg);
  bottom: 8.25rem;
  right: -2.75rem;
  width: 10.25rem;
  position: fixed;
  color: inherit;
  text-align: center;
  font-size: 1.5em;
  font-weight: 700;
  display: block;
  padding-top: 1.6em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-decoration: none;
`;
const SpanText = styled.span`
  color: red;
`;

export { LeftInfo, RightInfo, SpanText };
