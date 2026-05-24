import { useEffect, useState } from 'react';
import { ThemeName, themes } from './themeConfig';
import { logAction } from './loggerDecorator';

export const useTheme = () => {
  const getInitialTheme = (): ThemeName => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kudex-theme') as ThemeName;
      if (saved && saved in themes) {
        return saved;
      }
    }
    return 'dark-coal';
  };

  const [theme, setThemeState] = useState<ThemeName>(getInitialTheme);

  const applyTheme = (newTheme: ThemeName): void => {
    const root = document.documentElement;

    // Сбрасываем старые классы тем
    Object.keys(themes).forEach((t) => {
      root.classList.remove(t);
    });

    // Устанавливаем новый класс темы
    root.classList.add(newTheme);

    // Устанавливаем CSS переменные
    const variables = themes[newTheme];
    Object.entries(variables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    localStorage.setItem('kudex-theme', newTheme);
    setThemeState(newTheme);
  };

  // Оборачиваем функцию смены темы в декоратор для логирования
  const setTheme = logAction('Theme', applyTheme);

  useEffect(() => {
    // Применяем тему при монтировании хука
    applyTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = (): void => {
    const themeKeys = Object.keys(themes) as ThemeName[];
    const currentIndex = themeKeys.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setTheme(themeKeys[nextIndex]);
  };

  return {
    theme,
    setTheme,
    toggleTheme
  };
};
