import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';

export const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};
