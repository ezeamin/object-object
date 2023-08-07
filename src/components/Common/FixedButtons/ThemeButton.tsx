'use client';

import { useTheme } from 'next-themes';

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      type="button"
      className="fixed-button theme-button"
      onClick={handleChangeTheme}
    >
      <i
        className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}
      />
    </button>
  );
};
export default ThemeButton;
