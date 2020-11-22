import React, { useState } from 'react';
import { Toggle } from './../../components';
import { Link } from 'react-router-dom';
import { links } from './NavbarData';
import { MenuLink, Nav, Menu, Hamburger } from './Navbar.styled';

export const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Toggle toggleTheme={toggleTheme} theme={theme} />

      <Hamburger
        onClick={() => setIsOpen(!isOpen)}
        theme={theme}
        isOpen={isOpen}
      >
        <div />
        <div />
        <div />
      </Hamburger>
      <Menu isOpen={isOpen}>
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <MenuLink key={id}>
              <Link to={url}>{text}</Link>
            </MenuLink>
          );
        })}
      </Menu>
    </Nav>
  );
};
