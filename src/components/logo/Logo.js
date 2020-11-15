import React from 'react';
import { FaUnderline } from 'react-icons/fa';
import { Logo as LogoStyle } from './Logo.styled';
import { Link } from 'react-router-dom';

export const Logo = ({ theme }) => {
  return (
    <>
      <Link to='/'>
        <LogoStyle theme={theme}>
          <FaUnderline />
        </LogoStyle>
      </Link>
    </>
  );
};
