import React from 'react';
import {
  LabelRight,
  Categories,
  Tag,
  BorderLong,
  ItemLong,
  GridArchive,
} from './Ideas.styled';
import { Link } from 'react-router-dom';
import {
  string_to_slug,
  CardVariants,
  formatDatefromIso,
} from './../../utils/utils';

const ArchivePost = ({ ideas }) => {
  return (
    <>
      <GridArchive>
        {ideas.map((post, index) => {
          const { slugId, title, createdAt, tags, postCategory } = post;
          const slug = string_to_slug(title);
          if (postCategory === 'archive') {
            return (
              <BorderLong key={index}>
                <ItemLong
                  variants={CardVariants}
                  initial="beforeHover"
                  whileHover="onHover"
                  key={index}
                >
                  <Link to={`/posts/${slugId}/${slug}`}>{title}</Link>
                  <Categories>
                    {tags.map((tag, index) => {
                      return <Tag key={index}>{tag}</Tag>;
                    })}
                  </Categories>
                  <LabelRight>{formatDatefromIso(createdAt)}</LabelRight>
                </ItemLong>
              </BorderLong>
            );
          } else {
            return null;
          }
        })}
      </GridArchive>
    </>
  );
};

export default ArchivePost;
