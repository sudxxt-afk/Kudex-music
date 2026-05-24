const fs = require('fs');
const path = require('path');

const desktopHtmlPath = path.join(__dirname, 'frontend', 'src', 'jsx_screens', 'stitch_Главная_Kudex_Fixed_DESKTOP.jsx');
const mobileHtmlPath = path.join(__dirname, 'frontend', 'src', 'jsx_screens', 'stitch_Главная_Kudex_Mobile_MOBILE.jsx');

const desktopJsx = fs.readFileSync(desktopHtmlPath, 'utf8');
const mobileJsx = fs.readFileSync(mobileHtmlPath, 'utf8');

function extractTag(html, tag, classNameSubstring) {
    const regex = new RegExp(`<${tag}[^>]*className="[^"]*${classNameSubstring}[^"]*"[^>]*>([\\s\\S]*?)</${tag}>`, 'i');
    const match = html.match(regex);
    if (match) return match[0];
    return '';
}

// 1. Sidebar.tsx
const sidebarStr = extractTag(desktopJsx, 'nav', 'w-sidebar-width');
const sidebarContent = `import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  return (
    ${sidebarStr.replace(/href="#"/g, 'to="#"').replace(/<a /g, '<NavLink ').replace(/<\/a>/g, '</NavLink>')}
  );
};
`;
fs.writeFileSync(path.join(__dirname, 'frontend', 'src', 'components', 'Sidebar.tsx'), sidebarContent);

// 2. TopNavBar.tsx
const topNavStr = extractTag(desktopJsx, 'header', 'w-full md:w-\\[calc\\(100\\%-280px\\)\\]');
const topNavContent = `import React from 'react';

export const TopNavBar: React.FC = () => {
  return (
    ${topNavStr}
  );
};
`;
fs.writeFileSync(path.join(__dirname, 'frontend', 'src', 'components', 'TopNavBar.tsx'), topNavContent);

// 3. PlayerBar.tsx
const playerBarStr = extractTag(desktopJsx, 'nav', 'h-player-height');
const playerBarContent = `import React from 'react';

export const PlayerBar: React.FC = () => {
  return (
    ${playerBarStr.replace(/class=/g, 'className=')}
  );
};
`;
fs.writeFileSync(path.join(__dirname, 'frontend', 'src', 'components', 'PlayerBar.tsx'), playerBarContent);

// 4. MobileNavBar.tsx
const mobileNavRegex = /<nav className="fixed bottom-0 w-full[^>]*>([\s\S]*?)<\/nav>/;
const mobileNavMatch = mobileJsx.match(mobileNavRegex);
const mobileNavStr = mobileNavMatch ? mobileNavMatch[0] : '';
const mobileNavContent = `import React from 'react';
import { NavLink } from 'react-router-dom';

export const MobileNavBar: React.FC = () => {
  return (
    ${mobileNavStr.replace(/<div className="flex flex-col/g, '<NavLink className="flex flex-col').replace(/<\/div>/g, '</NavLink>')}
  );
};
`;
fs.writeFileSync(path.join(__dirname, 'frontend', 'src', 'components', 'MobileNavBar.tsx'), mobileNavContent);

// 5. MobileMiniPlayer.tsx
// It's the div before the bottom nav in mobileJsx
const miniPlayerRegex = /<div className="fixed bottom-20 left-4 right-4 z-50">([\s\S]*?)<\/div>\s*<\/div>/;
const miniPlayerMatch = mobileJsx.match(miniPlayerRegex);
const miniPlayerStr = miniPlayerMatch ? miniPlayerMatch[0] : '';
const miniPlayerContent = `import React from 'react';

export const MobileMiniPlayer: React.FC = () => {
  return (
    ${miniPlayerStr}
  );
};
`;
fs.writeFileSync(path.join(__dirname, 'frontend', 'src', 'components', 'MobileMiniPlayer.tsx'), miniPlayerContent);

// 6. AppLayout.tsx
const appLayoutContent = `import React from 'react';
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
`;
fs.writeFileSync(path.join(__dirname, 'frontend', 'src', 'components', 'AppLayout.tsx'), appLayoutContent);

console.log('Components built successfully!');
