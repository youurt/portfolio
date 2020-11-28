import React, { useEffect } from 'react';
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
import JsxParser from 'react-jsx-parser';

export const Post = () => {
  const { id } = useParams();
  const filteredData = data.filter((item) => item.id === id);
  const { title, date, postContent } = filteredData[0];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Motion initial='out' animate='in' exit='out' variants={PageTrans}>
        <Header>{title}</Header>
        <PostedOn>Posted on {date}</PostedOn>
      </Motion>
      <JsxParser
        components={{ ReactEmbedGist, HeaderSmall, TextBlock }}
        jsx={postContent}
      />
    </>
  );
};
