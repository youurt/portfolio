import React from 'react';
import { FaUnderline } from 'react-icons/fa';
import { Logo as LogoStyle } from './Logo.styled';

export const Logo = ({ theme }) => {
  return (
    <>
      <LogoStyle theme={theme}>
        <FaUnderline />
      </LogoStyle>
    </>
  );
};
