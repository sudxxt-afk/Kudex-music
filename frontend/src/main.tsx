import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';
import { App } from './App';
import './i18n/config';
import './index.css';
import { AuthService } from './services/AuthService';
import { GlobalLoader } from './components/GlobalLoader';

const TmaBridge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const launchParams = retrieveLaunchParams();
      if (launchParams && String(launchParams.initDataRaw)) {
        AuthService.telegramLogin(launchParams.initDataRaw as string).then(() => {
          setIsReady(true);
        }).catch(err => {
          console.error('TMA Login failed', err);
          setIsReady(true);
        });
      } else {
        setIsReady(true);
      }
    } catch (err) {
      console.warn('Not in Telegram environment or no launch params found.');
      setIsReady(true);
    }
  }, []);

  if (!isReady) return <GlobalLoader />;
  return <>{children}</>;
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <TmaBridge>
          <App />
        </TmaBridge>
      </BrowserRouter>
    </React.StrictMode>
  );
}
