import React, { useState, useEffect } from 'react';
import { LeftInfoStyle, SpanText } from './InfoStyles';
import TextTransition, { presets } from 'react-text-transition';
import { INTERESTS } from './../../utils/utils';

const LeftInfo = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  return (
    <>
      <LeftInfoStyle>
        <SpanText>
          <TextTransition
            text={INTERESTS[index % INTERESTS.length]}
            springConfig={presets.wobbly}
            inline={true}
          ></TextTransition>
        </SpanText>
        Developer
      </LeftInfoStyle>
    </>
  );
};

export default LeftInfo;
