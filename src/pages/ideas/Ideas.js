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
import { data } from './IdeasData';
import { Link } from 'react-router-dom';
import { string_to_slug, CardVariants, PageTrans } from './../../utils/utils';

export const Ideas = ({ theme }) => {
  return (
    <Container
      initial='out'
      animate='in'
      exit='out'
      variants={PageTrans}
      theme={theme}
    >
      <Grid>
        {data.map((post, index) => {
          const { id, title, date, tags, postCategory } = post;
          const slug = string_to_slug(title);
          if (postCategory === 'featured post') {
            return (
              <BorderSmall key={id}>
                <ItemSmall
                  variants={CardVariants}
                  initial='beforeHover'
                  whileHover='onHover'
                >
                  <Label>{postCategory}</Label>
                  <Link to={`/posts/${id}/${slug}`}>{title}</Link>
                  <Categories>
                    {tags.map((tag, index) => {
                      return <Tag key={index}>{tag}</Tag>;
                    })}
                  </Categories>
                  <LabelRight>{date}</LabelRight>
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
        {data.map((post, index) => {
          const { id, title, date, tags, postCategory } = post;
          const slug = string_to_slug(title);
          if (postCategory === 'archive') {
            return (
              <BorderLong key={id}>
                <ItemLong
                  variants={CardVariants}
                  initial='beforeHover'
                  whileHover='onHover'
                >
                  <Link to={`/posts/${id}/${slug}`}>{title}</Link>
                  <Categories>
                    {tags.map((tag, index) => {
                      return <Tag key={index}>{tag}</Tag>;
                    })}
                  </Categories>
                  <LabelRight>{date}</LabelRight>
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
