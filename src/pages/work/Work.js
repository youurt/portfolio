import React from 'react';
import {
  Center,
  BtnContainer,
  Title,
  Underline,
  Button,
  InfoSection,
  HeaderInfo,
  TagInfo,
  Date,
} from './Work.styled';
import { motion } from 'framer-motion';

export const Work = () => {
  return (
    <>
      <Title>
        <h1>Experience</h1>
        <Underline></Underline>
      </Title>
      <Center>
        <BtnContainer>
          <Button>Uni</Button>
          <Button>Praktikum</Button>
          <Button>Kompetenzen</Button>
        </BtnContainer>
        <InfoSection>
          <HeaderInfo>Lorem ipsum dolor sit amet.</HeaderInfo>
          <TagInfo>Uni</TagInfo>
          <Date>December 2015 - Present</Date>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, error
          fugit consequatur adipisci ad illum. Dolor temporibus, aperiam harum
          nesciunt reprehenderit optio dolorum dignissimos consequuntur fugiat
          itaque corporis odio, ex doloribus, commodi assumenda architecto!
          Dolores ut odio eligendi incidunt magnam.
        </InfoSection>
      </Center>
    </>
  );
};
