import React from 'react';
import { LoadingContainer, LoadingCircle } from './Loading.styled';

const LoadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '0%',
  },
  end: { y: '100%' },
};

const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: 'easeInOut',
};

const Loading = () => {
  return (
    <LoadingContainer
      variants={LoadingContainerVariants}
      initial="start"
      animate="end"
    >
      <LoadingCircle
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <LoadingCircle
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <LoadingCircle
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </LoadingContainer>
  );
};

export default Loading;
