import React from 'react';
import { usePlayerStore } from '../store/playerStore';

export const PlayerBar: React.FC = () => {
  const { currentTrack, isPlaying, togglePlay } = usePlayerStore();

  if (!currentTrack) return null;

  return (
    <nav className="fixed bottom-0 left-0 w-full h-player-height bg-surface-container-high/95 backdrop-blur-2xl z-50 flex items-center justify-between px-gutter shadow-[0_-4px_20px_rgba(157,78,221,0.15)] border-t-0 border-white/5">
{/*  Section 1: Now Playing  */}
<div className="flex items-center gap-4 w-1/4 min-w-[220px]">
<div className="relative w-14 h-14 rounded-md overflow-hidden group cursor-pointer border border-white/10 shadow-md">
<img alt={currentTrack.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={currentTrack.coverUrl || "https://placehold.co/100x100/131314/e0b6ff?text=K"} />
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<span className="material-symbols-outlined text-white">keyboard_arrow_up</span>
</div>
</div>
<div className="flex flex-col truncate">
<a className="font-headline-sm text-[16px] text-primary font-bold hover:underline truncate" href="#">{currentTrack.title}</a>
<a className="font-label-md text-label-sm text-on-surface-variant hover:text-on-surface transition-colors truncate mt-0.5" href="#">{currentTrack.artist}</a>
</div>
<button className="text-secondary ml-2 hover:scale-110 transition-transform hidden sm:block">
<span className="material-symbols-outlined text-[20px]" >favorite</span>
</button>
</div>
{/*  Section 2: Controls  */}
<div className="flex flex-col items-center justify-center w-2/4 max-w-[600px] px-4">
<div className="flex items-center gap-6 mb-2">
<button className="text-on-surface-variant hover:text-primary transition-colors hidden sm:block"><span className="material-symbols-outlined text-[20px]">shuffle</span></button>
<button className="text-on-surface-variant hover:text-white transition-colors"><span className="material-symbols-outlined text-[24px]" >skip_previous</span></button>
{/*  Main Play Button  */}
<button onClick={togglePlay} className="w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_15px_rgba(224,182,255,0.4)]">
<span className="material-symbols-outlined text-[24px]" >{isPlaying ? 'pause' : 'play_arrow'}</span>
</button>
<button className="text-on-surface-variant hover:text-white transition-colors"><span className="material-symbols-outlined text-[24px]" >skip_next</span></button>
<button className="text-on-surface-variant hover:text-primary transition-colors hidden sm:block"><span className="material-symbols-outlined text-[20px]">repeat</span></button>
</div>
{/*  Progress Bar  */}
<div className="w-full flex items-center gap-3 font-label-sm text-[11px] text-on-surface-variant tracking-wider">
<span className="">1:24</span>
<div className="flex-1 h-1 bg-surface-bright rounded-full relative group cursor-pointer">
<div className="absolute top-0 left-0 h-full w-[35%] bg-gradient-to-r from-primary to-secondary rounded-full group-hover:from-primary/80 group-hover:to-secondary/80 transition-all"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[35%] w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-opacity"></div>
</div>
<span className="">4:18</span>
</div>
</div>
{/*  Section 3: Tools & Pomodoro  */}
<div className="flex items-center justify-end gap-5 w-1/4 min-w-[200px] pr-2">
{/*  Pomodoro Timer Icon  */}
<button className="text-on-surface-variant hover:text-secondary transition-colors hover:scale-110 flex items-center gap-1 group relative" title="Pomodoro Focus Timer">
<span className="material-symbols-outlined text-[22px]">timer</span>
<span className="font-label-sm text-[10px] hidden xl:block text-secondary opacity-0 group-hover:opacity-100 transition-opacity absolute -top-4 right-0 whitespace-nowrap bg-surface-container px-2 py-0.5 rounded border border-white/10">Focus Mode</span>
</button>
<button className="text-on-surface-variant hover:text-white transition-colors hidden lg:block">
<span className="material-symbols-outlined text-[22px]">queue_music</span>
</button>
{/*  Volume Slider  */}
<div className="flex items-center gap-2 w-24 group hidden sm:flex">
<span className="material-symbols-outlined text-on-surface-variant text-[20px] group-hover:text-white transition-colors">volume_up</span>
<div className="flex-1 h-1 bg-surface-bright rounded-full relative cursor-pointer">
<div className="absolute top-0 left-0 h-full w-[70%] bg-on-surface-variant rounded-full group-hover:bg-primary transition-colors"></div>
</div>
</div>
</div>
</nav>
  );
};
