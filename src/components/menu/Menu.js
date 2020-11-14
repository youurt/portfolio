import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';

export const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href='/'>About us</a>
      <a href='/'>Pricing</a>
      <a href='/'>Contact</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};
