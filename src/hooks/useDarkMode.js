import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  console.log('theme', theme);
  const localTheme = window.localStorage.getItem('theme');
  console.log('local', localTheme);

  const themeToggler = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('light');
    }
    setComponentMounted(true);
  }, []);
  return [theme, themeToggler, componentMounted];
};
