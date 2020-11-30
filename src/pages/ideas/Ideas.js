import {
  Container,
  Grid,
  ItemSmall,
  Label,
  LabelRight,
  BorderSmall,
  Categories,
  Tag,
  BorderLong,
  ItemLong,
  GridArchive,
} from './Ideas.styled';
import { Link } from 'react-router-dom';
import { string_to_slug, CardVariants, PageTrans } from './../../utils/utils';
import { useState, useEffect } from 'react';
const url = 'https://hidden-ridge-18950.herokuapp.com/api/blogposts';

export const Ideas = ({ theme }) => {
  const [ideas, setIdeas] = useState([]);

  const fetchIdeas = async () => {
    try {
      const response = await fetch(url);
      const ideas = await response.json();
      setIdeas(ideas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  return (
    <Container
      initial='out'
      animate='in'
      exit='out'
      variants={PageTrans}
      theme={theme}
    >
      <Grid>
        {ideas.map((post, index) => {
          const { slugId, title, createdAt, tags, postCategory } = post;
          const slug = string_to_slug(title);
          if (postCategory === 'featured post') {
            return (
              <BorderSmall key={index}>
                <ItemSmall
                  variants={CardVariants}
                  initial='beforeHover'
                  whileHover='onHover'
                  key={index}
                >
                  <Label>{postCategory}</Label>
                  <Link to={`/posts/${slugId}/${slug}`}>{title}</Link>
                  <Categories>
                    {tags.map((tag, index) => {
                      return <Tag key={index}>{tag}</Tag>;
                    })}
                  </Categories>
                  <LabelRight>{createdAt}</LabelRight>
                </ItemSmall>
              </BorderSmall>
            );
          } else {
            return <></>;
          }
        })}
      </Grid>
      <br />
      <GridArchive>
        {ideas.map((post, index) => {
          const { slugId, title, createdAt, tags, postCategory } = post;
          const slug = string_to_slug(title);
          if (postCategory === 'archive') {
            return (
              <BorderLong>
                <ItemLong
                  variants={CardVariants}
                  initial='beforeHover'
                  whileHover='onHover'
                  key={index}
                >
                  <Link to={`/posts/${slugId}/${slug}`}>{title}</Link>
                  <Categories>
                    {tags.map((tag, index) => {
                      return <Tag key={index}>{tag}</Tag>;
                    })}
                  </Categories>
                  <LabelRight>{createdAt}</LabelRight>
                </ItemLong>
              </BorderLong>
            );
          } else {
            return <></>;
          }
        })}
      </GridArchive>
    </Container>
  );
};
