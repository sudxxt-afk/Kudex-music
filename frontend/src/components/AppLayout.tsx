import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { PlayerBar } from './PlayerBar';
import { TopNavBar } from './TopNavBar';
import { MobileNavBar } from './MobileNavBar';
import { MobileMiniPlayer } from './MobileMiniPlayer';
import { ErrorBoundary } from './ErrorBoundary';
import { GlobalLoader } from './GlobalLoader';
import { Toaster } from 'react-hot-toast';

export const AppLayout: React.FC = () => {
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body-md text-body-md antialiased overflow-x-hidden selection:bg-primary/30 selection:text-primary min-h-screen flex relative">
      <GlobalLoader />
      <Toaster position="top-right" />
      
      {/* Background */}
      <canvas className="fixed inset-0 w-full h-full z-0 pointer-events-none" id="bg-canvas"></canvas>
      
      <Sidebar />
      <TopNavBar />
      
      <main className="flex-1 md:ml-[280px] pt-24 pb-[120px] px-6 md:px-12 w-full max-w-7xl mx-auto overflow-y-auto relative z-10 h-screen">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>

      <div className="hidden md:block">
        <PlayerBar />
      </div>
      
      <div className="block md:hidden">
        <MobileMiniPlayer />
        <MobileNavBar />
      </div>
    </div>
  );
};
