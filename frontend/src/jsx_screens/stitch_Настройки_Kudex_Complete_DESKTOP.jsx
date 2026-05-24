
{/*  Background Canvas  */}
<canvas className="fixed inset-0 z-0 pointer-events-none" id="bg-canvas"></canvas>
{/*  SideNavBar (Desktop Only)  */}
<aside className="hidden md:flex fixed left-0 top-0 h-full w-sidebar-width flex-col py-margin-page z-40 bg-black/40 backdrop-blur-md border-r border-white/5">
<div className="px-6 mb-10">
<div className="flex items-center gap-3 text-primary">
<div className="w-8 h-8 flex-shrink-0">
<img alt="Kudex Logo" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0uin_iXZTnSWGq3sYdyHBfo045EN961zjT-77UvFA8pGxfgkKgdLL57Rr2LLWBXDmOhu9OacJRlBgQ3RjA1egZBOUPGNHZknwyAf4ZrLDiiuFaYlUMTFUm2EXdlp1n27YXouNv_C4lmYNLHwS-0bLK_7jNoH1lNPxq7xCQ8CoXtrmgxqEQo3ucf0WMmlE-PtZYpvtHe0fQtKvZPZ8XX76imrbLesUUFK2xa8adCmEfIz6p5mfTrpZORfPXc"/>
</div>
<h1 className="font-display-lg text-2xl font-black text-primary hover:opacity-80 transition-opacity cursor-pointer">Kudex</h1>
</div>
</div>
<nav className="flex-1 px-4 space-y-1">
<a className="flex items-center gap-3 py-3 px-4 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">search</span>
<span className="font-label-md text-label-md">Search</span>
</a>
<a className="flex items-center gap-3 py-3 px-4 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">library_music</span>
<span className="font-label-md text-label-md">Media Library</span>
</a>
<a className="flex items-center gap-3 py-3 px-4 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">playlist_play</span>
<span className="font-label-md text-label-md">Playlists</span>
</a>
<a className="flex items-center gap-3 py-3 px-4 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined">favorite</span>
<span className="font-label-md text-label-md">Liked Songs</span>
</a>
</nav>
<div className="px-4 mt-auto space-y-4">
<button className="w-full py-3 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-bold hover:brightness-110 transition-all">
                New Playlist
            </button>
<a className="flex items-center gap-3 py-3 px-4 rounded-lg text-primary font-bold bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined" >settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</div>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 ml-0 md:ml-sidebar-width mb-[96px] p-6 md:p-12 overflow-y-auto main-content relative z-10">
<div className="max-w-4xl mx-auto space-y-12">
<header>
<h1 className="font-display-lg text-display-lg text-on-surface mb-2">Settings</h1>
<p className="font-body-lg text-on-surface-variant">Manage your Kudex experience.</p>
</header>
{/*  Interface Section  */}
<section className="space-y-6">
<h2 className="font-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined">palette</span> Interface
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="glass-panel rounded-xl p-6 flex flex-col justify-between h-40">
<div>
<h3 className="font-headline-sm text-lg text-on-surface mb-1">Theme</h3>
<p className="font-label-md text-on-surface-variant">Visual aesthetic.</p>
</div>
<select className="custom-select w-full bg-surface-container-low border border-outline-variant text-on-surface font-body-md text-sm rounded-lg py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-primary transition-colors cursor-pointer">
<option selected="" value="tokyo-night">Tokyo Night</option>
<option value="gruvbox">Gruvbox Dark</option>
<option value="oled">OLED Black</option>
</select>
</div>
<div className="glass-panel rounded-xl p-6 flex flex-col justify-between h-40">
<div>
<h3 className="font-headline-sm text-lg text-on-surface mb-1">Language</h3>
<p className="font-label-md text-on-surface-variant">Preferred language.</p>
</div>
<div className="flex bg-surface-container-low rounded-lg p-1 border border-outline-variant">
<button className="flex-1 py-1.5 font-label-md text-sm rounded-md bg-surface-variant text-on-surface">English</button>
<button className="flex-1 py-1.5 font-label-md text-sm rounded-md text-on-surface-variant hover:text-on-surface transition-colors">Русский</button>
</div>
</div>
</div>
</section>
{/*  Account Section  */}
<section className="space-y-6">
<h2 className="font-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined">shield_person</span> Account
                </h2>
<div className="glass-panel rounded-xl overflow-hidden">
<div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
<span className="material-symbols-outlined text-primary text-2xl">send</span>
</div>
<div>
<h3 className="font-headline-sm text-lg text-on-surface">Linked Telegram ID</h3>
<p className="font-body-md text-sm text-on-surface-variant font-mono mt-0.5">@user_kudex_77</p>
</div>
</div>
<button className="px-5 py-2 rounded-lg border border-outline-variant text-on-surface-variant font-label-md text-sm hover:bg-white/5 hover:text-on-surface transition-colors">
                            Manage Connection
                        </button>
</div>
<div className="px-6 py-4 bg-white/[0.02] border-t border-white/5">
<button className="flex items-center gap-2 text-error hover:opacity-80 transition-opacity font-label-md text-sm font-bold">
<span className="material-symbols-outlined text-xl">logout</span>
                            Logout from all devices
                        </button>
</div>
</div>
</section>
{/*  Quality & Network Section  */}
<section className="space-y-6">
<h2 className="font-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined">network_wifi</span> Quality &amp; Network
                </h2>
<div className="space-y-4">
<div className="glass-panel rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div>
<h3 className="font-headline-sm text-lg text-on-surface mb-1">Low-Data Mode</h3>
<p className="font-body-md text-sm text-on-surface-variant">Reduces audio quality to save bandwidth on cellular networks.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="low-data-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary transition-colors"></div>
</label>
</div>
<div className="glass-panel rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div>
<h3 className="font-headline-sm text-lg text-on-surface mb-1">Audio Quality</h3>
<p className="font-body-md text-sm text-on-surface-variant">Streaming quality preference.</p>
</div>
<select className="custom-select w-full sm:w-48 bg-surface-container-low border border-outline-variant text-on-surface font-body-md text-sm rounded-lg py-2.5 px-4 focus:outline-none cursor-pointer">
<option value="low">Low (64kbps)</option>
<option selected="" value="normal">Normal (128kbps)</option>
<option value="high">High (320kbps)</option>
</select>
</div>
</div>
</section>
{/*  Storage Section  */}
<section className="space-y-6">
<h2 className="font-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined">database</span> Storage
                </h2>
<div className="glass-panel rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div>
<h3 className="font-headline-sm text-lg text-on-surface mb-1">Storage Cache</h3>
<p className="font-body-md text-sm text-on-surface-variant">Currently using 1.2 GB of local storage.</p>
</div>
<button className="px-5 py-2 rounded-lg border border-outline-variant text-on-surface-variant font-label-md text-sm hover:border-error hover:text-error transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-xl">delete</span>
                        Clear Cache
                    </button>
</div>
</section>
{/*  About Section  */}
<section className="pt-8 border-t border-white/5">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div>
<p className="font-label-md text-on-surface-variant">Kudex version <span className="text-on-surface">v2.4.0</span></p>
<p className="font-label-sm text-on-surface-variant/60 text-[10px] mt-1">Made with passion for music.</p>
</div>
<div className="flex gap-6">
<a className="font-label-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms</a>
<a className="font-label-md text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy</a>
</div>
</div>
</section>
</div>
</main>
{/*  Player Bar  */}
<nav className="fixed bottom-0 left-0 w-full h-player-height bg-surface-container-high/90 backdrop-blur-2xl border-t border-white/10 z-50 flex items-center justify-between px-gutter">
<div className="flex items-center gap-4 w-1/3">
<div className="w-14 h-14 rounded-md bg-surface-container-highest overflow-hidden">
<img alt="Album Art" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi9qcHutp2ErOXCUh_NNmVqGObdIUxMSLgARJJPLGKGOXrOoEL8xf0giYgAOuFKST2AQdNR6mKvj1SdgSI-D5qpW6hLnZCyGQkRfJp7wYE5fWPJ1yfmnJe27EX--pmyinD1x-BXzp4dQyoAS82TO-7T3ffvjyWHlEnOV-u6ucwqzf0E5Vm6fypQfNM4pDgq_TCJqiy_kuzLa0uCl0q1Fv-WuIeqegqpzUe0cPxZGobk5gVH_0JHvrbBeaDMY-VKKdyU_pts3sj940"/>
</div>
<div className="hidden sm:block truncate">
<h4 className="font-label-md text-on-surface truncate">Midnight City</h4>
<p className="font-label-sm text-on-surface-variant truncate">M83</p>
</div>
</div>
<div className="flex flex-col items-center justify-center w-1/3 max-w-md">
<div className="flex items-center gap-6 mb-1 text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors text-xl hidden sm:block">shuffle</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors text-2xl">skip_previous</span>
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-2xl" >play_arrow</span>
</div>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors text-2xl">skip_next</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors text-xl hidden sm:block">repeat</span>
</div>
<div className="w-full flex items-center gap-2 hidden md:flex">
<span className="font-label-sm text-[10px] text-on-surface-variant">1:24</span>
<div className="h-1 flex-1 bg-surface-container rounded-full overflow-hidden cursor-pointer relative group">
<div className="h-full bg-primary w-1/3 rounded-full"></div>
</div>
<span className="font-label-sm text-[10px] text-on-surface-variant">4:03</span>
</div>
</div>
<div className="flex items-center justify-end gap-4 w-1/3 text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors hidden lg:block text-xl">mic</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors hidden lg:block text-xl">queue_music</span>
<div className="flex items-center gap-2 hidden sm:flex w-24 group">
<span className="material-symbols-outlined text-xl">volume_up</span>
<div className="h-1 flex-1 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-on-surface-variant w-2/3"></div>
</div>
</div>
</div>
</nav>

