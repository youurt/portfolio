import {
  Container,
  Grid,
  Item,
  Label,
  LabelRight,
  BorderSmall,
  Categories,
  Tag,
} from './About.styled';
import { data } from './AboutData';
import { Link } from 'react-router-dom';

export const About = ({ theme }) => {
  return (
    <Container theme={theme}>
      <Grid>
        {data.map((post, index) => {
          const { id, title, date, tags, postCategory } = post;

          return (
            <BorderSmall>
              <Item>
                <Label key={id}>{postCategory}</Label>
                <a href={id}>{title}</a>
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

        {/* <Border>
          <Item2>
            <Label>Article</Label>
            <a href='www.google.de'>Similar post to this!</a>
            <Categories>
              <Tag>technology</Tag>
              <Tag>design</Tag>
              <Tag>coding</Tag>
            </Categories>
            <LabelRight>heute</LabelRight>
          </Item2>
        </Border> */}
      </Grid>
    </Container>
  );
};
