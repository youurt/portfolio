import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { MainText, SpanText, Motion, Header } from './About.styled';
import { PageTrans, HELLO, INTERESTS } from './../../utils/utils';

export const About = () => {
  const [index, setIndex] = useState(0);
  const [dateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  const today = dateTime.toLocaleDateString('en', { weekday: 'long' });
  return (
    <>
      <Motion initial='out' animate='in' exit='out' variants={PageTrans}>
        <Header>
          <SpanText>
            <TextTransition
              text={HELLO[index % HELLO.length]}
              springConfig={presets.wobbly}
              inline={true}
            ></TextTransition>
          </SpanText>
        </Header>

        <MainText>
          My name is Uğur and I'm a multidisciplinary developer and designer,
          with a strong interest in{' '}
          <SpanText>
            <TextTransition
              text={INTERESTS[index % INTERESTS.length]}
              springConfig={presets.wobbly}
              inline={true}
            ></TextTransition>
          </SpanText>
          . Currently living in Aachen, Germany.
          <br />
          <br />I have more than 4 years of experience as a developer & love
          working within full-stack development, specially in front-end.
          <br />
          <br />
          On this page I want to share my ideas and my code. I hope you enjoy
          it! Stay bold & have a nice {today}!
        </MainText>
      </Motion>
    </>
  );
};
