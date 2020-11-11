import React from 'react';
import styled from 'styled-components';

const Left = styled.div`
  background: purple;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 20px;
`;
const Right = styled.div`
  background: purple;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 20px;
`;
const Top = styled.div`
  background: purple;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 20px;
`;
const Bottom = styled.div`
  background: purple;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
`;

const Border = () => {
  return (
    <>
      <Left />
      <Right />
      <Top />
      <Bottom />
    </>
  );
};

export default Border;
