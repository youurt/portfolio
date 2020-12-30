import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    const fetchIdeas = async () => {
      setLoading(true);

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

      if (
        sessionStorage.getItem('loadTime') &&
        sessionStorage.getItem('loadTime') < Date.now()
      ) {
        setLoading(false);
        setIdeas(JSON.parse(sessionStorage.getItem('data')));
      }
    };
    fetchIdeas();
  }, [url]);

  return { ideas, loading };
};

export default useFetch;
