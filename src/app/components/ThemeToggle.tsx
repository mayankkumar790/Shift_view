import React from 'react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  isMinimized: boolean
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme, isMinimized=false }) => {
  return (
    <button
      className=" rounded transition"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (isMinimized ? '🌙' : '🌙 Dark Mode') : isMinimized ? '☀️': '☀️ Light Mode'}
    </button>
  );
};

export default ThemeToggle;
