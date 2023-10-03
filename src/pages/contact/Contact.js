import React from "react";
import { CardVariants, PageTrans } from "./../../utils/utils";
import { Border, Header, Item, Motion, Text } from "./Contact.styled";

const Contact = () => {
  return (
    <>
      <Motion initial="out" animate="in" exit="out" variants={PageTrans}>
        <Header>CONTACT ME*</Header>
        <Text>*I am currently looking for Jobs!</Text>
        <Border>
          <Item
            variants={CardVariants}
            initial="beforeHover"
            whileHover="onHover"
          >
            <a href="../../../public/CV.pdf">You can download my CV here!</a>
          </Item>
        </Border>
      </Motion>
    </>
  );
};

export default Contact;
