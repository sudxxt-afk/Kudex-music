
{/*  Canvas Background  */}
<canvas className="fixed inset-0 z-0 pointer-events-none opacity-40" id="network-canvas"></canvas>
{/*  SideNavBar (Shared Component)  */}
<nav className="fixed left-0 top-0 h-full w-sidebar-width flex flex-col py-margin-page z-40 bg-surface-container dark:bg-surface-container border-r border-white/5 hidden md:flex">
{/*  Header  */}
<div className="px-6 mb-8 flex items-center gap-4">
<div className="w-10 h-10 rounded-md overflow-hidden bg-primary-container/10 flex items-center justify-center border border-primary/20">
<img alt="Kudex Logo" className="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uin_iXZTnSWGq3sYdyHBfo045EN961zjT-77UvFA8pGxfgkKgdLL57Rr2LLWBXDmOhu9OacJRlBgQ3RjA1egZBOUPGNHZknwyAf4ZrLDiiuFaYlUMTFUm2EXdlp1n27YXouNv_C4lmYNLHwS-0bLK_7jNoH1lNPxq7xCQ8CoXtrmgxqEQo3ucf0WMmlE-PtZYpvtHe0fQtKvZPZ8XX76imrbLesUUFK2xa8adCmEfIz6p5mfTrpZORfPXc" />
</div>
<div className="flex items-center">
<h1 className="font-display-lg-mobile text-display-lg-mobile font-black text-primary leading-none transition-opacity duration-300 hover:opacity-80">Kudex</h1>
</div>
</div>
{/*  Main Tabs  */}
<div className="flex-1 px-2 space-y-1">
<a className="flex items-center gap-4 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors pl-5 font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">search</span>
                Search
            </a>
<a className="flex items-center gap-4 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors pl-5 font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">library_music</span>
                Media Library
            </a>
<a className="flex items-center gap-4 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors pl-5 font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">playlist_play</span>
                Playlists
            </a>
<a className="flex items-center gap-4 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors pl-5 font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">favorite</span>
                Liked Songs
            </a>
</div>
{/*  CTA & Footer Tabs  */}
<div className="px-6 mt-auto space-y-6">
<button className="w-full bg-primary-container text-on-primary-container py-3 rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
<span className="material-symbols-outlined" >add</span>
                New Playlist
            </button>
{/*  Active state applied to Settings as Integrations is a logical sub-section of user settings  */}
<a className="flex items-center gap-4 py-3 rounded-lg text-primary font-bold border-l-4 border-primary pl-4 font-label-md text-label-md bg-white/5 scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" >settings</span>
                Settings
            </a>
</div>
</nav>
{/*  TopNavBar (Shared Component)  */}
<header className="hidden md:flex fixed top-0 right-0 w-[calc(100%-280px)] h-16 items-center justify-between px-gutter z-30 bg-surface/80 backdrop-blur-xl bg-transparent flat no shadows">
<div className="flex-1">
{/*  Search bar location reserved per JSON, but visual not specified. Keeping space.  */}
</div>
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors hover:opacity-80">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors hover:opacity-80">
<span className="material-symbols-outlined" >account_circle</span>
</button>
</div>
</header>
{/*  Main Content Canvas  */}
<main className="md:ml-[280px] pt-24 pb-[120px] h-full overflow-y-auto px-margin-page bg-pattern relative z-10">
<div className="max-w-5xl mx-auto space-y-section-gap">
{/*  Page Header  */}
<header className="space-y-2">
<h2 className="font-display-lg text-display-lg text-on-surface">Integrations</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Connect your favorite streaming services to sync your music library, import playlists, and manage your cross-platform audio experience.</p>
</header>
{/*  Services Grid (Bento Style)  */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-stack-gap">
{/*  Spotify Card (Connected)  */}
<div className="bg-surface-container-low border border-white/5 rounded-xl p-6 relative overflow-hidden group hover:bg-surface-container transition-colors flex flex-col justify-between min-h-[160px]">
<div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
<div className="flex items-start justify-between relative z-10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#1DB954]/20 flex items-center justify-center border border-[#1DB954]/30">
<span className="material-symbols-outlined text-[#1DB954]">graphic_eq</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Spotify</h3>
<p className="font-label-md text-label-md flex items-center gap-1 mt-1 text-on-surface-variant"><span className="w-2 h-2 rounded-full bg-outline-variant"></span>Active</p>
</div>
</div>
<button className="font-label-sm text-label-sm text-on-surface-variant hover:text-error transition-colors px-3 py-1 rounded border border-white/10 hover:border-error/50">
                            Disconnect
                        </button>
</div>
<div className="mt-4 relative z-10">
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Last synced: 2 hours ago. 14 playlists imported.</p>
</div>
</div>
{/*  Apple Music Card (Not Connected)  */}
<div className="bg-surface-container-low border border-white/5 rounded-xl p-6 relative overflow-hidden group hover:bg-surface-container transition-colors flex flex-col justify-between min-h-[160px]">
<div className="flex items-start justify-between relative z-10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<span className="material-symbols-outlined text-on-surface">music_note</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Apple Music</h3>
<p className="font-label-md text-label-md text-on-surface-variant mt-1">
                                    Not Connected
                                </p>
</div>
</div>
<button className="font-label-sm text-label-sm bg-primary-container text-on-primary-container px-4 py-2 rounded shadow-[0_0_15px_rgba(157,78,221,0.2)] hover:bg-primary-fixed hover:text-on-primary-fixed transition-all">
                            Connect
                        </button>
</div>
</div>
{/*  SoundCloud Card (Connected)  */}
<div className="bg-surface-container-low border border-white/5 rounded-xl p-6 relative overflow-hidden group hover:bg-surface-container transition-colors flex flex-col justify-between min-h-[160px]">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7700]/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
<div className="flex items-start justify-between relative z-10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#FF7700]/20 flex items-center justify-center border border-[#FF7700]/30">
<span className="material-symbols-outlined text-[#FF7700]">cloud</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">SoundCloud</h3>
<p className="font-label-md text-label-md flex items-center gap-1 mt-1 text-on-surface-variant"><span className="w-2 h-2 rounded-full bg-outline-variant"></span>Active</p>
</div>
</div>
<button className="font-label-sm text-label-sm text-on-surface-variant hover:text-error transition-colors px-3 py-1 rounded border border-white/10 hover:border-error/50">
                            Disconnect
                        </button>
</div>
<div className="mt-4 relative z-10">
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Last synced: 1 day ago. 32 liked tracks imported.</p>
</div>
</div>
{/*  Yandex Music Card (Not Connected)  */}
<div className="bg-surface-container-low border border-white/5 rounded-xl p-6 relative overflow-hidden group hover:bg-surface-container transition-colors flex flex-col justify-between min-h-[160px]">
<div className="flex items-start justify-between relative z-10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<span className="material-symbols-outlined text-on-surface">library_music</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Yandex Music</h3>
<p className="font-label-md text-label-md text-on-surface-variant mt-1">
                                    Not Connected
                                </p>
</div>
</div>
<button className="font-label-sm text-label-sm border border-primary text-primary px-4 py-2 rounded hover:bg-primary-container/10 transition-colors">
                            Connect
                        </button>
</div>
</div>
</section>
{/*  Direct Import Component  */}
<section className="bg-surface-container-low border border-white/5 rounded-xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative z-10 backdrop-blur-sm bg-surface-container-low/80">
<div className="flex flex-col md:flex-row gap-8 items-end">
<div className="flex-1 space-y-4 w-full">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">link</span>
                                Quick Import via Link
                            </h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Paste a playlist link from any supported platform to import it instantly without a full account sync.</p>
</div>
<div className="relative group">
<input className="w-full bg-surface-container-lowest border border-outline-variant focus:border-secondary-container focus:ring-1 focus:ring-secondary-container focus:outline-none rounded-lg px-4 py-3 font-label-md text-label-md text-on-surface placeholder:text-on-surface-variant/50 transition-all shadow-inner" placeholder="https://open.spotify.com/playlist/..." type="url" />
</div>
</div>
<button className="w-full md:w-auto bg-surface-bright border border-white/10 text-on-surface px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-white/10 hover:border-primary transition-all flex items-center justify-center gap-2 whitespace-nowrap">
<span className="material-symbols-outlined">download</span>
                        Fetch Playlist
                    </button>
</div>
</section>
{/*  Import History Status Panel  */}
<section className="space-y-4 relative z-10">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Import History</h3>
<button className="text-primary hover:text-primary-fixed font-label-md text-label-md flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[18px]">sync</span>
                        Refresh Logs
                    </button>
</div>
<div className="bg-surface-container-low/90 backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden">
<div className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 bg-surface-container-highest/30 font-label-sm text-label-sm text-on-surface-variant uppercase">
<div className="col-span-4 md:col-span-3">Playlist</div>
<div className="col-span-3 md:col-span-2 hidden sm:block">Source</div>
<div className="col-span-3 md:col-span-2 hidden md:block">Date</div>
<div className="col-span-4 md:col-span-3">Status</div>
<div className="col-span-4 md:col-span-2 text-right">Action</div>
</div>
<div className="divide-y divide-white/5">
{/*  Row 1: Success  */}
<div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/5 transition-colors">
<div className="col-span-4 md:col-span-3 font-body-md text-body-md text-on-surface truncate">Night Drive Synths</div>
<div className="col-span-3 md:col-span-2 hidden sm:flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">graphic_eq</span> Spotify
                            </div>
<div className="col-span-3 md:col-span-2 hidden md:block font-label-md text-label-md text-on-surface-variant">Oct 24, 2023</div>
<div className="col-span-4 md:col-span-3 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-container text-[18px]">check_circle</span>
<span className="font-label-md text-label-md text-secondary-container">Synced</span>
</div>
<div className="col-span-4 md:col-span-2 text-right">
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-white/10">
<span className="material-symbols-outlined text-[20px]">refresh</span>
</button>
</div>
</div>
{/*  Row 2: Pending/Syncing  */}
<div className="grid grid-cols-12 gap-4 p-4 items-center bg-primary-container/5">
<div className="col-span-4 md:col-span-3 font-body-md text-body-md text-primary font-medium truncate">Discover Weekly</div>
<div className="col-span-3 md:col-span-2 hidden sm:flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">graphic_eq</span> Spotify
                            </div>
<div className="col-span-3 md:col-span-2 hidden md:block font-label-md text-label-md text-on-surface-variant">Today</div>
<div className="col-span-4 md:col-span-3 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px] animate-spin">sync</span>
<span className="font-label-md text-label-md text-primary">Importing...</span>
</div>
<div className="col-span-4 md:col-span-2 text-right">
<button className="p-2 text-on-surface-variant hover:text-error transition-colors rounded-full hover:bg-white/10" title="Cancel">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
</div>
{/*  Row 3: Error  */}
<div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/5 transition-colors">
<div className="col-span-4 md:col-span-3 font-body-md text-body-md text-on-surface truncate">Unknown Mix 01</div>
<div className="col-span-3 md:col-span-2 hidden sm:flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">link</span> Manual Link
                            </div>
<div className="col-span-3 md:col-span-2 hidden md:block font-label-md text-label-md text-on-surface-variant">Oct 20, 2023</div>
<div className="col-span-4 md:col-span-3 flex items-center gap-2">
<span className="material-symbols-outlined text-error text-[18px]">error</span>
<span className="font-label-md text-label-md text-error">Failed</span>
</div>
<div className="col-span-4 md:col-span-2 text-right">
<button className="font-label-sm text-label-sm border border-outline-variant text-on-surface px-3 py-1 rounded hover:bg-white/10 transition-colors">
                                    Retry
                                </button>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
{/*  BottomNavBar (Shared Component)  */}
<footer className="fixed bottom-0 left-0 w-full h-player-height z-50 flex items-center justify-between px-gutter bg-surface-container-high/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-4px_20px_rgba(157,78,221,0.15)]">
{/*  Now Playing (Left)  */}
<div className="flex items-center gap-4 w-1/3">
<div className="w-14 h-14 bg-surface-container-low rounded bg-cover bg-center border border-white/10" data-alt="A highly detailed close-up of a futuristic synthesizer interface with glowing neon purple and green LED lights. The aesthetic is dark, tech-forward, and atmospheric, fitting a modern electronic music theme. High contrast and deep black backgrounds highlight the luminous controls." ></div>
<div className="hidden sm:block">
<h4 className="font-body-md text-body-md text-on-surface font-semibold line-clamp-1">Neon Resonance</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Cybernetic Audio</p>
</div>
<button className="text-on-surface-variant hover:text-primary transition-colors ml-2 hidden lg:block">
<span className="material-symbols-outlined text-[20px]">favorite</span>
</button>
</div>
{/*  Controls (Center)  */}
<div className="flex flex-col items-center justify-center w-1/3 space-y-2">
<div className="flex items-center gap-6">
<button className="text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[24px]">skip_previous</span>
</button>
<button className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_15px_rgba(157,78,221,0.4)]">
<span className="material-symbols-outlined text-[32px]" >play_circle</span>
</button>
<button className="text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[24px]">skip_next</span>
</button>
</div>
{/*  Progress Bar  */}
<div className="w-full max-w-md flex items-center gap-2 hidden md:flex">
<span className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">1:24</span>
<div className="h-1 flex-1 bg-surface-container rounded-full overflow-hidden group cursor-pointer relative">
<div className="h-full bg-gradient-to-r from-primary to-secondary w-1/3 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_white]"></div>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">4:05</span>
</div>
</div>
{/*  Tools (Right)  */}
<div className="flex items-center justify-end gap-4 w-1/3 text-on-surface-variant">
<button className="hover:text-primary transition-colors hidden lg:block">
<span className="material-symbols-outlined text-[20px]">music_note</span>
</button>
<button className="hover:text-primary transition-colors hidden sm:block">
<span className="material-symbols-outlined text-[20px]">timer</span>
</button>
<div className="flex items-center gap-2 w-24 hidden md:flex group cursor-pointer">
<span className="material-symbols-outlined text-[20px]">volume_up</span>
<div className="h-1 flex-1 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-on-surface-variant group-hover:bg-primary w-2/3 transition-colors"></div>
</div>
</div>
</div>
</footer>

