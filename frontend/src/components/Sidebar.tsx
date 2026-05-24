import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  const getNavClass = ({ isActive }: { isActive: boolean }) => 
    isActive 
      ? "flex items-center gap-4 py-3 font-label-md text-label-md text-primary font-bold border-l-4 border-primary pl-4 bg-white/5 scale-95 transition-transform shadow-[inset_0_0_20px_rgba(224,182,255,0.05)]"
      : "flex items-center gap-4 py-3 font-label-md text-label-md text-on-surface-variant hover:text-on-surface pl-5 hover:bg-white/5 transition-colors";

  return (
    <nav className="fixed left-0 top-0 h-full w-sidebar-width bg-surface-container/90 backdrop-blur-xl flex flex-col py-margin-page z-40 border-r border-white/5 hidden md:flex">
      {/*  Header / Brand  */}
      <Link to="/" className="px-6 mb-8 flex flex-row items-center gap-3">
        <img alt="Kudex Logo" className="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uin_iXZTnSWGq3sYdyHBfo045EN961zjT-77UvFA8pGxfgkKgdLL57Rr2LLWBXDmOhu9OacJRlBgQ3RjA1egZBOUPGNHZknwyAf4ZrLDiiuFaYlUMTFUm2EXdlp1n27YXouNv_C4lmYNLHwS-0bLK_7jNoH1lNPxq7xCQ8CoXtrmgxqEQo3ucf0WMmlE-PtZYpvtHe0fQtKvZPZ8XX76imrbLesUUFK2xa8adCmEfIz6p5mfTrpZORfPXc" />
        <h1 className="font-headline-md text-headline-md font-black text-primary tracking-tight transition-all duration-300 hover:opacity-80">Kudex</h1>
      </Link>
      {/*  CTA  */}
      <div className="px-6 mb-8">
        <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 rounded-full hover:scale-95 transition-transform duration-200 flex items-center justify-center gap-2 font-bold shadow-[0_0_15px_rgba(224,182,255,0.2)] hover:shadow-[0_0_25px_rgba(224,182,255,0.4)]">
          <span className="material-symbols-outlined" >add</span>
          New Playlist
        </button>
      </div>
      {/*  Navigation Tabs  */}
      <div className="flex-1 flex flex-col gap-2">
        <NavLink className={getNavClass} to="/">
          <span className="material-symbols-outlined">home</span>
          Home
        </NavLink>
        <NavLink className={getNavClass} to="/explore">
          <span className="material-symbols-outlined">search</span>
          Explore
        </NavLink>
        <NavLink className={getNavClass} to="/library">
          <span className="material-symbols-outlined">library_music</span>
          Library
        </NavLink>
        <NavLink className={getNavClass} to="/integrations">
          <span className="material-symbols-outlined">api</span>
          Integrations
        </NavLink>
      </div>
      {/*  Footer Tab  */}
      <div className="px-6 mt-auto flex flex-col gap-2">
        <NavLink className={getNavClass} to="/pomodoro">
          <span className="material-symbols-outlined">timer</span>
          Pomodoro
        </NavLink>
        <NavLink className={getNavClass} to="/settings">
          <span className="material-symbols-outlined">settings</span>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
