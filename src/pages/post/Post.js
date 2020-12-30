import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Header,
  HeaderSmall,
  TextBlock,
  PostedOn,
  Motion,
  Image,
} from './Post.styled';
import ReactEmbedGist from 'react-embed-gist';
import { Loading } from '../../components/';
import { PageTrans, formatDatefromIso } from './../../utils/utils';
import JsxParser from 'react-jsx-parser';

const Post = ({ ideas, loading }) => {
  const { slugId } = useParams();
  const filteredData = ideas.filter((item) => item.slugId === slugId);

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
            initial="out"
            animate="in"
            exit="out"
            variants={PageTrans}
          >
            <Header>{title}</Header>
            <PostedOn>Posted on {formatDatefromIso(createdAt)}</PostedOn>
            <JsxParser
              key={index}
              components={{ ReactEmbedGist, HeaderSmall, TextBlock, Image }}
              jsx={postContent}
            />
            {/* <Image src="https://raw.githubusercontent.com/youurt/pokemon-redux-thunk/main/imgs/img1.png" /> */}
          </Motion>
        );
      })}
    </>
  );
};

export default Post;
