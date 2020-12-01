import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Header,
  HeaderSmall,
  TextBlock,
  PostedOn,
  Motion,
} from './Post.styled';
// import { data } from './../ideas/IdeasData';
import ReactEmbedGist from 'react-embed-gist';
import { Loading } from '../../components/';
import { PageTrans, formatDatefromIso } from './../../utils/utils';
import JsxParser from 'react-jsx-parser';
const url = 'https://hidden-ridge-18950.herokuapp.com/api/blogposts';

export const Post = () => {
  const { slugId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchIdeas = async () => {
    setLoading(true);

    if (
      sessionStorage.getItem('loadTime') &&
      sessionStorage.getItem('loadTime') < Date.now()
    ) {
      setLoading(false);
      setData(JSON.parse(sessionStorage.getItem('data')));
    } else {
      try {
        const response = await fetch(url);
        const ideas = await response.json();
        setData(ideas);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, []);
  const filteredData = data.filter((item) => item.slugId === slugId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {filteredData.map((item, index) => {
        const { title, createdAt, postContent } = item;
        return (
          <Motion
            key={index}
            initial='out'
            animate='in'
            exit='out'
            variants={PageTrans}
          >
            <Header>{title}</Header>
            <PostedOn>Posted on {formatDatefromIso(createdAt)}</PostedOn>
            <JsxParser
              key={index}
              components={{ ReactEmbedGist, HeaderSmall, TextBlock }}
              jsx={postContent}
            />
          </Motion>
        );
      })}
      {/* <Motion initial='out' animate='in' exit='out' variants={PageTrans}>
        <Header>{title}</Header>
        <PostedOn>Posted on {createdAt}</PostedOn>
        <JsxParser
          components={{ ReactEmbedGist, HeaderSmall, TextBlock }}
          jsx={postContent}
        />
      </Motion> */}
    </>
  );
};
