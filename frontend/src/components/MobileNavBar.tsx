import React from 'react';
import { NavLink } from 'react-router-dom';

export const MobileNavBar: React.FC = () => {
  const getNavClass = ({ isActive }: { isActive: boolean }) => 
    isActive
      ? "flex flex-col items-center justify-center text-primary bg-primary-container/20 rounded-xl px-3 py-1 active:scale-95 duration-200 cursor-pointer"
      : "flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200 cursor-pointer";

  return (
    <nav className="fixed bottom-0 w-full z-50 bg-background/80 backdrop-blur-xl border-t border-outline-variant/10 shadow-[0_-4px_20px_rgba(157,78,221,0.1)] flex justify-around items-center h-16 px-4">
      {/*  Home  */}
      <NavLink className={getNavClass} to="/">
        <span className="material-symbols-outlined" >home</span>
        <span className="font-label-sm text-label-sm">Home</span>
      </NavLink>
      {/*  Library  */}
      <NavLink className={getNavClass} to="/library">
        <span className="material-symbols-outlined">library_music</span>
        <span className="font-label-sm text-label-sm">Library</span>
      </NavLink>
      {/*  Explore  */}
      <NavLink className={getNavClass} to="/explore">
        <span className="material-symbols-outlined">explore</span>
        <span className="font-label-sm text-label-sm">Explore</span>
      </NavLink>
      {/*  Pomodoro  */}
      <NavLink className={getNavClass} to="/pomodoro">
        <span className="material-symbols-outlined">timer</span>
        <span className="font-label-sm text-label-sm">Pomodoro</span>
      </NavLink>
      {/*  Settings  */}
      <NavLink className={getNavClass} to="/settings">
        <span className="material-symbols-outlined">settings</span>
        <span className="font-label-sm text-label-sm">Settings</span>
      </NavLink>
    </nav>
  );
};
