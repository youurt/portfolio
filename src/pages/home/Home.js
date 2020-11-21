import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { bool } from 'prop-types';
import { MainText, SpanText } from './Home.styled';

export const Home = ({ open }) => {
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
      <MainText open={open}>
        {/* <main> */}
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo deleniti,
        corporis maiores illo quis voluptate nisi, non porro reiciendis nostrum
        ea ex nam incidunt corrupti facere id eos praesentium quisquam quasi ut
        dicta neque deserunt commodi quibusdam. Sequi asperiores sunt officiis
        cupiditate molestias eius fuga perferendis fugiat dolor, porro
        dignissimos! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Molestiae aliquid quae, corrupti architecto sunt ab assumenda, sint quos
        inventore dolor voluptate ipsam. Neque temporibus vitae, in nobis quo
        accusantium sit impedit dicta eveniet, molestias, explicabo fugiat iste
        aperiam. Aperiam ipsa dicta doloremque recusandae officia nemo iusto
        laborum, consequatur corrupti iure.
        <SpanText>{today}</SpanText>
        {/* </main> */}
      </MainText>
    </>
  );
};

Home.propTypes = {
  open: bool.isRequired,
};
