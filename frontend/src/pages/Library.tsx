import React from 'react';

export const Library: React.FC = () => {
  return (
    <>
      
{/*  2. TopNavBar  */}
<header className="bg-surface/80 backdrop-blur-xl docked top-0 full-width bg-transparent fixed top-0 right-0 w-[calc(100%-280px)] h-16 flex items-center justify-between px-gutter z-30">
{/*  Search Bar Placeholder  */}
<div className="flex-1 max-w-md">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-secondary-fixed transition-colors">search</span>
<input className="w-full bg-surface-container-high border border-outline-variant rounded-full py-2 pl-10 pr-4 text-on-surface font-label-md text-label-md focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-all placeholder:text-on-surface-variant placeholder:font-label-sm" placeholder="Search library..." type="text" />
</div>
</div>
{/*  Trailing Actions  */}
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">
<span className="material-symbols-outlined text-[24px]">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">
<span className="material-symbols-outlined text-[24px]">account_circle</span>
</button>
</div>
</header>
{/*  Scrollable Canvas  */}
<div className="flex-1 overflow-y-auto pt-16 pb-[120px] scroll-smooth" id="main-scroll">
{/*  Hero Section (Library Header)  */}
<div className="relative w-full h-[300px] flex items-end p-margin-page bg-gradient-to-t from-surface/50 to-surface-container-high/50 border-b border-white/5">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/40 via-surface to-surface pointer-events-none"></div>
<div className="relative z-10 flex items-end gap-6 w-full">
<div className="w-[200px] h-[200px] rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden shrink-0 group">
<img alt="Library Cover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A moody, high-contrast abstract digital art piece featuring swirling nebulae of deep tokyo purple and hacker green against an abyssal black background. The lighting is dramatic, emitting a soft glassmorphic glow. The aesthetic is modern, tech-forward, and atmospheric, suitable for a premium music library cover." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvjAW1uIvG3WGeCeVRBEHP4jqBJM6isEvHMLVquZ4_lqy5Gg0_i2RE7ny8IELJyo_DLZbZnwCSX1GJq1bSQBERqTAw_aeI6N9PL_ZDZIXi--tl7rQRNW6CvEIh2SGtVoEuBtPWkDR4SEdB-jqMCdd8-oPf636OaLxC2s3HTHoLDF36megWfGG7YyETeZKqbCTTRma1hgxcEiAIAsx-T-M9y0pE_0xGNGjfBUtwawNVd-3--tkni_YYaxJQdCsqB5lWtR72S80Msbw" />
</div>
<div className="flex flex-col gap-2 pb-2">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Public Playlist</span>
<h2 className="font-display-lg text-display-lg font-black text-on-surface">Night Drive Vibes</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Curated for focus and momentum. 124 tracks • 8 hrs 15 mins</p>
</div>
</div>
</div>
{/*  Action Bar  */}
<div className="px-margin-page py-6 flex items-center gap-4">
<button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center hover:scale-105 transition-transform shadow-[0_4px_20px_rgba(224,182,255,0.3)]">
<span className="material-symbols-outlined text-background text-[32px]" >play_arrow</span>
</button>
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all">
<span className="material-symbols-outlined">shuffle</span>
</button>
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
{/*  Track Table  */}
<div className="px-margin-page pb-section-gap w-full">
<div className="grid grid-cols-[48px_minmax(200px,_1fr)_minmax(150px,_200px)_80px_60px] gap-4 py-2 border-b border-white/5 text-on-surface-variant font-label-sm text-label-sm mb-2 px-2 uppercase tracking-wider sticky top-0 bg-surface/95 backdrop-blur z-20">
<div className="text-center">#</div>
<div className="">Title</div>
<div className="">Artist</div>
<div className="text-right">Time</div>
<div className="text-center"><span className="material-symbols-outlined text-[16px]">album</span></div>
</div>
{/*  Track Rows Container (attach context menu listener here)  */}
<div className="flex flex-col" id="track-list">
{/*  Row 1  */}
<div className="track-row group grid grid-cols-[48px_minmax(200px,_1fr)_minmax(150px,_200px)_80px_60px] gap-4 items-center py-3 px-2 rounded-lg hover:bg-white/5 transition-colors cursor-context-menu" data-id="t1">
<div className="text-center text-on-surface-variant font-label-md text-label-md w-6 mx-auto relative">
<span className="track-num">1</span>
<span className="material-symbols-outlined track-play text-primary absolute inset-0 flex items-center justify-center" >play_arrow</span>
</div>
<div className="flex items-center gap-3 truncate">
<img alt="Art" className="w-10 h-10 rounded shadow-sm shrink-0" data-alt="A minimalist abstract geometric pattern with sharp intersecting lines in shades of dark gray and a singular vibrant hacker green stripe. The style is sharp, clean, and highly structured, evoking a modern electronic music vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3lfuSEQJYp0cf50npD2SGvCmitV1qN1XlkEdUgxSFNp_JFRyQdrjqZfXdBizn_zHejJncPAUw0SdZPmg5xvDc2e6_ZTyVfXS-ZIHdpejw-fVYhynpRjdO4JEpSyLhaIulXFSMgYNH5-3qrp92hc6MZxvZRdEGgSpQYrCs4ILoQHnXf__dLuJ1UVyJNZPXDcESYv6bsYgsXEEOqFDPrzEg35Ais0UG5-aA-GFWQsD91SjqFbN-qExk0H_07OtlT_kSsL9P-24RT5w" />
<span className="font-body-md text-body-md text-on-surface truncate">Neon Horizon</span>
</div>
<div className="font-body-md text-body-md text-on-surface-variant truncate hover:underline cursor-pointer">Synthwave City</div>
<div className="font-label-md text-label-md text-on-surface-variant text-right">4:12</div>
<div className="text-center text-on-surface-variant"><span className="material-symbols-outlined text-[18px]">cloud</span></div>
</div>
{/*  Row 2 (Active/Playing)  */}
<div className="track-row group grid grid-cols-[48px_minmax(200px,_1fr)_minmax(150px,_200px)_80px_60px] gap-4 items-center py-3 px-2 rounded-lg bg-white/5 transition-colors cursor-context-menu" data-id="t2">
<div className="text-center text-primary font-label-md text-label-md w-6 mx-auto relative flex justify-center items-center h-full">
<span className="material-symbols-outlined text-primary text-[20px] animate-pulse">graphic_eq</span>
</div>
<div className="flex items-center gap-3 truncate">
<img alt="Art" className="w-10 h-10 rounded shadow-sm shrink-0" data-alt="A macro shot of a sleek, dark metallic surface with a subtle glowing edge reflection of tokyo purple light. The texture is smooth and industrial, representing a deep bass, high-tech audio environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAndjWdLCiFBTuIe8RfNHRqN71E9_9aVr8rMbJ0TPgi8riVd631RTzCUKobek49J9svMzLZijFogQUjTunzUNr32a2zdWd8KuEQQidhN9y5pU-vrR2BKbzVewv2UvPNRnoU3uMuRARyPeFdANvdzVtXAd2Js8mCiEOm9jcEdm3DKGeJnzUFMAQ8IYfCl3KCGUY9BJ5tf0QZSosVYr2i7LAjb-MelApy7IlZguhTwWUMD_H7vVAbzz7lVk5SnlakJgDHAwGj-pLlxi8" />
<span className="font-body-md text-body-md text-primary font-semibold truncate">Midnight Overdrive</span>
</div>
<div className="font-body-md text-body-md text-on-surface-variant truncate hover:underline cursor-pointer">The Midnight</div>
<div className="font-label-md text-label-md text-on-surface-variant text-right">5:34</div>
<div className="text-center text-on-surface-variant"><span className="material-symbols-outlined text-[18px]">local_library</span></div>
</div>
{/*  Row 3  */}
<div className="track-row group grid grid-cols-[48px_minmax(200px,_1fr)_minmax(150px,_200px)_80px_60px] gap-4 items-center py-3 px-2 rounded-lg hover:bg-white/5 transition-colors cursor-context-menu" data-id="t3">
<div className="text-center text-on-surface-variant font-label-md text-label-md w-6 mx-auto relative">
<span className="track-num">3</span>
<span className="material-symbols-outlined track-play text-primary absolute inset-0 flex items-center justify-center" >play_arrow</span>
</div>
<div className="flex items-center gap-3 truncate">
<div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center shrink-0 border border-white/5">
<span className="material-symbols-outlined text-on-surface-variant">music_note</span>
</div>
<span className="font-body-md text-body-md text-on-surface truncate">Digital Rain</span>
</div>
<div className="font-body-md text-body-md text-on-surface-variant truncate hover:underline cursor-pointer">Lorn</div>
<div className="font-label-md text-label-md text-on-surface-variant text-right">3:45</div>
<div className="text-center text-on-surface-variant"><span className="material-symbols-outlined text-[18px]">cloud</span></div>
</div>
</div>
</div>
</div>

    </>
  );
};
