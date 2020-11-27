import React from 'react';
import { Motion, Header, Text } from './Contact.styled';
import { PageTrans } from './../../utils/utils';

export const Contact = () => {
  return (
    <>
      <Motion initial='out' animate='in' exit='out' variants={PageTrans}>
        <Header>CONTACT ME</Header>
        <Text>I'm available for freelance work.</Text>
        <Text>Drop me a line if you fancy a chat.</Text>
      </Motion>
    </>
  );
};
