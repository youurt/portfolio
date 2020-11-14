import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const Button = styled.div`
  background: ${({ theme }) => theme.iconColor};
  color: ${({ theme }) => theme.iconColor};

  position: fixed;
  top: 5%;
  right: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
`;

export const Toggle = ({ theme, toggleTheme, size = 50 }) => {
  // return <Button onClick={toggleTheme}>Switch Theme</Button>;
  switch (theme) {
    case 'dark':
      return (
        <Button>
          <svg
            onClick={toggleTheme}
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 302.4 302.4'
          >
            <path
              fill='red'
              d='M204.8 97.6C191.2 84 172 75.2 151.2 75.2s-40 8.4-53.6 22.4c-13.6 13.6-22.4 32.8-22.4 53.6a76.3 76.3 0 0 0 76 76 76.3 76.3 0 0 0 76-76c0-20.8-8.4-40-22.4-53.6zm-14.4 92.8c-10 10-24 16-39.2 16s-29.2-6-39.2-16-16-24-16-39.2 6-29.2 16-39.2 24-16 39.2-16 29.2 6 39.2 16 16 24 16 39.2-6 29.2-16 39.2zM292 140.8h-30.8c-5.6 0-10.4 4.8-10.4 10.4 0 5.6 4.8 10.4 10.4 10.4H292c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM151.2 250.8c-5.6 0-10.4 4.8-10.4 10.4V292c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4v-30.8c0-5.6-4.8-10.4-10.4-10.4zM258 243.6l-22-22c-3.6-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4zM151.2 0c-5.6 0-10.4 4.8-10.4 10.4v30.8c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4zM258.4 44.4c-4-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4 3.6 4 10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM41.2 140.8H10.4c-5.6 0-10.4 4.8-10.4 10.4s4.4 10.4 10.4 10.4h30.8c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM80.4 221.6c-3.6-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4s10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM80.4 66.4l-22-22c-4-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4z'
            />
          </svg>
        </Button>
      );
    case 'light':
      return (
        <Button>
          <svg
            onClick={toggleTheme}
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 480 480'
          >
            <path
              fill='red'
              d='M459.8 347.3a16 16 0 0 0-17.8-5A176.2 176.2 0 0 1 208.7 176c0-58.3 28.8-112.7 77-145.4a16 16 0 0 0-6.6-29C271.6.3 264 0 256.6 0c-132.3 0-240 107.6-240 240s107.7 240 240 240c84 0 160.5-42.7 204.4-114.2 3.6-5.8 3-13.2-1.2-18.5z'
            />
          </svg>
        </Button>
      );
    default:
      return "Icon doesn't exist";
  }
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
