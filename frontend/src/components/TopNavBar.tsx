import React from 'react';

export const TopNavBar: React.FC = () => {
  return (
    <header className="fixed top-0 right-0 w-full md:w-[calc(100%-280px)] h-16 bg-surface/80 backdrop-blur-xl flex items-center justify-between px-gutter z-30 transition-all duration-300">
{/*  Search Bar on left  */}
<div className="flex-1 max-w-md hidden md:block">
<div className="flex items-center bg-surface-container rounded-full px-4 py-2 border border-white/5 focus-within:border-secondary/50 focus-within:shadow-[0_0_15px_rgba(236,255,227,0.1)] transition-all">
<span className="material-symbols-outlined text-on-surface-variant mr-2 text-[20px]">search</span>
<input className="bg-transparent border-none outline-none text-on-surface font-body-md text-body-md w-full placeholder:text-on-surface-variant/70 focus:ring-0" placeholder="Search Kudex..." type="text" />
</div>
</div>
{/*  Mobile Brand (Hidden on Desktop)  */}
<div className="md:hidden"><img alt="Kudex Logo" className="w-8 h-8 mr-2 inline-block object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uin_iXZTnSWGq3sYdyHBfo045EN961zjT-77UvFA8pGxfgkKgdLL57Rr2LLWBXDmOhu9OacJRlBgQ3RjA1egZBOUPGNHZknwyAf4ZrLDiiuFaYlUMTFUm2EXdlp1n27YXouNv_C4lmYNLHwS-0bLK_7jNoH1lNPxq7xCQ8CoXtrmgxqEQo3ucf0WMmlE-PtZYpvtHe0fQtKvZPZ8XX76imrbLesUUFK2xa8adCmEfIz6p5mfTrpZORfPXc" />
<h2 className="font-display-lg-mobile text-display-lg-mobile font-black text-primary tracking-tight">Kudex</h2>
</div>
{/*  Trailing Actions  */}
<div className="flex items-center gap-6">
<button className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100 hover:scale-110 transform duration-200">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="w-9 h-9 rounded-full overflow-hidden border border-white/10 hover:border-primary transition-colors hover:shadow-[0_0_10px_rgba(224,182,255,0.3)] opacity-80 hover:opacity-100">
<span className="material-symbols-outlined text-on-surface-variant w-full h-full flex items-center justify-center bg-surface-container">account_circle</span>
</button>
</div>
</header>
  );
};
