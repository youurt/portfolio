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

const string_to_slug = (str) => {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaeeeeiiiioooouuuunc------';
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
};
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
