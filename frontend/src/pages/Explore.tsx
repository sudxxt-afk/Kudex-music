import React from 'react';

export const Explore: React.FC = () => {
  return (
    <>
      
<div className="max-w-5xl mx-auto space-y-section-gap">
{/*  Import Section  */}
<section className="space-y-6">
<h2 className="font-headline-md text-headline-md text-on-surface">Explore &amp; Import</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Seamlessly transition your library from Spotify, Apple Music, or Yandex.</p>
<div className="glass-panel p-6 rounded-xl flex gap-4 items-center">
<div className="relative flex-grow">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">link</span>
<input className="w-full bg-surface-container-highest border border-white/10 rounded-lg py-4 pl-12 pr-4 font-label-md text-label-md text-on-surface placeholder:text-outline input-glow transition-all" placeholder="Paste playlist link here..." type="text" />
</div>
<button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-headline-sm text-headline-sm hover:opacity-90 transition-opacity flex items-center gap-2" onClick={() => document.getElementById('import-modal')?.classList.remove('hidden')}>
<span className="material-symbols-outlined">download</span>
                        Import
                    </button>
</div>
</section>
{/*  Results Tabs  */}
<section className="space-y-8">
<div className="flex gap-8 border-b border-white/10 pb-2">
<button className="font-headline-sm text-headline-sm text-primary border-b-2 border-primary pb-2 -mb-[10px]">Tracks</button>
<button className="font-headline-sm text-headline-sm text-on-surface-variant hover:text-on-surface transition-colors pb-2">Artists</button>
<button className="font-headline-sm text-headline-sm text-on-surface-variant hover:text-on-surface transition-colors pb-2">Albums</button>
</div>
{/*  Bento Grid for Tracks  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/*  Trending Track Card  */}
<div className="glass-panel rounded-xl p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform group cursor-pointer relative overflow-hidden">
<div className="w-16 h-16 bg-surface-container rounded-lg overflow-hidden relative">
<img alt="Abstract electronic music cover" className="w-full h-full object-cover" data-alt="A moody, abstract album cover featuring a glowing neon purple geometric shape suspended over a dark, textured asphalt background. The lighting is cinematic, creating a sleek, futuristic electronic music vibe suitable for a dark-mode music streaming app interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3OMNrL2HQdws7BzwBWd4sgUlZAncu86UzeqVe9LtellwdTu9Au2xR0yODKY9QerFQWuYDiJwxipgcs1chW3Yx93krts_0Iw7qYzlh8B0Nh1OovIk3teQtBBTrSrBXVbeu-k4CK9gjvqrJtxPHlXdNXS4koxGK7uB9v2cVZfG9HqSytZJMlQUrO2JeYKGcqr3XJf_XMrfPPTmRNBu88y5S4RCaV2kuK8QuKPcaadZMKi8Q5uGHi8cr33CsIZzmtnmbKj6G8qf_ePg" />
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-white" >play_arrow</span>
</div>
</div>
<div className="flex-grow">
<h3 className="font-headline-sm text-headline-sm text-on-surface truncate">Neon Nights</h3>
<p className="font-label-md text-label-md text-on-surface-variant">Synthwave City</p>
</div>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
{/*  Another Track  */}
<div className="glass-panel rounded-xl p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform group cursor-pointer relative overflow-hidden">
<div className="w-16 h-16 bg-surface-container rounded-lg overflow-hidden relative">
<img alt="Acoustic guitar" className="w-full h-full object-cover" data-alt="A close-up shot of a vintage acoustic guitar resting on a dark wooden floor. The lighting is warm and directional, casting long shadows and highlighting the texture of the wood, creating an intimate, acoustic indie music atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUvJWjT-w8DWL96yzslbLnUQFpbFzRTWVxvtqgrT_oUUcUPaVRMUTmKCKZKQgk13tLcw-XVmQGRathtZF_EtaQL6bYZJ21Dt8baHiomNJjxd7gWH3ENZ2O97HRK225_tIR6wjgyc7peuOiNjVTJ4zE0aASqMtxaye4ac7XlKsIt8wB-fl_yQ4lCsfSpmQQJosXpsc5T8AnBs8GZIR-MJZSSj_g2fmVejZJhmx8pmqjGqYzzxZn1rSIYdVKD0NY4_FWCEbUp-v43Zs" />
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-white" >play_arrow</span>
</div>
</div>
<div className="flex-grow">
<h3 className="font-headline-sm text-headline-sm text-on-surface truncate">Woodland Echoes</h3>
<p className="font-label-md text-label-md text-on-surface-variant">The Folktales</p>
</div>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
{/*  Live Track (Playing)  */}
<div className="glass-panel rounded-xl p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform group cursor-pointer relative overflow-hidden glow-active border-primary/30">
<div className="w-16 h-16 bg-surface-container rounded-lg overflow-hidden relative">
<img alt="Microphone" className="w-full h-full object-cover" data-alt="A studio microphone illuminated by a single spotlight against an otherwise pitch-black background. The metallic grille reflects a faint purple glow, establishing a moody, focused podcast or vocal recording aesthetic for a modern audio platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWahbHkdaiy53JtWKdfdaZK7vlBRHFzGhDLOSUZNmanson15cg7oiMBv5z4vRo0_ldhiIQl3Igw6gc3qX72TA6EV84rrcP4SxWTInDb2McWSZjWIlUDjjigbR_84G14crNxs7pw4dkIHRX_geTFG1Y63XC3QUkNRp1VdygBAGK9amfoOKrwFWDUgOlxR5NtYJHeUhbwbNgvJ_uzfh7GS7sywnh6novnnexQJc74cBA5WbZVEMM-s5a8hJc6wZOB4i16HWwHRYujk8" />
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100">
<span className="material-symbols-outlined text-primary" >graphic_eq</span>
</div>
</div>
<div className="flex-grow">
<h3 className="font-headline-sm text-headline-sm text-primary truncate">Late Night Jazz</h3>
<p className="font-label-md text-label-md text-primary/70">Miles Ensemble</p>
</div>
<button className="text-primary hover:text-primary-fixed transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
</section>
</div>

    </>
  );
};
