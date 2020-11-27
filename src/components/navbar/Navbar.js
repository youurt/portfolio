import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from './NavbarData';
import { MenuLink, Nav, Menu, Hamburger } from './Navbar.styled';
import { ItemVariants } from './../../utils/utils';

export const Navbar = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <div></div>
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
            <MenuLink
              variants={ItemVariants}
              initial='beforeHover'
              whileHover='onHover'
              key={id}
            >
              <Link to={url}>{text}</Link>
            </MenuLink>
          );
        })}
      </Menu>
    </Nav>
  );
};
