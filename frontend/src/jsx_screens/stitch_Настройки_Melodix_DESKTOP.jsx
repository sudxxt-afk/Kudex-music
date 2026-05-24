
{/*  TopNavBar (Mobile Only)  */}
<nav className="md:hidden bg-surface/80 backdrop-blur-xl docked top-0 full-width bg-transparent flat no shadows fixed top-0 right-0 w-full h-16 flex items-center justify-between px-gutter z-30">
<div className="flex items-center gap-2 text-primary dark:text-primary">
<span className="font-display-lg-mobile text-display-lg-mobile font-black text-primary">Kudex</span>
</div>
<div className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors opacity-80">
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">notifications</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">account_circle</span>
</div>
</nav>
{/*  SideNavBar (Desktop Only)  */}
<aside className="hidden md:flex bg-surface-container dark:bg-surface-container docked left-0 h-full w-[280px] border-r border-white/5 flat no shadows fixed left-0 top-0 w-sidebar-width flex-col py-margin-page z-40">
<div className="px-6 mb-8"><div className="flex items-center gap-4 text-primary dark:text-primary"><div className="w-10 h-10 flex-shrink-0 flex items-center justify-center"><img alt="Kudex Logo" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uin_iXZTnSWGq3sYdyHBfo045EN961zjT-77UvFA8pGxfgkKgdLL57Rr2LLWBXDmOhu9OacJRlBgQ3RjA1egZBOUPGNHZknwyAf4ZrLDiiuFaYlUMTFUm2EXdlp1n27YXouNv_C4lmYNLHwS-0bLK_7jNoH1lNPxq7xCQ8CoXtrmgxqEQo3ucf0WMmlE-PtZYpvtHe0fQtKvZPZ8XX76imrbLesUUFK2xa8adCmEfIz6p5mfTrpZORfPXc" /></div><div className="flex flex-col justify-center min-w-0"><h1 className="font-display-lg text-display-lg font-black text-primary leading-tight hover:text-[#e0b6ff] transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(157,78,221,0.6)]" >Kudex</h1></div></div></div>
<nav className="flex-1 px-4 space-y-2">
<a className="flex items-center gap-3 py-3 px-5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">search</span>
<span className="font-label-md text-label-md">Search</span>
</a>
<a className="flex items-center gap-3 py-3 px-5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">library_music</span>
<span className="font-label-md text-label-md">Media Library</span>
</a>
<a className="flex items-center gap-3 py-3 px-5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">playlist_play</span>
<span className="font-label-md text-label-md">Playlists</span>
</a>
<a className="flex items-center gap-3 py-3 px-5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">favorite</span>
<span className="font-label-md text-label-md">Liked Songs</span>
</a>
</nav>
<div className="px-4 mt-auto space-y-4">
<button className="w-full py-3 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-bold hover:scale-95 transition-transform">
                New Playlist
            </button>
<a className="flex items-center gap-3 py-3 px-4 rounded-lg text-primary font-bold border-l-4 border-primary bg-white/5 transition-colors scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" >settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</div>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 ml-0 md:ml-sidebar-width mt-16 md:mt-0 mb-[96px] p-4 md:p-8 overflow-y-auto main-content">
<div className="max-w-4xl mx-auto space-y-section-gap pb-12">
<header className="mb-8">
<h1 className="font-display-lg text-display-lg text-on-surface mb-2">Settings</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Manage your Kudex experience.</p>
</header>
{/*  Interface Section (Bento Grid Style)  */}
<section className="space-y-4">
<h2 className="font-headline-sm text-headline-sm text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined">palette</span> Interface
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/*  Theme Selector  */}
<div className="glass-panel rounded-xl p-6 glow-effect transition-all flex flex-col justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Theme</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Choose your visual aesthetic.</p>
</div>
<div className="relative">
<select className="w-full bg-surface-container-low border border-outline-variant text-on-surface font-body-md text-body-md rounded-lg py-3 px-4 appearance-none focus:outline-none focus:border-[#13ff43] focus:ring-1 focus:ring-[#13ff43] transition-colors cursor-pointer">
<option selected="" value="tokyo-night">Tokyo Night</option>
<option value="gruvbox">Gruvbox Dark</option>
<option value="oled">OLED Black</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
</div>
</div>
{/*  Language Toggle  */}
<div className="glass-panel rounded-xl p-6 glow-effect transition-all flex flex-col justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Language</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Select your preferred language.</p>
</div>
<div className="flex bg-surface-container-low rounded-lg p-1 border border-outline-variant">
<button className="flex-1 py-2 font-label-md text-label-md rounded-md bg-surface-variant text-on-surface shadow-sm">English</button>
<button className="flex-1 py-2 font-label-md text-label-md rounded-md text-on-surface-variant hover:text-on-surface transition-colors">Русский</button>
</div>
</div>
</div>
</section>
{/*  Account Section  */}
<section className="space-y-4">
<h2 className="font-headline-sm text-headline-sm text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined">shield_person</span> Account
                </h2>
<div className="glass-panel rounded-xl p-0 overflow-hidden">
<div className="p-6 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center border border-primary/30">
<span className="material-symbols-outlined text-primary text-2xl">send</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface" >Linked Telegram ID</h3>
<p className="font-body-md text-body-md text-on-surface-variant font-mono text-sm mt-1">@user_melodix_77</p>
</div>
</div>
<button className="px-4 py-2 rounded-lg border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:bg-white/5 hover:text-on-surface transition-colors">
                            Manage Connection
                        </button>
</div>
<div className="p-6 bg-surface-container-lowest/50">
<button className="flex items-center gap-2 text-error hover:text-error-container transition-colors font-label-md text-label-md font-bold">
<span className="material-symbols-outlined">logout</span>
                            Logout from all devices
                        </button>
</div>
</div>
</section>
{/*  Quality & Network Section  */}
<section className="space-y-4">
<h2 className="font-headline-sm text-headline-sm text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined">network_wifi</span> Quality &amp; Network
                </h2>
<div className="grid grid-cols-1 gap-4">
<div className="glass-panel rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-primary/30 transition-colors">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1" >Low-Data Mode</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Reduces audio quality to save bandwidth on cellular networks.</p>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in mt-2 sm:mt-0">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-surface-container-highest border-4 border-outline-variant appearance-none cursor-pointer z-10 top-0 left-0 transition-transform duration-300 ease-in-out" id="low-data-toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-outline-variant cursor-pointer transition-colors duration-300 ease-in-out" htmlFor="low-data-toggle"></label>
</div>
</div>
<div className="glass-panel rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-primary/30 transition-colors">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1" >Storage Cache</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Currently using 1.2 GB of local storage.</p>
</div>
<button className="px-5 py-2 rounded-lg bg-surface-container border border-outline-variant text-on-surface font-label-md text-label-md hover:border-primary hover:text-primary transition-colors flex items-center gap-2 w-full sm:w-auto justify-center mt-2 sm:mt-0">
<span className="material-symbols-outlined" >delete</span>
                            Clear Cache
                        </button>
</div>
</div>
</section>
</div>
</main>
{/*  BottomNavBar (Player Bar)  */}
<nav className="bg-surface-container-high/95 backdrop-blur-2xl docked bottom-0 full-width h-player-height border-t border-white/10 shadow-[0_-4px_20px_rgba(157,78,221,0.15)] fixed bottom-0 left-0 w-full z-50 flex items-center justify-between px-gutter">
{/*  Track Info  */}
<div className="flex items-center gap-4 w-1/3">
<div className="w-14 h-14 rounded-md bg-surface-container-highest overflow-hidden relative group cursor-pointer">
<img alt="Album Art" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" data-alt="A macro shot of a glowing neon purple geometric shape suspended in a dark, atmospheric void, evoking a futuristic synthwave aesthetic with deep contrast." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi9qcHutp2ErOXCUh_NNmVqGObdIUxMSLgARJJPLGKGOXrOoEL8xf0giYgAOuFKST2AQdNR6mKvj1SdgSI-D5qpW6hLnZCyGQkRfJp7wYE5fWPJ1yfmnJe27EX--pmyinD1x-BXzp4dQyoAS82TO-7T3ffvjyWHlEnOV-u6ucwqzf0E5Vm6fypQfNM4pDgq_TCJqiy_kuzLa0uCl0q1Fv-WuIeqegqpzUe0cPxZGobk5gVH_0JHvrbBeaDMY-VKKdyU_pts3sj940" />
</div>
<div className="hidden sm:block">
<h4 className="font-label-md text-label-md text-on-surface truncate max-w-[150px]">Midnight City</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant truncate max-w-[150px]">M83</p>
</div>
</div>
{/*  Controls (Center)  */}
<div className="flex flex-col items-center justify-center w-1/3 max-w-md">
<div className="flex items-center gap-6 mb-2 text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors text-xl hidden sm:block">shuffle</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors text-2xl">skip_previous</span>
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_15px_rgba(224,182,255,0.4)]">
<span className="material-symbols-outlined text-2xl" >play_arrow</span>
</div>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors text-2xl">skip_next</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors text-xl hidden sm:block">repeat</span>
</div>
<div className="w-full flex items-center gap-2 hidden md:flex">
<span className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">1:24</span>
<div className="h-1 flex-1 bg-surface-container rounded-full overflow-hidden group cursor-pointer relative">
<div className="h-full bg-gradient-to-r from-primary to-secondary w-1/3 rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">4:03</span>
</div>
</div>
{/*  Tools (Right)  */}
<div className="flex items-center justify-end gap-4 w-1/3 text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors hidden lg:block text-xl">mic</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors hidden lg:block text-xl">queue_music</span>
<div className="flex items-center gap-2 hidden sm:flex w-24 group">
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors text-xl">volume_up</span>
<div className="h-1 flex-1 bg-surface-container rounded-full overflow-hidden cursor-pointer">
<div className="h-full bg-on-surface-variant group-hover:bg-primary w-2/3 rounded-full transition-colors"></div>
</div>
</div>
</div>
</nav>



