import { Container } from './Ideas.styled';
import { PageTrans } from './../../utils/utils';
import { Loading } from '../../components/';
import FeaturedPost from './FeaturedPost';

const Ideas = ({ ideas, loading }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <Container initial="out" animate="in" exit="out" variants={PageTrans}>
      <FeaturedPost ideas={ideas} />
    </Container>
  );
};

export default Ideas;
