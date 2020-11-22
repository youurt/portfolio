import styled from 'styled-components';

const LeftInfoStyle = styled.div`
  width: 11.7rem;
  position: fixed;
  transform: rotate(90deg);
  top: 4.5rem;
  left: -3.4rem;
  font-size: 1.5em;
  font-weight: 700;
  color: purple;
  display: flex;
  text-align: center;
  padding-bottom: 1.6em;
  margin-block-start: 6em;
  margin-block-end: 1em;
`;

const RightInfoStyle = styled.div`
  transform: rotate(90deg);
  bottom: 15.2rem;
  right: -3.4rem;
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

export { LeftInfoStyle, RightInfoStyle, SpanText };
