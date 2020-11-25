import {
  Container,
  Grid,
  Item,
  Item2,
  Label,
  LabelRight,
  Border,
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
        <BorderSmall>
          <Item>
            <Label>Article</Label>
            <a href='www.google.de'>
              Similar post to this! Lorem, ipsum dolor.
            </a>
            <Categories>
              <Tag>technology</Tag>
              <Tag>design</Tag>
              <Tag>coding</Tag>
            </Categories>
            <LabelRight>heute</LabelRight>
          </Item>
        </BorderSmall>

        <BorderSmall>
          <Item>
            <Label>Article</Label>
            <a href='www.google.de'>Similar post to this!</a>
            <Categories>
              <Tag>technology</Tag>
              <Tag>design</Tag>
              <Tag>coding</Tag>
            </Categories>
            <LabelRight>heute</LabelRight>
          </Item>
        </BorderSmall>

        <BorderSmall>
          <Item>2</Item>
        </BorderSmall>

        <BorderSmall>
          <Item>3</Item>
        </BorderSmall>

        <BorderSmall>
          <Item>4</Item>
        </BorderSmall>

        <BorderSmall>
          <Item>5</Item>
        </BorderSmall>

        <Border>
          <Item2>6</Item2>
        </Border>
      </Grid>
    </Container>
  );
};
