import React from 'react';
import { Motion, Header, Text, Border, Item } from './Contact.styled';
import { PageTrans, CardVariants } from './../../utils/utils';

export const Contact = () => {
  return (
    <>
      <Motion initial='out' animate='in' exit='out' variants={PageTrans}>
        <Header>CONTACT ME</Header>
        <Text>I'm available for freelance work.</Text>
        <Text>Drop me a line if you fancy a chat.</Text>
        <Border>
          <Item
            variants={CardVariants}
            initial='beforeHover'
            whileHover='onHover'
          >
            <a href='mailto:info@ugurtigu.com'>info@ugurtigu.com</a>
          </Item>
        </Border>
      </Motion>
    </>
  );
};
