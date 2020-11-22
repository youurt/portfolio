import React from 'react';
import {
  FooterGrid,
  FooterFirst,
  FooterCenter,
  FooterLast,
  Big,
} from './Footer.styled';

export const Footer = () => {
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
          <strong>Pronouns are</strong>
        </p>
        <Big>They/them</Big>
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
