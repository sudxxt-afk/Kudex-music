
<canvas className="fixed inset-0 w-full h-full z-0 pointer-events-none" height="1024" id="network-bg" width="1280"></canvas>
<div className="flex h-screen w-full relative z-10">
{/*  SideNavBar (Shared Component)  */}
<nav className="hidden md:flex flex-col border-r border-white/5 bg-surface-container/80 backdrop-blur-xl dark:bg-surface-container/80 docked left-0 h-full w-[280px] fixed left-0 top-0 h-full w-sidebar-width flex flex-col py-margin-page z-40">
{/*  Header / Brand  */}
<div className="px-gutter mb-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-md overflow-hidden shrink-0">
<img alt="Kudex Logo" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uin_iXZTnSWGq3sYdyHBfo045EN961zjT-77UvFA8pGxfgkKgdLL57Rr2LLWBXDmOhu9OacJRlBgQ3RjA1egZBOUPGNHZknwyAf4ZrLDiiuFaYlUMTFUm2EXdlp1n27YXouNv_C4lmYNLHwS-0bLK_7jNoH1lNPxq7xCQ8CoXtrmgxqEQo3ucf0WMmlE-PtZYpvtHe0fQtKvZPZ8XX76imrbLesUUFK2xa8adCmEfIz6p5mfTrpZORfPXc" />
</div>
<div className="flex flex-col justify-center"><h1 className="font-headline-sm text-headline-sm font-black text-primary dark:text-primary leading-none hover:text-primary-fixed">Kudex</h1>
</div>
</div>
{/*  Navigation Tabs  */}
<div className="flex-1 px-4 space-y-1">
<a className="flex items-center gap-4 py-3 rounded-DEFAULT text-on-surface-variant hover:text-on-surface pl-5 hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">search</span>
<span className="font-label-md text-label-md">Search</span>
</a>
{/*  Active Tab  */}
<a className="flex items-center gap-4 py-3 rounded-DEFAULT bg-white/5 text-primary dark:text-primary font-bold border-l-4 border-primary pl-4 scale-95 transition-transform hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" >library_music</span>
<span className="font-label-md text-label-md">Media Library</span>
</a>
<a className="flex items-center gap-4 py-3 rounded-DEFAULT text-on-surface-variant hover:text-on-surface pl-5 hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">playlist_play</span>
<span className="font-label-md text-label-md">Playlists</span>
</a>
<a className="flex items-center gap-4 py-3 rounded-DEFAULT text-on-surface-variant hover:text-on-surface pl-5 hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">favorite</span>
<span className="font-label-md text-label-md">Liked Songs</span>
</a>
</div>
{/*  CTA & Footer Tab  */}
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
{/*  TopNavBar (Shared Component)  */}
<header className="bg-surface/80 backdrop-blur-xl docked top-0 full-width bg-transparent fixed top-0 right-0 w-[calc(100%-280px)] h-16 flex items-center justify-between px-gutter z-30">
{/*  Search Bar on left  */}
<div className="flex-1 max-w-md hidden md:block">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-secondary-fixed transition-colors">search</span>
<input className="w-full bg-surface-container-high border border-outline-variant rounded-full py-2 pl-10 pr-4 text-on-surface font-label-md text-label-md focus:outline-none focus:border-secondary-fixed focus:ring-1 focus:ring-secondary-fixed transition-all placeholder:text-on-surface-variant placeholder:font-label-sm" placeholder="Search Kudex..." type="text" />
</div>
</div>
{/*  Mobile Brand (Hidden on Desktop)  */}
<div className="md:hidden flex items-center gap-2"><img alt="Kudex Logo" className="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uin_iXZTnSWGq3sYdyHBfo045EN961zjT-77UvFA8pGxfgkKgdLL57Rr2LLWBXDmOhu9OacJRlBgQ3RjA1egZBOUPGNHZknwyAf4ZrLDiiuFaYlUMTFUm2EXdlp1n27YXouNv_C4lmYNLHwS-0bLK_7jNoH1lNPxq7xCQ8CoXtrmgxqEQo3ucf0WMmlE-PtZYpvtHe0fQtKvZPZ8XX76imrbLesUUFK2xa8adCmEfIz6p5mfTrpZORfPXc" />
<h2 className="font-display-lg-mobile text-display-lg-mobile font-black text-primary tracking-tight">Kudex</h2>
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
<div className="flex-1 overflow-y-auto pt-16 pb-[120px] scroll-smooth px-6 md:px-12 w-full max-w-7xl mx-auto" id="main-scroll">
{/*  Hero Section  */}
<section className="mb-section-gap pt-8">
<h2 className="font-display-lg text-display-lg font-black text-on-surface mb-8 tracking-tight">Good evening!</h2>
{/*  Recently Played Tracks Grid  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{/*  Track Card 1  */}
<div className="flex items-center bg-surface-container/40 hover:bg-surface-container border border-white/5 rounded-xl overflow-hidden transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-[0_4px_25px_rgba(224,182,255,0.08)]">
<div className="w-20 h-20 relative shrink-0">
<img alt="Album Art" className="w-full h-full object-cover" data-alt="A moody, high-contrast digital rendering of neon pink and purple synthwave grids receding into a dark, abyssal horizon. The lighting is dramatic, typical of an electronic music album cover. The aesthetic is extremely modern and sleek." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt4Pa4Y-StcCfk_hr44XCBTB1YGGniPGlF-giOzCJBF0ND6JPbI_EnmftRvtvD6SLjGj273HTUdZRwnBn6EfIG-xTHDnlyJrguSdac_FUblsftNwI-8l3fuKKBZ07LOk7RGn7KXv3nh4fLZcteJIYhNyUIFAkv40vWfgweoCWJj_zpHwrbDDiyZUxIY8eFNvmzgWvgo4W0sgxL4WVN6l6BzjMow2mHV1z1IUhpTB_cc1IpPOP7wU8DxSFhVkHTl2W2cGRqXrTTrJI" />
<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
<span className="material-symbols-outlined text-white text-[32px] drop-shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300" >play_circle</span>
</div>
</div>
<div className="p-4 flex-1 truncate">
<h3 className="font-headline-sm text-[16px] font-bold text-on-surface truncate group-hover:text-primary transition-colors">Neon Genesis</h3>
<p className="font-label-md text-label-md text-on-surface-variant truncate">Kavinsky</p>
</div>
</div>
{/*  Track Card 2  */}
<div className="flex items-center bg-surface-container/40 hover:bg-surface-container border border-white/5 rounded-xl overflow-hidden transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-[0_4px_25px_rgba(224,182,255,0.08)]">
<div className="w-20 h-20 relative shrink-0">
<img alt="Album Art" className="w-full h-full object-cover" data-alt="A macro shot of a DJ mixing console in a dark club environment. The buttons and sliders are illuminated with a faint, hacking green glow against a pitch-black surface. The mood is intense, focused, and deeply technical." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4nmOfdYEUypsbkbZvDoHwl0ZER7XkhzZTz_BBzn1n9oZIzO4HhkiZFsn55AMwBz77XrXv9js3UEpvmnsDWNE1uDKvVBEDorNntVF0nhoG5e5WfZD8cbDwHksICXlnOYqAHMH3xLw6NeVdMjW9LbZml9owxpa08S1onR49q-nUhK7HPHDKIeWK8C0ZFyQ9PKIqzFzG8Xm215mFubxlziOKygnuDkzreMSVpfncRudmjooSoArVq7BS_0FG5NB3qYzWnsbKWQqyJng" />
<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
<span className="material-symbols-outlined text-white text-[32px] drop-shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300" >play_circle</span>
</div>
</div>
<div className="p-4 flex-1 truncate">
<h3 className="font-headline-sm text-[16px] font-bold text-on-surface truncate group-hover:text-primary transition-colors">Deep Focus</h3>
<p className="font-label-md text-label-md text-on-surface-variant truncate">Curated Playlist</p>
</div>
</div>
{/*  Track Card 3  */}
<div className="flex items-center bg-surface-container/40 hover:bg-surface-container border border-white/5 rounded-xl overflow-hidden transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-[0_4px_25px_rgba(224,182,255,0.08)]">
<div className="w-20 h-20 relative shrink-0">
<img alt="Album Art" className="w-full h-full object-cover" data-alt="An abstract, long-exposure photograph of city traffic at night viewed from above. The streaks of light form a dynamic, flowing river of gold, red, and white against the deep black of the urban landscape. It evokes a sense of relentless motion." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgJujcUHAO60CfnTQG7k4YoJroHuBUVk_qVkMQ5d1DXjzSjgsczL9ET6TIABzMwd7Wn6By4uWkcMhY2ARn_oTRMOh0AuE4SozRvTv5xTGNzZB7uB-F-FinF5ybnrg7tMBURQAS95N1et0hnI8IaIWYpoQPvnQ-K-LqhfG2TOqGYDQJqDn74rp8TSD5BBCRmIdJnHz30RWOJvM4mbRbMWMmiP-zfr43iiMOlJCdsGQb6J7_nNak7fRAgXhPC4D3YTohp0bm9vhefn4" />
<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
<span className="material-symbols-outlined text-white text-[32px] drop-shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300" >play_circle</span>
</div>
</div>
<div className="p-4 flex-1 truncate">
<h3 className="font-headline-sm text-[16px] font-bold text-on-surface truncate group-hover:text-primary transition-colors">Night Drive Vol. 4</h3>
<p className="font-label-md text-label-md text-on-surface-variant truncate">Various Artists</p>
</div>
</div>
</div>
</section>
{/*  Bento Grid Section  */}
<section>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
{/*  Your Mix (Hero Bento Item)  */}
<div className="col-span-1 md:col-span-8 rounded-2xl relative overflow-hidden group cursor-pointer border border-white/5 hover:border-primary/40 transition-all duration-500 shadow-xl hover:shadow-[0_8px_40px_rgba(224,182,255,0.15)]">
<img className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity group-hover:scale-105 duration-1000 ease-out" data-alt="A mesmerizing, fluid abstract background resembling swirling liquid metal in deep purples and blues. A subtle glow emanates from the center, creating depth. The composition is sleek, dark, and highly polished, perfect for a modern media interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJyb2VcPOonAng-eNg21ps09K4MEExXczijDrwhaQJZun6U6cOyqfytMDVxcQdRdBPxowkgcSXJRJU669FBvyU0LNRTqM0muYItuOLjWJR5F2WO-iZ-S2HcuivJjCuZQy-5M21HFp5Sxl9d76_aixiOWjEyXNKu9zIEyWWtNeZr4NC3grqTOAUK80lD80XDpJprapSW-IwOFilE2u72h_2eSlw8zJVTWTpttrxNGoaZneAPKDsK1AQZVfd3qi9O2OvqD84xqKOG1o" />
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
<div className="col-span-1 md:col-span-4 rounded-2xl relative overflow-hidden group cursor-pointer border border-white/5 hover:border-secondary/40 transition-all duration-300 bg-surface-container-high shadow-xl hover:shadow-[0_8px_30px_rgba(236,255,227,0.05)]">
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
<div className="col-span-1 md:col-span-12 lg:col-span-4 rounded-2xl bg-surface-container/30 backdrop-blur-xl border border-white/5 p-6 group hover:bg-surface-container/50 transition-all cursor-pointer flex flex-col gap-4">
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
</div>
</main>
{/*  BottomNavBar (Player Bar - Shared Component)  */}
<div className="bg-surface-container-high/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-4px_20px_rgba(157,78,221,0.15)] docked bottom-0 full-width h-player-height fixed bottom-0 left-0 w-full z-50 flex items-center justify-between px-gutter">
{/*  Now Playing Info  */}
<div className="flex items-center gap-4 w-[30%] min-w-[200px]">
<img alt="Now Playing" className="w-14 h-14 rounded-md shadow-md" data-alt="A moody, high-contrast digital rendering of neon pink and purple synthwave grids receding into a dark, abyssal horizon." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC6gy5eabw1fRSlH2dk5MX-jnPPioAUmlI9n77ebJ3vLsbsIitUo30zIDCvJwbHX1QbGhxDBdATAtvX0MAeKGYAzKX1UMViDMDOoviSUbq12P83k1d7uYmoq0AZ--QeLtgDQWPzx5HXxhlUxpN-PJzFtugaP-dpzpmyqPYL4ZYhiCEYn4PANt3MKZ6vp0iYiVqRH3PMqV31aiMiQhJmQoApdfEFTXKn7wm7xw9sDzcGgAkvHpTBR0XbB0R3Aq7GlZ7YdgHoABDKQw" />
<div className="flex flex-col overflow-hidden">
<span className="font-body-md text-body-md font-semibold text-on-surface truncate">Nightcall</span>
<span className="font-label-md text-label-md text-on-surface-variant truncate hover:underline cursor-pointer">Kavinsky</span>
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
<span className="font-label-sm text-label-sm text-on-surface-variant">1:24</span>
<div className="h-1 flex-1 bg-surface-bright rounded-full relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary w-[35%] group-hover:bg-primary transition-colors"></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">4:18</span>
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
</div>
{/*  Script for active state logic fallback/micro-interactions  */}


