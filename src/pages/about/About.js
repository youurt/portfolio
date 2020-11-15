import { Container, Grid, Item, Item2, Label } from './About.styled';
import { data } from './AboutData';

export const About = ({ open }) => {
  return (
    <Container open={open}>
      <Grid>
        <Item>
          <Label>Article</Label>
          <a href='www.google.de'>Similar post to this!</a>
        </Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
        <Item2>6</Item2>
      </Grid>
    </Container>
  );
};
