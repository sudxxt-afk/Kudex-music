import React, { useEffect } from 'react';
import { usePomodoroStore } from '../store/usePomodoroStore';

export const Pomodoro: React.FC = () => {
  const { timeLeft, isRunning, mode, toggleTimer, resetTimer, setTime } = usePomodoroStore();

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const totalTime = mode === 'focus' ? 25 * 60 : 15 * 60;
  const progress = Math.min((timeLeft / totalTime) * 942, 942);

  useEffect(() => {
    let interval: number | undefined;
    if (isRunning && timeLeft > 0) {
      interval = window.setInterval(() => {
        usePomodoroStore.setState((state) => ({ timeLeft: state.timeLeft - 1 }));
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      usePomodoroStore.setState({ isRunning: false });
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  return (
    <>
      
<div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-full py-12">
{/*  Timer Section  */}
<div className="relative flex flex-col items-center justify-center mb-section-gap">
<p className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-6">
  {mode === 'focus' ? 'Focus Session' : 'Break Time'}
</p>
{/*  Circular Timer  */}
<div className="relative w-80 h-80 flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full -rotate-90">
<circle className="text-surface-container-highest" cx="160" cy="160" fill="transparent" r="150" stroke="currentColor" strokeWidth="8"></circle>
<circle className="timer-ring transition-all duration-1000" cx="160" cy="160" fill="transparent" id="progress-circle" r="150" stroke="url(#timer-gradient)" stroke-dasharray="942" strokeDashoffset={942 - progress} strokeLinecap="round" strokeWidth="12"></circle>
<defs>
<linearGradient id="timer-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#e0b6ff"></stop>
<stop offset="100%" stopColor="#9d4edd"></stop>
</linearGradient>
</defs>
</svg>
{/*  Glow effect container  */}
<div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(157,78,221,0.15)] -z-10"></div>
<div className="text-center">
<h2 className="font-display-lg text-[84px] font-extrabold tracking-tighter text-on-surface" id="timer-display">{timeString}</h2>
<div className="flex gap-4 justify-center mt-4">
<button onClick={toggleTimer} className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-primary/20" id="toggle-timer">
<span className="material-symbols-outlined text-3xl">{isRunning ? 'pause' : 'play_arrow'}</span>
</button>
<button onClick={resetTimer} className="w-14 h-14 bg-surface-container-high border border-white/5 text-on-surface rounded-full flex items-center justify-center hover:bg-surface-bright active:scale-95 transition-all" id="reset-timer">
<span className="material-symbols-outlined text-2xl" data-icon="replay">replay</span>
</button>
</div>
</div>
</div>
{/*  Presets  */}
<div className="flex gap-3 mt-12">
<button className="px-6 py-2 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-label-md font-label-md" onClick={() => { setTime(25 * 60); usePomodoroStore.setState({ mode: 'focus' }); }}>25 min</button>
<button className="px-6 py-2 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-label-md font-label-md" onClick={() => { setTime(50 * 60); usePomodoroStore.setState({ mode: 'focus' }); }}>50 min</button>
<button className="px-6 py-2 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-label-md font-label-md text-tertiary" onClick={() => { setTime(15 * 60); usePomodoroStore.setState({ mode: 'break' }); }}>15 min Break</button>
</div>
</div>
{/*  Integrated Playlists  */}
<div className="w-full">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Integrated Study Playlists</h3>
<a className="text-primary font-label-md text-label-md hover:underline" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Card 1  */}
<div className="glass-panel p-4 rounded-xl group cursor-pointer hover:shadow-2xl hover:shadow-primary/5 transition-all">
<div className="aspect-square rounded-lg mb-4 overflow-hidden relative">
<img alt="Lo-Fi Study Beats" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A moody, cinematic photograph of a desk with a warm desk lamp lighting an open book and a pair of high-end headphones. The background is a dark room with subtle purple neon light reflecting off a window. The atmosphere is quiet, focused, and scholarly. Minimalist aesthetics with deep blacks and rich indigo tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv7XfKLDh0kFPBhBGj9pgX2YYAFrSRBkCtBeVRM7p8JKj_ymX9r3wtYXSQHtqbfHFf9G2HIVxc0j4dcODxoOSSvL22Itrb0X10679PextiAK3oU3R2_-fxPOhjOeaAMb5Ojw5whfi8YoOQeiFomnBdk_k2jtCWnT6dlHrtE9YxtjwFUBL4fEgPyImc3JZr6YLP3atW_jphLjIPFKQ_VMis0BVOQfiG0GZnTYvBPkxMKmyVvNji2XrEL37nZbKCwaH4ZC7SkwQcOjM" />
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<span className="material-symbols-outlined text-white text-4xl" data-icon="play_circle" >play_circle</span>
</div>
</div>
<h4 className="font-headline-sm text-body-md text-on-surface truncate">Deep Focus Techno</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Instrumental / 120 BPM</p>
<button className="w-full mt-4 flex items-center justify-center gap-2 py-2 rounded-lg border border-primary/20 text-primary font-label-sm text-label-sm hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="sync">sync</span>
                            Sync with Timer
                        </button>
</div>
{/*  Card 2  */}
<div className="glass-panel p-4 rounded-xl group cursor-pointer hover:shadow-2xl hover:shadow-primary/5 transition-all">
<div className="aspect-square rounded-lg mb-4 overflow-hidden relative">
<img alt="Ambient Flows" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A clean, minimalist 3D rendering of floating geometric shapes in a soft purple mist. The style is modern glassmorphism with frosted textures and sharp white highlights. High-key lighting creates a dreamlike, ethereal vibe perfect for ambient music covers. Cohesive color palette of violet, obsidian, and silver." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHp3P32NMYF-vQQLa9F0PbbNomlpT4-n9S7RKTAiBc6Z2E3t2WvucW2bSxQ7qzsS1O9EfDgibjS14IPXmoKATux4oGTFsZKlK2FP5dq2NFDjTvJBEeZOMrmUQudu2E34ZC3rsr58o0J0HpN8mrRshDeJ65kgUTzXVDbOh9VxH6XYKCKC3E_J4SWGz0V9UMZmH9CdrdQTCWgV-SPN9-BB5QtNFtyq8HNd1F5S21U34SXxpxaHemLQruNTBtSIXZUEIQJZHou7z37Ps" />
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<span className="material-symbols-outlined text-white text-4xl" data-icon="play_circle" >play_circle</span>
</div>
</div>
<h4 className="font-headline-sm text-body-md text-on-surface truncate">Ethereal Ambience</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Generative / Soundscapes</p>
<button className="w-full mt-4 flex items-center justify-center gap-2 py-2 rounded-lg border border-primary/20 text-primary font-label-sm text-label-sm hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="sync">sync</span>
                            Sync with Timer
                        </button>
</div>
{/*  Card 3  */}
<div className="glass-panel p-4 rounded-xl group cursor-pointer hover:shadow-2xl hover:shadow-primary/5 transition-all">
<div className="aspect-square rounded-lg mb-4 overflow-hidden relative">
<img alt="Synth Concentration" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Close up shot of a retro-futuristic audio synthesizer with glowing green and purple LED buttons in a dark studio. The knobs and faders are sharp and metallic. Moody, tech-forward aesthetic with shallow depth of field. The lighting is dominated by primary purple and hacker green neon accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCggz3cX3wMMzbKgsLkiQf6UN6cMf1M2z7cSJWPkCG3rfwsdC0yG2xP6hHl_3klgR0t6ry57OKTnKHsvs80-HD_7xvmgY4KgXFg8w7JKRweDVxXkQjZvF8LRh6_X4-71ls4OUK50Sxcy7f74Ol4yRThtqzl2J6E4t4C1_ISCo7kAJVNQWhmEkVKfq2r4R7DoibZHIPpkm15SnvN2MppS4d8eZNy3RWQfRINBU24a9HJ7Mkty6WK6Td6u6c1ecrQZZmk7HltIB22VmI" />
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<span className="material-symbols-outlined text-white text-4xl" data-icon="play_circle" >play_circle</span>
</div>
</div>
<h4 className="font-headline-sm text-body-md text-on-surface truncate">Flow State Tracks</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Electronic / 90 BPM</p>
<button className="w-full mt-4 flex items-center justify-center gap-2 py-2 rounded-lg border border-primary/20 text-primary font-label-sm text-label-sm hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="sync">sync</span>
                            Sync with Timer
                        </button>
</div>
</div>
</div>
</div>

    </>
  );
};
