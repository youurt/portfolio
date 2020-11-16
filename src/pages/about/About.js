import {
  Container,
  Grid,
  Item,
  Item2,
  Label,
  LabelRight,
} from './About.styled';
import { data } from './AboutData';

export const About = ({ open }) => {
  const item2 = 'Item2';
  const item = 'Item';
  return (
    <Container open={open}>
      <main>
        <Grid>
          <Item>
            <Label>Article</Label>
            <a href='www.google.de'>Similar post to this!</a>
            <LabelRight>heute</LabelRight>
          </Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item>5</Item>
          <Item>6</Item>
          <Item2>6</Item2>
        </Grid>
      </main>
    </Container>
  );
};
