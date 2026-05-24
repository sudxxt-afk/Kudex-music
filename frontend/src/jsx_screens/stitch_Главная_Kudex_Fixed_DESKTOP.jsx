
{/*  Floating Graph Background  */}
<canvas className="fixed inset-0 w-full h-full z-0 pointer-events-none" id="bg-canvas"></canvas>

{/*  SideNavBar (Shared Component)  */}
<nav className="fixed left-0 top-0 h-full w-sidebar-width bg-surface-container/90 backdrop-blur-xl flex flex-col py-margin-page z-40 border-r border-white/5 hidden md:flex">
{/*  Header / Brand  */}
<div className="px-6 mb-8 flex flex-col gap-1"><img alt="Kudex Logo" className="w-10 h-10 mb-2 object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uin_iXZTnSWGq3sYdyHBfo045EN961zjT-77UvFA8pGxfgkKgdLL57Rr2LLWBXDmOhu9OacJRlBgQ3RjA1egZBOUPGNHZknwyAf4ZrLDiiuFaYlUMTFUm2EXdlp1n27YXouNv_C4lmYNLHwS-0bLK_7jNoH1lNPxq7xCQ8CoXtrmgxqEQo3ucf0WMmlE-PtZYpvtHe0fQtKvZPZ8XX76imrbLesUUFK2xa8adCmEfIz6p5mfTrpZORfPXc" />
<h1 className="font-display-lg text-display-lg font-black text-primary tracking-tight transition-all duration-300 hover:opacity-80">Kudex</h1>
</div>
{/*  CTA  */}
<div className="px-6 mb-8">
<button className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 rounded-full hover:scale-95 transition-transform duration-200 flex items-center justify-center gap-2 font-bold shadow-[0_0_15px_rgba(224,182,255,0.2)] hover:shadow-[0_0_25px_rgba(224,182,255,0.4)]">
<span className="material-symbols-outlined" >add</span>
                New Playlist
            </button>
</div>
{/*  Navigation Tabs  */}
<div className="flex-1 flex flex-col gap-2">
<a className="flex items-center gap-4 py-3 font-label-md text-label-md text-on-surface-variant hover:text-on-surface pl-5 hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">search</span>
                Search
            </a>
{/*  Active Tab  */}
<a className="flex items-center gap-4 py-3 font-label-md text-label-md text-primary font-bold border-l-4 border-primary pl-4 bg-white/5 scale-95 transition-transform shadow-[inset_0_0_20px_rgba(224,182,255,0.05)]" href="#">
<span className="material-symbols-outlined" >library_music</span>
                Media Library
            </a>
<a className="flex items-center gap-4 py-3 font-label-md text-label-md text-on-surface-variant hover:text-on-surface pl-5 hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">playlist_play</span>
                Playlists
            </a>
<a className="flex items-center gap-4 py-3 font-label-md text-label-md text-on-surface-variant hover:text-on-surface pl-5 hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">favorite</span>
                Liked Songs
            </a>
</div>
{/*  Footer Tab  */}
<div className="px-6 mt-auto">
<a className="flex items-center gap-4 py-3 font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors rounded-lg px-4 -ml-4" href="#">
<span className="material-symbols-outlined">settings</span>
                Settings
            </a>
</div>
</nav>
{/*  TopNavBar (Shared Component)  */}
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
{/*  Main Content Area  */}
<main className="flex-1 md:ml-sidebar-width pt-24 pb-[120px] px-6 md:px-12 w-full max-w-7xl mx-auto overflow-y-auto relative z-10">
{/*  Hero Section  */}
<section className="mb-section-gap">
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
</main>
{/*  BottomNavBar (Player Bar - Shared Component)  */}
<nav className="fixed bottom-0 left-0 w-full h-player-height bg-surface-container-high/95 backdrop-blur-2xl z-50 flex items-center justify-between px-gutter shadow-[0_-4px_20px_rgba(157,78,221,0.15)] border-t-0 border-white/5">
{/*  Section 1: Now Playing  */}
<div className="flex items-center gap-4 w-1/4 min-w-[220px]">
<div className="relative w-14 h-14 rounded-md overflow-hidden group cursor-pointer border border-white/10 shadow-md">
<img alt="Now Playing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A moody, high-contrast digital rendering of neon pink and purple synthwave grids receding into a dark, abyssal horizon." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC6gy5eabw1fRSlH2dk5MX-jnPPioAUmlI9n77ebJ3vLsbsIitUo30zIDCvJwbHX1QbGhxDBdATAtvX0MAeKGYAzKX1UMViDMDOoviSUbq12P83k1d7uYmoq0AZ--QeLtgDQWPzx5HXxhlUxpN-PJzFtugaP-dpzpmyqPYL4ZYhiCEYn4PANt3MKZ6vp0iYiVqRH3PMqV31aiMiQhJmQoApdfEFTXKn7wm7xw9sDzcGgAkvHpTBR0XbB0R3Aq7GlZ7YdgHoABDKQw" />
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<span className="material-symbols-outlined text-white">keyboard_arrow_up</span>
</div>
</div>
<div className="flex flex-col truncate">
<a className="font-headline-sm text-[16px] text-primary font-bold hover:underline truncate" href="#">Nightcall</a>
<a className="font-label-md text-label-sm text-on-surface-variant hover:text-on-surface transition-colors truncate mt-0.5" href="#">Kavinsky</a>
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
<button className="w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_15px_rgba(224,182,255,0.4)]">
<span className="material-symbols-outlined text-[24px]" >pause</span>
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
{/*  Script for active state logic fallback/micro-interactions  */}

