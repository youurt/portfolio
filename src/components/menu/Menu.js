import React from 'react';
import { StyledMenu, Links } from './Menu.styled';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';
import { links } from './MenuData';

export const Menu = ({ open, theme }) => {
  return (
    <StyledMenu open={open} theme={theme}>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <Links key={id}>
            <Link to={url}>{text}</Link>
          </Links>
        );
      })}
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
  theme: bool.isRequired,
};
