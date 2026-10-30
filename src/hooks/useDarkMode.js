import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('cupralia_theme');
    // Si no hay nada guardado, iniciamos en false (que en tu lógica actual activa el modo oscuro por defecto)
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('cupralia_theme', JSON.stringify(isDarkMode));
    
    // Al estar invertido, 'false' activa la clase dark y 'true' activa la clase light
    if (!isDarkMode) {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return [isDarkMode, toggleTheme];
}