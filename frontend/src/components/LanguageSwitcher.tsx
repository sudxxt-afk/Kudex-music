import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (): void => {
    const currentLang = i18n.language || 'en';
    const newLang = currentLang.startsWith('ru') ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  const displayLang = (i18n.language || 'en').startsWith('ru') ? 'RU' : 'EN';

  return (
    <button
      id="language-switcher"
      onClick={toggleLanguage}
      style={{
        padding: '8px 16px',
        borderRadius: '8px',
        border: '1px solid var(--accent-color)',
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-main)',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '14px',
        outline: 'none',
        transition: 'all 0.2s ease-in-out'
      }}
    >
      {displayLang}
    </button>
  );
};
