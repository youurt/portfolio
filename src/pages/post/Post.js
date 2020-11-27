import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Header,
  HeaderSmall,
  TextBlock,
  PostedOn,
  Motion,
} from './Post.styled';
import { data } from './../ideas/IdeasData';
import ReactEmbedGist from 'react-embed-gist';
import { PageTrans } from './../../utils/utils';

export const Post = () => {
  const { id } = useParams();
  console.log(id);
  const filteredData = data.filter((item) => item.id === id);
  console.log(filteredData);
  const { title, date } = filteredData[0];
  console.log(title);
  return (
    <>
      <Motion initial='out' animate='in' exit='out' variants={PageTrans}>
        <Header>{title}</Header>
        <PostedOn>Posted on {date}</PostedOn>
        <TextBlock>
          But they're barely alone in this - and I can't really blame them
          either. I have guaranteed made similar mistakes in the past, as most
          D3.js tutorials out there don't mention accessibility, and a lot of
          visualization libraries built upon D3.js are inaccessible by default.
        </TextBlock>
        <TextBlock>
          Data is everywhere, and it should be accessible for all. So I decided
          to start writing my own series about it!
        </TextBlock>
        <TextBlock>
          This first tutorial will be quite broad, but we will go into more
          detail in upcoming posts. You will need to have a basic understanding
          of D3.js to follow along; but don't worry, an intro to D3.js series is
          in the make as well.
        </TextBlock>
        <HeaderSmall>Starting point</HeaderSmall>
        <TextBlock>
          This first tutorial will be quite broad, but we will go into more
          detail in upcoming posts. You will need to have a basic understanding
          of D3.js to follow along; but don't worry, an intro to D3.js series is
          in the make as well.
        </TextBlock>
        <ReactEmbedGist gist='youurt/044f9aa7def8951f083b274b8f65c467' />
      </Motion>
    </>
  );
};
