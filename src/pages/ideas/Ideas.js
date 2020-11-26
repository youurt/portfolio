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
import { string_to_slug } from './../../utils/stringToSlug';

export const Ideas = ({ theme }) => {
  return (
    <Container theme={theme}>
      <Grid>
        {data.map((post, index) => {
          const { id, title, date, tags, postCategory } = post;
          const slug = string_to_slug(title);
          return (
            <BorderSmall key={id}>
              <Item>
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
