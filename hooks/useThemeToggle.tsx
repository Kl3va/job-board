import { useState, useEffect } from 'react';

const useThemeToggle = () => {
  const [theme, setTheme] = useState<any>(false);

  useEffect(() => {
    setTheme(JSON.parse(localStorage.getItem('localThemes') || '{}'));
  }, []);

  useEffect(() => {
    localStorage.setItem('localThemes', JSON.stringify(theme));
  }, [theme]);

  const themeToggler = () => {
    setTheme(!theme);
  };

  return { theme, themeToggler };
};

export default useThemeToggle;
