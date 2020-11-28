import {
  Container,
  Grid,
  Item,
  Label,
  LabelRight,
  BorderSmall,
  Categories,
  Tag,
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
          return (
            <BorderSmall>
              <Item
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
              </Item>
            </BorderSmall>
          );
        })}
      </Grid>
    </Container>
  );
};
