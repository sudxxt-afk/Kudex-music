import React from 'react';
import { usePlayerStore } from '../store/playerStore';

export const MobileMiniPlayer: React.FC = () => {
  const { currentTrack, isPlaying, togglePlay } = usePlayerStore();

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 md:hidden">
      <div className="glass-card rounded-2xl p-3 flex flex-col shadow-2xl border border-primary/20 bg-surface-container-high/90 backdrop-blur-md">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg overflow-hidden shadow-lg ${isPlaying ? 'animate-pulse' : ''}`}>
              <img className="w-full h-full object-cover" src={currentTrack.coverUrl || "https://placehold.co/100x100/131314/e0b6ff?text=K"}/>
            </div>
            <div>
              <p className="font-label-md text-label-md text-primary leading-none mb-1">{currentTrack.title}</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant leading-none">{currentTrack.artist}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-on-surface">devices</span>
            <span className="material-symbols-outlined text-primary text-3xl cursor-pointer" onClick={togglePlay}>
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </div>
        </div>
        {/*  Simple Progress Overlay  */}
        <div className="h-1 bg-primary/20 w-full rounded-full overflow-hidden">
          <div className="h-full bg-primary w-[65%] shadow-[0_0_10px_#e0b6ff]"></div>
        </div>
      </div>
    </div>
  );
};
