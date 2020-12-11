import { Container } from './Ideas.styled';
import { PageTrans } from './../../utils/utils';
import { useState, useEffect } from 'react';
import { Loading } from '../../components/';
import FeaturedPost from './FeaturedPost';
import ArchivePost from './ArchivePost';

const url = 'https://hidden-ridge-18950.herokuapp.com/api/blogposts';

export const Ideas = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchIdeas = async () => {
    setLoading(true);

    if (
      sessionStorage.getItem('loadTime') &&
      sessionStorage.getItem('loadTime') < Date.now()
    ) {
      setLoading(false);
      setIdeas(JSON.parse(sessionStorage.getItem('data')));
    } else {
      try {
        const response = await fetch(url);
        const ideas = await response.json();
        setIdeas(ideas);
        setLoading(false);
        sessionStorage.setItem('loadTime', Date.now());
        sessionStorage.setItem('data', JSON.stringify(ideas));
      } catch (error) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container initial='out' animate='in' exit='out' variants={PageTrans}>
      <FeaturedPost ideas={ideas} />
      <br />
      <ArchivePost ideas={ideas} />
    </Container>
  );
};
