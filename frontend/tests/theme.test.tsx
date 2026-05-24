import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useTheme } from '../src/theme/useTheme';

const ThemeTester: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe('Theme Engine', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
    // Очищаем инлайновые стили
    document.documentElement.removeAttribute('style');
  });

  test('should apply initial default theme class and CSS variables to documentElement', () => {
    render(<ThemeTester />);

    // Дефолтная тема 'dark-coal' должна быть добавлена в класс
    expect(document.documentElement.classList.contains('dark-coal')).toBe(true);
    expect(document.documentElement.style.getPropertyValue('--bg-primary')).toBe('#121212');
    expect(document.documentElement.style.getPropertyValue('--accent-color')).toBe('#a855f7');
  });

  test('should cycle themes when toggleTheme is called', () => {
    render(<ThemeTester />);
    const button = screen.getByText('Toggle Theme');

    // 1-я тема: dark-coal
    expect(document.documentElement.classList.contains('dark-coal')).toBe(true);

    // Переключаем тему -> tokyo-night
    act(() => {
      button.click();
    });
    expect(document.documentElement.classList.contains('tokyo-night')).toBe(true);
    expect(document.documentElement.classList.contains('dark-coal')).toBe(false);
    expect(document.documentElement.style.getPropertyValue('--bg-primary')).toBe('#1a1b26');

    // Переключаем тему -> gruvbox
    act(() => {
      button.click();
    });
    expect(document.documentElement.classList.contains('gruvbox')).toBe(true);
    expect(document.documentElement.classList.contains('tokyo-night')).toBe(false);
    expect(document.documentElement.style.getPropertyValue('--accent-color')).toBe('#fe8019');
  });

  test('should save selected theme to localStorage', () => {
    render(<ThemeTester />);
    const button = screen.getByText('Toggle Theme');

    act(() => {
      button.click(); // Переключаем на tokyo-night
    });

    expect(localStorage.getItem('kudex-theme')).toBe('tokyo-night');
  });
});
