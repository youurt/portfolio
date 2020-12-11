import React from 'react';
import {
  Grid,
  ItemSmall,
  Label,
  LabelRight,
  BorderSmall,
  Categories,
  Tag,
} from './Ideas.styled';
import {
  string_to_slug,
  CardVariants,
  formatDatefromIso,
} from './../../utils/utils';
import { Link } from 'react-router-dom';

const FeaturedPost = ({ ideas }) => {
  return (
    <>
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
                  <LabelRight>{formatDatefromIso(createdAt)}</LabelRight>
                </ItemSmall>
              </BorderSmall>
            );
          } else {
            return <></>;
          }
        })}
      </Grid>
    </>
  );
};

export default FeaturedPost;
