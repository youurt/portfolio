import React from 'react';
import { StyledMenu, Links } from './Menu.styled';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';

export const Menu = ({ open, theme }) => {
  return (
    <StyledMenu open={open} theme={theme}>
      <ul>
        <Links>
          <Link to='/about'>About</Link>
        </Links>
        <Links>
          <Link to='/work'>Work</Link>
        </Links>
        <Links>
          <Link to='/ideas'>Ideas</Link>
        </Links>
      </ul>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  theme: bool.isRequired,
};
