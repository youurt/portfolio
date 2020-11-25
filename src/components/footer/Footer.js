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
        <Big>Disco/Work</Big>
      </FooterCenter>
      <FooterLast>
        <p>
          <strong>Connect with me on:</strong> <br />
          <a href='#'>CodePen</a>, <a href='#'>GitHub</a>,{' '}
          <a href='#'>Dev.to</a>, <br />
          <a href='#'>Twitter</a>, <a href='#'>LinkedIn</a>,{' '}
          <a href='#'>Patreon</a>
        </p>
      </FooterLast>
    </FooterGrid>
  );
};
