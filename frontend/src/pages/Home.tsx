import React, { useEffect, useState } from 'react';
import { MusicService } from '../services/MusicService';
import { usePlayerStore } from '../store/playerStore';
import { Track } from '../types';

export const Home: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const { setTrack, currentTrack, isPlaying, togglePlay } = usePlayerStore();

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const data = await MusicService.getTracks();
        setTracks(data.tracks || []);
      } catch (err) {
        console.error('Failed to fetch tracks', err);
      }
    };
    fetchTracks();
  }, []);

  const handleTrackClick = (track: Track) => {
    if (currentTrack?.id === track.id) {
      togglePlay();
    } else {
      setTrack(track);
    }
  };

  return (
    <>
      {/*  Hero Section  */}
      <section className="mb-section-gap">
      <h2 className="font-display-lg text-display-lg font-black text-on-surface mb-8 tracking-tight">Good evening!</h2>
      {/*  Recently Played Tracks Grid  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tracks.map(track => (
          <div 
            key={track.id} 
            onClick={() => handleTrackClick(track)}
            className="flex items-center bg-surface-container/40 hover:bg-surface-container border border-white/5 rounded-xl overflow-hidden transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-[0_4px_25px_rgba(224,182,255,0.08)]"
          >
            <div className="w-20 h-20 relative shrink-0">
              <img alt="Album Art" className="w-full h-full object-cover" src={track.coverUrl || "https://placehold.co/100x100/131314/e0b6ff?text=K"} />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                <span className="material-symbols-outlined text-white text-[32px] drop-shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300" >
                  {currentTrack?.id === track.id && isPlaying ? 'pause_circle' : 'play_circle'}
                </span>
              </div>
            </div>
            <div className="p-4 flex-1 truncate">
              <h3 className={`font-headline-sm text-[16px] font-bold truncate transition-colors ${currentTrack?.id === track.id ? 'text-primary' : 'text-on-surface group-hover:text-primary'}`}>
                {track.title}
              </h3>
              <p className="font-label-md text-label-md text-on-surface-variant truncate">{track.artist}</p>
            </div>
          </div>
        ))}
      </div>
      </section>
{/*  Bento Grid Section  */}
<section>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
{/*  Your Mix (Hero Bento Item)  */}
<div className="col-span-1 md:col-span-8 rounded-2xl relative overflow-hidden group cursor-pointer border border-white/5 hover:border-primary/40 transition-all duration-500 shadow-xl hover:shadow-[0_8px_40px_rgba(224,182,255,0.15)] bg-surface-container-high/80 backdrop-blur-sm">
<img className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity group-hover:scale-105 duration-1000 ease-out mix-blend-screen" data-alt="A mesmerizing, fluid abstract background resembling swirling liquid metal in deep purples and blues. A subtle glow emanates from the center, creating depth. The composition is sleek, dark, and highly polished, perfect for a modern media interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJyb2VcPOonAng-eNg21ps09K4MEExXczijDrwhaQJZun6U6cOyqfytMDVxcQdRdBPxowkgcSXJRJU669FBvyU0LNRTqM0muYItuOLjWJR5F2WO-iZ-S2HcuivJjCuZQy-5M21HFp5Sxl9d76_aixiOWjEyXNKu9zIEyWWtNeZr4NC3grqTOAUK80lD80XDpJprapSW-IwOFilE2u72h_2eSlw8zJVTWTpttrxNGoaZneAPKDsK1AQZVfd3qi9O2OvqD84xqKOG1o" />
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end z-10">
<div>
<span className="px-3 py-1 bg-primary/20 text-primary font-label-sm text-[10px] rounded-full uppercase tracking-widest backdrop-blur-md border border-primary/30 mb-4 inline-block">Daily Mix</span>
<h3 className="font-display-lg text-display-lg font-black text-white mb-2 tracking-tight">Your Late Night Mix</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md line-clamp-2">A seamless blend of atmospheric techno, deep house, and ambient soundscapes curated for deep focus.</p>
</div>
{/*  Interactive Pulsing Play Button  */}
<button className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(224,182,255,0.4)] hover:scale-110 relative shrink-0">
<div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
<span className="material-symbols-outlined text-[36px] ml-1 z-10" >play_arrow</span>
</button>
</div>
</div>
{/*  Favorite Tracks (Metric Bento Item)  */}
<div className="col-span-1 md:col-span-4 rounded-2xl relative overflow-hidden group cursor-pointer border border-white/5 hover:border-secondary/40 transition-all duration-300 bg-surface-container-high/80 backdrop-blur-sm shadow-xl hover:shadow-[0_8px_30px_rgba(236,255,227,0.05)]">
<div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-60"></div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="flex justify-between items-start">
<h3 className="font-headline-sm text-[20px] font-bold text-white tracking-tight">Favorite Tracks</h3>
<span className="material-symbols-outlined text-secondary text-[28px] drop-shadow-[0_0_8px_rgba(236,255,227,0.5)]" >favorite</span>
</div>
<div className="mt-auto">
<p className="font-display-lg text-[56px] font-black text-secondary tracking-tighter mb-0 leading-none">1,284</p>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mt-2">Songs Saved to Library</p>
</div>
</div>
</div>
{/*  Recent Imports (List Bento Item)  */}
<div className="col-span-1 md:col-span-12 lg:col-span-4 rounded-2xl bg-surface-container-high/80 backdrop-blur-xl border border-white/5 p-6 group hover:bg-surface-container/90 transition-all cursor-pointer flex flex-col gap-4">
<div className="flex items-center justify-between mb-2">
<h3 className="font-headline-sm text-[18px] font-bold text-on-surface">Recent Imports</h3>
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">library_add</span>
</div>
<div className="flex flex-col gap-4 flex-1 justify-center">
<div className="flex items-center gap-4 hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
<div className="w-12 h-12 bg-surface-bright rounded border border-white/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">folder_zip</span>
</div>
<div className="flex-1 truncate">
<p className="font-label-md text-on-surface font-semibold truncate">Cyberpunk_Stems.zip</p>
<p className="font-label-sm text-on-surface-variant truncate mt-0.5">Local Drive • 1.2 GB</p>
</div>
</div>
<div className="flex items-center gap-4 hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
<div className="w-12 h-12 bg-surface-bright rounded border border-white/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">audio_file</span>
</div>
<div className="flex-1 truncate">
<p className="font-label-md text-on-surface font-semibold truncate">Atmosphere_04.flac</p>
<p className="font-label-sm text-on-surface-variant truncate mt-0.5">Downloads • 45 MB</p>
</div>
</div>
</div>
</div>
</div>
</section>

    </>
  );
};
