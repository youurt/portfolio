import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { HELLO, INTERESTS, PageTrans } from "./../../utils/utils";
import { Header, MainText, Motion, SpanText } from "./About.styled";

const About = () => {
  const [index, setIndex] = useState(0);
  const [dateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  const today = dateTime.toLocaleDateString("en", { weekday: "long" });
  return (
    <>
      <Motion initial="out" animate="in" exit="out" variants={PageTrans}>
        <Header>
          <SpanText>
            <TextTransition
              text={HELLO[index % HELLO.length]}
              springConfig={presets.wobbly}
              inline={true}
            ></TextTransition>
          </SpanText>
        </Header>

        <MainText>
          My name is Uğur and I'm a multidisciplinary developer. Currently
          living in Germany, Frankfurt! With a strong interest in{" "}
          <SpanText>
            <TextTransition
              text={INTERESTS[index % INTERESTS.length]}
              springConfig={presets.wobbly}
              inline={true}
            ></TextTransition>
          </SpanText>
          .
          <br />
          <br />I created this website to upload and show my recent projects. I
          created this Website in React but currently refactoring it in angular.
          <br />
          So stay tuned & have a nice {today}!
        </MainText>
      </Motion>
    </>
  );
};

export default About;
