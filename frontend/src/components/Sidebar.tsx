import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Sidebar: React.FC = () => {
  const { t } = useTranslation();

  const navClass = ({ isActive }: { isActive: boolean }) => 
    `flex flex-col items-center justify-center p-3 rounded-2xl group transition-all duration-300 ${isActive ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface'}`;
  const getNavClass = ({ isActive }: { isActive: boolean }) => 
    isActive 
      ? "flex items-center gap-4 py-3 font-label-md text-label-md text-primary font-bold border-l-4 border-primary pl-4 bg-white/5 scale-95 transition-transform shadow-[inset_0_0_20px_rgba(224,182,255,0.05)]"
      : "flex items-center gap-4 py-3 font-label-md text-label-md text-on-surface-variant hover:text-on-surface pl-5 hover:bg-white/5 transition-colors";

  return (
    <nav className="fixed left-0 top-0 h-full w-sidebar-width bg-surface-container/90 backdrop-blur-xl flex flex-col py-margin-page z-40 border-r border-white/5 hidden md:flex">
      {/*  Logo Area  */}
      <div className="px-6 pb-8">
        <Link className="flex items-center gap-3 group" to="/">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center animate-spin-slow">
            <span className="material-symbols-outlined text-black text-sm">graphic_eq</span>
          </div>
          <span className="font-display-md text-display-md tracking-wider text-on-surface group-hover:text-primary transition-colors">KUDEX.ARCH</span>
        </Link>
      </div>
      {/*  Navigation Tabs  */}
      <div className="flex-1 flex flex-col gap-2">
        <NavLink className={getNavClass} to="/">
          <span className="material-symbols-outlined">home</span>
          {t('nav.home')}
        </NavLink>
        <NavLink className={getNavClass} to="/explore">
          <span className="material-symbols-outlined">search</span>
          {t('nav.explore')}
        </NavLink>
        <NavLink className={getNavClass} to="/library">
          <span className="material-symbols-outlined">library_music</span>
          {t('nav.library')}
        </NavLink>
        <NavLink className={getNavClass} to="/integrations">
          <span className="material-symbols-outlined">api</span>
          {t('nav.integrations')}
        </NavLink>
      </div>
      {/*  Footer Tab  */}
      <div className="flex flex-col gap-2 pb-6 mt-auto">
        <NavLink className={getNavClass} to="/pomodoro">
          <span className="material-symbols-outlined">timer</span>
          {t('nav.pomodoro')}
        </NavLink>
        <NavLink className={getNavClass} to="/settings">
          <span className="material-symbols-outlined">settings</span>
          {t('nav.settings')}
        </NavLink>
      </div>
    </nav>
  );
};
