import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TextTransition, { presets } from 'react-text-transition';

const MainText = styled.div`
  margin-left: 0;
  margin-right: 0;
  padding-left: 4em;
  padding-right: 4em;
  padding-bottom: 4em;
  display: block;
  font-size: 2.8em;
  font-weight: 700;
  line-height: 1.1;
  -webkit-font-smoothing: antialiased;
  color: purple;

  @media (max-width: 768px) {
    max-width: 1400px;
  }
`;
const SpanText = styled.span`
  color: red;
`;

const Home = () => {
  const [index, setIndex] = useState(0);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  const TEXTS_amet = ['Forest', 'hi', 'Tree', 'Color'];

  const today = dateTime.toLocaleDateString('de', { weekday: 'long' });
  return (
    <>
      <MainText>
        Lorem ipsum dolor sit {''}
        <SpanText>
          <TextTransition
            text={TEXTS_amet[index % TEXTS_amet.length]}
            springConfig={presets.wobbly}
            inline={true}
          ></TextTransition>
        </SpanText>{' '}
        consectetur adipisicing elit. Molestiae repudiandae architecto qui
        adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores
        nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo
        obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?
        Have a nice <SpanText>{today}</SpanText>
      </MainText>
    </>
  );
};

export default Home;
