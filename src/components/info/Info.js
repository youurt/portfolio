import React, { useState, useEffect } from 'react';
import { LeftInfo, RightInfo, SpanText } from './InfoStyles';
import TextTransition, { presets } from 'react-text-transition';

export const Info = ({ open }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  const TEXTS_LANG = ['Python', 'React', 'Frontend', 'UI', 'Data'];
  return (
    <>
      <LeftInfo open={open}>
        <SpanText>
          <TextTransition
            text={TEXTS_LANG[index % TEXTS_LANG.length]}
            springConfig={presets.wobbly}
            inline={true}
          ></TextTransition>
        </SpanText>
        Developer
      </LeftInfo>
      <RightInfo>
        <a href='mailto:ugur.tigu@gmail.com'>ugurtigu@gmail.com</a>
      </RightInfo>
    </>
  );
};
