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
          <br />
          Front-end 🤟! I have builded a Netflix Cone for classic movies & films
          - Classicflix, check it out in the{' '}
          <a href="https://www.ugurtigu.com/ideas">Projects</a> section! Other
          tech-stack I use is node, express and redux! I builded a
          CRUD-Application where I can post projects and also like them!
          <br />
          <br />
          Another interest of mine is Data 👨‍💻. I am currently building an
          Application with tensorflow.js for classification of clickbaits.
          Therefore I scraped text-data and builded a dataset. I also scrape
          data for my work in a research institution with Python.
          <br />
          <br />I am hungry for work. If you like to work with me, you can find
          all the information in the{' '}
          <a href="https://www.ugurtigu.com/contact">Contact</a> section! Stay
          💉👨‍⚕️🩺 & have a nice {today}!
        </MainText>
      </Motion>
    </>
  );
};

export default About;
