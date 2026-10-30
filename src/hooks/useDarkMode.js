import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('cupralia_theme');
    // Si no hay nada guardado, por defecto es true (Modo Oscuro)
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('cupralia_theme', JSON.stringify(isDarkMode));
    
    // Lógica 100% intuitiva:
    // Si isDarkMode es true -> Activamos Dark Mode
    // Si isDarkMode es false -> Activamos Light Mode
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return [isDarkMode, toggleTheme];
}