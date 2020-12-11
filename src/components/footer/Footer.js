import React from 'react';
import { Toggle } from './../../components';
import {
  FooterGrid,
  FooterFirst,
  FooterCenter,
  FooterLast,
  Big,
} from './Footer.styled';

export const Footer = ({ theme, toggleTheme }) => {
  return (
    <FooterGrid>
      <FooterFirst>
        <p>
          <strong>Ugur Tigu</strong> <br />
          Developer + designer, passionate about data.
        </p>
      </FooterFirst>
      <FooterCenter>
        <p>
          <strong>Mood:</strong>
        </p>
        <Toggle toggleTheme={toggleTheme} theme={theme} />
        <Big>Switch</Big>
      </FooterCenter>
      <FooterLast>
        <p>
          <strong>Connect with me on:</strong> <br />
          <a href='https://github.com/youurt'>GitHub</a>,{' '}
          <a href='https://www.linkedin.com/in/youurt/'>LinkedIn</a>, <br />
          <a href='https://twitter.com/_datacat_'>Twitter</a>
        </p>
      </FooterLast>
    </FooterGrid>
  );
};
