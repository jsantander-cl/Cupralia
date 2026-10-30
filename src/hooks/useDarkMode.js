import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('cupralia_theme');
    // Si hay un valor guardado, úsalo; si no, por defecto iniciamos en true (modo oscuro)
    // Cambié el valor por defecto a false para iniciar en modo claro
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('cupralia_theme', JSON.stringify(isDarkMode));
    
    const root = document.documentElement;
    
    // Si isDarkMode es true, agregamos 'dark' y removemos 'light'.
    // Si es false, removemos 'light' y agregamos 'dark'.
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return [isDarkMode, toggleTheme];
}