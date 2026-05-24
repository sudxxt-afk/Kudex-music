
{/*  Floating Graph Canvas  */}
<canvas className="fixed inset-0 z-[-1] pointer-events-none w-full h-full" id="bg-canvas"></canvas>
{/*  1. Fixed Sidebar (Left) - Web Only  */}
<nav aria-label="Sidebar Navigation" className="hidden md:flex fixed left-0 top-0 h-full w-sidebar-width flex-col py-margin-page z-40 bg-surface-container dark:bg-surface-container border-r border-white/5">
<div className="px-gutter mb-section-gap flex-col">
<div className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
<img alt="Kudex Logo" className="h-10 w-10 object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uin_iXZTnSWGq3sYdyHBfo045EN961zjT-77UvFA8pGxfgkKgdLL57Rr2LLWBXDmOhu9OacJRlBgQ3RjA1egZBOUPGNHZknwyAf4ZrLDiiuFaYlUMTFUm2EXdlp1n27YXouNv_C4lmYNLHwS-0bLK_7jNoH1lNPxq7xCQ8CoXtrmgxqEQo3ucf0WMmlE-PtZYpvtHe0fQtKvZPZ8XX76imrbLesUUFK2xa8adCmEfIz6p5mfTrpZORfPXc" />
<h1 className="font-display-lg text-[24px] font-black text-primary">Kudex</h1>
</div>
</div>
<ul className="flex flex-col gap-2 flex-grow px-4 font-headline-sm text-headline-sm">
<li className="">
<a aria-current="page" className="flex items-center gap-4 py-3 px-4 text-primary font-bold border-l-4 border-primary bg-white/5 transition-colors rounded-r-lg" href="#">
<span className="material-symbols-outlined" >search</span>
<span className="">Search</span>
</a>
</li>
<li className="">
<a className="flex items-center gap-4 py-3 pl-5 pr-4 text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors rounded-lg" href="#">
<span className="material-symbols-outlined">library_music</span>
<span className="">Media Library</span>
</a>
</li>
<li className="">
<a className="flex items-center gap-4 py-3 pl-5 pr-4 text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors rounded-lg" href="#">
<span className="material-symbols-outlined">playlist_play</span>
<span className="">Playlists</span>
</a>
</li>
<li className="">
<a className="flex items-center gap-4 py-3 pl-5 pr-4 text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors rounded-lg" href="#">
<span className="material-symbols-outlined">favorite</span>
<span className="">Liked Songs</span>
</a>
</li>
</ul>
<div className="px-gutter mt-auto flex flex-col gap-4">
<button className="w-full bg-primary-container text-on-primary-container font-headline-sm text-headline-sm py-4 rounded-lg hover:opacity-90 transition-opacity">
                New Playlist
            </button>
<a className="flex items-center gap-4 py-3 pl-5 pr-4 text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="">Settings</span>
</a>
</div>
</nav>
{/*  Top Navigation (Web)  */}
<header className="hidden md:flex fixed top-0 right-0 w-[calc(100%-280px)] h-16 items-center justify-between px-gutter z-30 bg-surface/80 backdrop-blur-xl bg-transparent flat no shadows">
<div className="flex-grow"></div>
<div className="flex items-center gap-4 text-primary dark:text-primary">
<button className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</header>
{/*  Top Navigation (Mobile)  */}
<header className="md:hidden fixed top-0 left-0 w-full h-16 flex items-center justify-between px-gutter z-30 bg-surface/80 backdrop-blur-xl border-b border-white/5">
<h1 className="font-display-lg-mobile text-display-lg-mobile font-black text-primary hover:opacity-80 transition-opacity cursor-pointer">Kudex</h1>
<div className="flex items-center gap-4 text-primary dark:text-primary">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</header>
{/*  2. Main Content (Center)  */}
<main className="md:ml-sidebar-width pt-20 md:pt-24 pb-32 px-gutter h-screen overflow-y-auto bg-transparent">
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
<button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-headline-sm text-headline-sm hover:opacity-90 transition-opacity flex items-center gap-2" onclick="document.getElementById('import-modal').classList.remove('hidden')">
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
</main>
{/*  3. Player Bar (Bottom)  */}
{/*  Desktop Player  */}
<footer className="hidden md:flex fixed bottom-0 left-0 w-full h-player-height z-50 items-center justify-between px-gutter bg-surface-container-high/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-4px_20px_rgba(157,78,221,0.15)]">
{/*  Now Playing  */}
<div className="flex items-center gap-4 w-1/3">
<div className="w-14 h-14 bg-surface rounded overflow-hidden">
<img alt="Currently playing cover" className="w-full h-full object-cover" data-alt="A studio microphone illuminated by a single spotlight against an otherwise pitch-black background. The metallic grille reflects a faint purple glow, establishing a moody, focused podcast or vocal recording aesthetic for a modern audio platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC3rniP0YjtyLr1MaNK75BlkI2K9ppqlw-pq_jZAYrWbkXMOvXuwQzYk9op4E8GkfQKqpOm3UD03EPuz-wvbxsAJW2ooE2ALQJn9bqCNT9broenNBtgYfv3GMGwhazvz_n7VVG67JfZU3K7oLPG0hvw8QR12yQ6L0zw3cVk9NovdmXaIaS0WhTcALWGk5ODd5j-g8oqq1mkp3fExFFOkRc5gmi08Pi1ZN6Wf98aVLzUJrKkWj10hxVRD_IKjdCanPdDEZjfR9NFxQ" />
</div>
<div>
<h4 className="font-body-md text-body-md text-on-surface font-bold">Late Night Jazz</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Miles Ensemble</p>
</div>
<button className="ml-4 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
{/*  Controls  */}
<div className="flex flex-col items-center w-1/3 gap-2">
<div className="flex items-center gap-6">
<button className="text-on-surface-variant hover:text-on-surface transition-colors"><span className="material-symbols-outlined">shuffle</span></button>
<button className="text-on-surface-variant hover:text-on-surface transition-colors"><span className="material-symbols-outlined" >skip_previous</span></button>
<button className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:scale-110 transition-transform">
<span className="material-symbols-outlined" >play_arrow</span>
</button>
<button className="text-on-surface-variant hover:text-on-surface transition-colors"><span className="material-symbols-outlined" >skip_next</span></button>
<button className="text-on-surface-variant hover:text-on-surface transition-colors"><span className="material-symbols-outlined">repeat</span></button>
</div>
{/*  Progress Bar  */}
<div className="w-full max-w-md flex items-center gap-2 group cursor-pointer">
<span className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">1:24</span>
<div className="h-1 flex-grow bg-surface-variant rounded-full relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">4:12</span>
</div>
</div>
{/*  Tools  */}
<div className="flex items-center justify-end w-1/3 gap-4">
<button className="text-on-surface-variant hover:text-on-surface transition-colors"><span className="material-symbols-outlined">mic</span></button>
<button className="text-on-surface-variant hover:text-on-surface transition-colors"><span className="material-symbols-outlined">queue_music</span></button>
<div className="flex items-center gap-2 w-24 group cursor-pointer">
<button className="text-on-surface-variant hover:text-on-surface transition-colors"><span className="material-symbols-outlined">volume_up</span></button>
<div className="h-1 flex-grow bg-surface-variant rounded-full relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-2/3 bg-on-surface-variant group-hover:bg-primary transition-colors rounded-full"></div>
</div>
</div>
</div>
</footer>
{/*  Mobile Bottom Nav Bar  */}
<nav aria-label="Bottom Navigation" className="md:hidden fixed bottom-0 left-0 w-full h-16 z-50 flex items-center justify-around px-gutter bg-surface-container-high/95 backdrop-blur-2xl border-t border-white/10">
<a className="flex flex-col items-center gap-1 text-primary font-bold hover:scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" >search</span>
<span className="font-label-sm text-label-sm text-[10px]">Search</span>
</a>
<a className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">library_music</span>
<span className="font-label-sm text-label-sm text-[10px]">Library</span>
</a>
<a className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-sm text-label-sm text-[10px]">Settings</span>
</a>
</nav>
{/*  Import Modal Overlay (Hidden by default, shown for mockup purposes)  */}
<div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm hidden flex items-center justify-center p-4" id="import-modal">
<div className="bg-surface border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
<button className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors" onclick="document.getElementById('import-modal').classList.add('hidden')">
<span className="material-symbols-outlined">close</span>
</button>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Importing Playlist</h3>
<p className="font-label-md text-label-md text-on-surface-variant mb-8">Chill Vibes 2023</p>
<div className="space-y-6">
{/*  Step 1  */}
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-secondary-fixed-dim/20 text-secondary-fixed-dim flex items-center justify-center">
<span className="material-symbols-outlined text-sm">check</span>
</div>
<div className="flex-grow">
<p className="font-label-md text-label-md text-on-surface">Analysis</p>
</div>
</div>
{/*  Step 2 (Active)  */}
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full border-2 border-primary text-primary flex items-center justify-center animate-pulse">
<span className="material-symbols-outlined text-sm animate-spin">sync</span>
</div>
<div className="flex-grow">
<p className="font-label-md text-label-md text-primary">Finding Matches...</p>
<div className="mt-2 h-1 w-full bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-primary w-2/3 rounded-full"></div>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">64%</span>
</div>
{/*  Step 3  */}
<div className="flex items-center gap-4 opacity-50">
<div className="w-8 h-8 rounded-full border-2 border-surface-variant text-on-surface-variant flex items-center justify-center">
<span className="font-label-sm text-label-sm">3</span>
</div>
<div className="flex-grow">
<p className="font-label-md text-label-md text-on-surface-variant">Adding to Library</p>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5 text-center">
<button className="font-label-md text-label-md text-on-surface-variant hover:text-error transition-colors" onclick="document.getElementById('import-modal').classList.add('hidden')">Cancel Import</button>
</div>
</div>
</div>

