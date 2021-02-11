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
          My name is Ugur and I'm a multidisciplinary developer and designer 🍺.
          Currently living in Germany, Aachen! With a strong interest in{' '}
          <SpanText>
            <TextTransition
              text={INTERESTS[index % INTERESTS.length]}
              springConfig={presets.wobbly}
              inline={true}
            ></TextTransition>
          </SpanText>
          .
          <br />
          <br />I created this website to upload and show my recent projects.
          Feel free to have a look at the
          <a href="https://www.ugurtigu.com/ideas">Projects</a> section 🤟!
          <br />
          <br />I am looking for work. If you like to work with me, please
          contact me. You can find all the information about me in the{' '}
          <a href="https://www.ugurtigu.com/contact">Contact</a> section! Stay
          💉👨‍⚕️🩺 & have a nice {today}!
        </MainText>
      </Motion>
    </>
  );
};

export default About;
