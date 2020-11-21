import React from 'react';
import { StyledMenu, Links } from './Menu.styled';
import { bool, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { links } from './MenuData';
import { Burger } from './../../components';

export const Menu = ({ open, theme }) => {
  return (
    <StyledMenu open={open} theme={theme}>
      <div></div>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <Links key={id}>
            <Link to={url}>{text}</Link>
          </Links>
        );
      })}
      <div></div>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
  theme: string.isRequired,
};
