import React from 'react';
import { Motion, Header, Text, Border, Item } from './Contact.styled';
import { PageTrans, CardVariants } from './../../utils/utils';

const Contact = () => {
  return (
    <>
      <Motion initial="out" animate="in" exit="out" variants={PageTrans}>
        <Header>CONTACT ME*</Header>
        <Text>*I am currently looking for Jobs!</Text>
        <Border>
          <Item
            variants={CardVariants}
            initial="beforeHover"
            whileHover="onHover"
          >
            <a href="CV.pdf" target="_blank">
              You can download my CV here!
            </a>
          </Item>
        </Border>
      </Motion>
    </>
  );
};

export default Contact;
