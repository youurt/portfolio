import React from 'react';
import { Motion, Header, Text, Border, Item } from './Contact.styled';
import { PageTrans, CardVariants } from './../../utils/utils';

export const Contact = () => {
  return (
    <>
      <Motion initial='out' animate='in' exit='out' variants={PageTrans}>
        <Header>CONTACT ME</Header>
        <Text>I'm available for work.</Text>
        <Border>
          <Item
            variants={CardVariants}
            initial='beforeHover'
            whileHover='onHover'
          >
            {/* <a href='#'>Get more Information</a> */}
            <a href='mailto:info@ugurtigu.com'>Write me a mail!</a>
          </Item>
        </Border>
      </Motion>
    </>
  );
};
