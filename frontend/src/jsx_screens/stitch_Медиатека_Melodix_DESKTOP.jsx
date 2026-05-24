
<canvas className="fixed inset-0 w-full h-full z-0 pointer-events-none" id="network-bg" width="1280" height="1024"></canvas>
{/*  App Container  */}
<div className="flex h-screen w-full relative z-10">
{/*  1. SideNavBar  */}
<nav className="hidden md:flex flex-col border-r border-white/5 bg-surface-container/80 backdrop-blur-xl dark:bg-surface-container/80 docked left-0 h-full w-[280px] fixed left-0 top-0 h-full w-sidebar-width flex flex-col py-margin-page z-40">
{/*  Brand  */}
<div className="px-gutter mb-8 flex items-center gap-3">
<div className="w-10 h-10 shrink-0">
<img alt="Kudex Logo" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uin_iXZTnSWGq3sYdyHBfo045EN961zjT-77UvFA8pGxfgkKgdLL57Rr2LLWBXDmOhu9OacJRlBgQ3RjA1egZBOUPGNHZknwyAf4ZrLDiiuFaYlUMTFUm2EXdlp1n27YXouNv_C4lmYNLHwS-0bLK_7jNoH1lNPxq7xCQ8CoXtrmgxqEQo3ucf0WMmlE-PtZYpvtHe0fQtKvZPZ8XX76imrbLesUUFK2xa8adCmEfIz6p5mfTrpZORfPXc" />
</div>
<div className="flex flex-col justify-center"><h1 className="font-headline-sm text-headline-sm font-black text-primary dark:text-primary leading-none">Kudex</h1>
</div>
</div>
{/*  Tabs  */}
<div className="flex-1 px-4 space-y-1">
{/*  Search  */}
<a className="flex items-center gap-4 py-3 rounded-DEFAULT text-on-surface-variant hover:text-on-surface pl-5 hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">search</span>
<span className="font-label-md text-label-md">Search</span>
</a>
{/*  Media Library (ACTIVE)  */}
<a className="flex items-center gap-4 py-3 rounded-DEFAULT bg-white/5 text-primary dark:text-primary font-bold border-l-4 border-primary pl-4 scale-95 transition-transform hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" >library_music</span>
<span className="font-label-md text-label-md">Media Library</span>
</a>
{/*  Playlists  */}
<a className="flex items-center gap-4 py-3 rounded-DEFAULT text-on-surface-variant hover:text-on-surface pl-5 hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">playlist_play</span>
<span className="font-label-md text-label-md">Playlists</span>
</a>
{/*  Liked Songs  */}
<a className="flex items-center gap-4 py-3 rounded-DEFAULT text-on-surface-variant hover:text-on-surface pl-5 hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">favorite</span>
<span className="font-label-md text-label-md">Liked Songs</span>
</a>
</div>
{/*  CTA & Footer  */}
<div className="px-4 mt-auto space-y-4">
<button className="w-full py-3 px-4 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-primary transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">add</span>
                    New Playlist
                </button>
<div className="pt-4 border-t border-white/5">
<a className="flex items-center gap-4 py-3 rounded-DEFAULT text-on-surface-variant hover:text-on-surface pl-5 hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</div>
</div>
</nav>
{/*  Main Content Area  */}
<main className="flex-1 flex flex-col relative md:ml-sidebar-width w-full bg-surface/80 backdrop-blur-xl z-10">
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
</main>
{/*  3. BottomNavBar (Player Bar)  */}
<div className="bg-surface-container-high/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-4px_20px_rgba(157,78,221,0.15)] docked bottom-0 full-width h-player-height fixed bottom-0 left-0 w-full z-50 flex items-center justify-between px-gutter">
{/*  Now Playing Info  */}
<div className="flex items-center gap-4 w-[30%] min-w-[200px]">
<img alt="Now Playing" className="w-14 h-14 rounded-md shadow-md" data-alt="A macro shot of a sleek, dark metallic surface with a subtle glowing edge reflection of tokyo purple light. The texture is smooth and industrial, representing a deep bass, high-tech audio environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiMy_utWUdraNitSOiPxBT94ZPw2QfwE-vpk0K-yf3dJnxc5xFpx8a4uiK0B_pBsxZXunOf1Ji9gqnGLAKkkOwt-AstE-rD3CJx1WXvJiNSkMBnR5fwxnLoHeoeJ5Xhso4Q-g6T9bK62G1-zyusBfcr5GPm4QZ9ZoaQvZr2-pkyQPbwTzupWBg9mpQf_iCLP94wyEX0YVIZoNFFHKDnJ4Z05jQFBVruR0mdD5sktfxAORTcuVkCiJUKwWl2ZAuo6HEADdYDJ1nBjs" />
<div className="flex flex-col overflow-hidden">
<span className="font-body-md text-body-md font-semibold text-on-surface truncate">Midnight Overdrive</span>
<span className="font-label-md text-label-md text-on-surface-variant truncate hover:underline cursor-pointer">The Midnight</span>
</div>
<button className="ml-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">favorite</span>
</button>
</div>
{/*  Controls  */}
<div className="flex flex-col items-center justify-center w-[40%] max-w-[500px]">
<div className="flex items-center gap-6 mb-1">
<button className="text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[20px]">shuffle</span>
</button>
<button className="text-on-surface hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[28px]" >skip_previous</span>
</button>
<button className="w-10 h-10 rounded-full bg-on-surface flex items-center justify-center hover:scale-110 transition-transform hover:glow-effect group">
<span className="material-symbols-outlined text-surface text-[28px] group-hover:text-primary transition-colors" >pause</span>
</button>
<button className="text-on-surface hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[28px]" >skip_next</span>
</button>
<button className="text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[20px]">repeat</span>
</button>
</div>
{/*  Progress Bar  */}
<div className="flex items-center w-full gap-2 group cursor-pointer">
<span className="font-label-sm text-label-sm text-on-surface-variant">2:14</span>
<div className="h-1 flex-1 bg-surface-bright rounded-full relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary w-[40%] group-hover:bg-primary transition-colors"></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">5:34</span>
</div>
</div>
{/*  Tools  */}
<div className="flex items-center justify-end gap-4 w-[30%] min-w-[200px]">
<button className="text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[20px]">mic</span>
</button>
<button className="text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[20px]">queue_music</span>
</button>
<div className="flex items-center gap-2 w-24 group cursor-pointer">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">volume_up</span>
<div className="h-1 flex-1 bg-surface-bright rounded-full relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-primary w-[70%]"></div>
</div>
</div>
</div>
</div>
{/*  Custom Context Menu (Hidden by default)  */}
<div className="hidden absolute z-[100] w-48 bg-surface-container-high/90 backdrop-blur-2xl rounded-lg border border-white/10 shadow-[0_4px_20px_rgba(157,78,221,0.2)] py-1 font-label-md text-label-md" id="context-menu">
<button className="w-full text-left px-4 py-2 text-on-surface hover:bg-white/10 hover:text-primary transition-colors flex items-center gap-3">
<span className="material-symbols-outlined text-[18px]">playlist_add</span>
                Add to Queue
            </button>
<button className="w-full text-left px-4 py-2 text-on-surface hover:bg-white/10 hover:text-primary transition-colors flex items-center gap-3">
<span className="material-symbols-outlined text-[18px]">person</span>
                View Artist
            </button>
<button className="w-full text-left px-4 py-2 text-on-surface hover:bg-white/10 hover:text-primary transition-colors flex items-center gap-3 border-b border-white/5 pb-3 mb-1">
<span className="material-symbols-outlined text-[18px]">share</span>
                Share
            </button>
<button className="w-full text-left px-4 py-2 text-error hover:bg-error-container/20 transition-colors flex items-center gap-3 mt-1">
<span className="material-symbols-outlined text-[18px]">delete</span>
                Delete
            </button>
</div>
</div>
{/*  JS for Context Menu Interaction  */}






