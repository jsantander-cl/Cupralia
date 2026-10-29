// src/hooks/useDarkMode.js
import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('cupralia_theme');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return true; // Por defecto oscuro
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('cupralia_theme', 'true');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('cupralia_theme', 'false');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return [isDarkMode, toggleTheme];
}