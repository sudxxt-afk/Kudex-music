import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n/config';
import { LanguageSwitcher } from '../src/components/LanguageSwitcher';

const TranslationTester: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 data-testid="settings-title">{t('settings.title')}</h1>
      <LanguageSwitcher />
    </div>
  );
};

describe('Localization Engine (i18n)', () => {
  beforeEach(async () => {
    // Сбрасываем язык на английский перед каждым тестом
    await act(async () => {
      await i18n.changeLanguage('en');
    });
  });

  test('should render translation in English by default', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <TranslationTester />
      </I18nextProvider>
    );

    expect(screen.getByTestId('settings-title')).toHaveTextContent('Settings');
    expect(screen.getByRole('button')).toHaveTextContent('EN');
  });

  test('should switch translations to Russian upon clicking LanguageSwitcher', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <TranslationTester />
      </I18nextProvider>
    );

    const button = screen.getByRole('button');

    // Переключаем язык на RU
    await act(async () => {
      button.click();
    });

    expect(screen.getByTestId('settings-title')).toHaveTextContent('Настройки');
    expect(button).toHaveTextContent('RU');

    // Переключаем обратно на EN
    await act(async () => {
      button.click();
    });

    expect(screen.getByTestId('settings-title')).toHaveTextContent('Settings');
    expect(button).toHaveTextContent('EN');
  });
});
