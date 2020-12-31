import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { MainText, SpanText, Motion, Header } from './About.styled';
import { PageTrans, HELLO, INTERESTS } from './../../utils/utils';

const About = () => {
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
      <Motion initial="out" animate="in" exit="out" variants={PageTrans}>
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
          My name is Uğur and I'm a multidisciplinary developer and designer.
          Currently living in 🇩🇪, Aachen! With a strong interest in{' '}
          <SpanText>
            <TextTransition
              text={INTERESTS[index % INTERESTS.length]}
              springConfig={presets.wobbly}
              inline={true}
            ></TextTransition>
          </SpanText>
          .
          <br />
          <br />
          Front-end 🤟! I have builded a Netflix clone with React and Firebase!
          It has full authentication and is tip-top! Other tech-stack I use is
          node, express and redux! I also do data-mining / scraping with python!
          <br />
          <br />
          Stay 💉👨‍⚕️🩺 & have a nice {today}!
        </MainText>
      </Motion>
    </>
  );
};

export default About;
