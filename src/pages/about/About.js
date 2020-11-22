import {
  Container,
  Grid,
  Item,
  Item2,
  Label,
  LabelRight,
  Border,
  BorderSmall,
} from './About.styled';
import { data } from './AboutData';

export const About = ({ open, theme }) => {
  const item2 = 'Item2';
  const item = 'Item';
  return (
    <Container theme={theme} open={open}>
      <Grid>
        <BorderSmall>
          <Item>
            <Label>Article</Label>
            <a href='www.google.de'>Similar post to this!</a>
            <LabelRight>heute</LabelRight>
          </Item>
        </BorderSmall>

        <BorderSmall>
          <Item>
            <Label>Article</Label>
            <a href='www.google.de'>Similar post to this!</a>
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
      {/* </main> */}
    </Container>
  );
};
