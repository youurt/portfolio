import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TextTransition, { presets } from 'react-text-transition';

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

const Info = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  const TEXTS_LANG = ['Python', 'React', 'Frontend', 'UI', 'Data'];
  return (
    <>
      <LeftInfo>
        <SpanText>
          <TextTransition
            text={TEXTS_LANG[index % TEXTS_LANG.length]}
            springConfig={presets.wobbly}
            inline={true}
          ></TextTransition>
        </SpanText>
        Developer
      </LeftInfo>
      <RightInfo>
        <a href='mailto:ugur.tigu@gmail.com'>ugurtigu@gmail.com</a>
      </RightInfo>
    </>
  );
};

export default Info;
