import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaUnderline,
} from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/about',
    text: 'about',
  },
  {
    id: 2,
    url: '/work',
    text: 'work',
  },
  {
    id: 3,
    url: '/ideas',
    text: 'ideas',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
];

export const logo = { icon: <FaUnderline /> };
