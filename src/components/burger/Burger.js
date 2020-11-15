import React from 'react';
import { StyledBurger } from './Burger.styled';
import { bool, func } from 'prop-types';

export const Burger = ({ open, setOpen, theme }) => {
  return (
    <StyledBurger open={open} theme={theme} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
