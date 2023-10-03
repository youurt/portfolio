import React from "react";
import { Toggle } from "./../../components";
import {
  Big,
  FooterCenter,
  FooterFirst,
  FooterGrid,
  FooterLast,
} from "./Footer.styled";

const Footer = ({ theme, toggleTheme }) => {
  return (
    <FooterGrid>
      <FooterFirst>
        <p>
          <strong>Uğur Tigu</strong> <br />
          Developer.
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
          <a href="https://github.com/youurt" target="_blank">
            GitHub
          </a>
          ,{" "}
          <a href="https://www.linkedin.com/in/youurt/" target="_blank">
            LinkedIn
          </a>
          , <br />
          <a href="https://codepen.io/youurt" target="_blank">
            Codepen
          </a>
        </p>
      </FooterLast>
    </FooterGrid>
  );
};

export default Footer;
