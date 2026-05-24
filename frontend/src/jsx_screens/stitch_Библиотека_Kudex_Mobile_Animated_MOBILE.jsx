
<canvas id="particle-canvas"></canvas>
{/*  Top App Bar  */}
<header className="fixed top-0 w-full z-50 bg-background/40 backdrop-blur-md flex items-center justify-between px-6 h-16 transition-opacity">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary" data-icon="menu">menu</span>
<h1 className="font-display-lg-mobile text-display-lg-mobile font-black tracking-tighter text-primary">Kudex</h1>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="search">search</span>
<div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30">
<img alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKbhXkzzQ6SdzlwYHQPBI167-v80xup4h1qf75y3RIr8_Mw8WaXjBJ7svhLdcIX3h8Jwwrja1yj6pr7h9_sXQqdYhFloJMm_3eeMu4peTB6P_RafXj4ZdzrJ9vdIVb8dopAMc98P8uFbVHNvxYurIug7A19AVnRBxMe3GBN3p35qJm337ScxhBx21N34SFJNOdkyhb4aFRR-1l2p8P5_H7RooWQHU5IR5MFhcreTxvul4ozvI6bpFMZjE6N6R83JkjI_1Pmg7OOV8"/>
</div>
</div>
</header>
{/*  Main Content Canvas  */}
<main className="flex-grow pt-20 pb-40 px-6 relative z-10">
{/*  Header Section  */}
<div className="mb-8">
<h2 className="font-headline-md text-headline-md text-on-surface mb-2">Library</h2>
<div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
<button className="bg-primary-container/20 text-primary border border-primary/20 rounded-full px-4 py-1 font-label-sm text-label-sm whitespace-nowrap">Playlists</button>
<button className="bg-surface-container text-on-surface-variant rounded-full px-4 py-1 font-label-sm text-label-sm whitespace-nowrap">Albums</button>
<button className="bg-surface-container text-on-surface-variant rounded-full px-4 py-1 font-label-sm text-label-sm whitespace-nowrap">Artists</button>
<button className="bg-surface-container text-on-surface-variant rounded-full px-4 py-1 font-label-sm text-label-sm whitespace-nowrap">Downloaded</button>
</div>
</div>
{/*  Liked Songs Anchor  */}
<div className="relative group mb-8 overflow-hidden rounded-xl bg-gradient-to-br from-primary-container to-[#4c007d] p-6 shadow-xl glow-primary">
<div className="absolute -right-4 -bottom-4 opacity-20 transform rotate-12">
<span className="material-symbols-outlined text-[120px]" data-icon="favorite" >favorite</span>
</div>
<div className="relative z-10 flex flex-col justify-between h-full">
<div>
<span className="material-symbols-outlined text-white mb-4" data-icon="favorite" >favorite</span>
<h3 className="font-headline-sm text-headline-sm text-white">Liked Songs</h3>
<p className="font-label-sm text-label-sm text-white/70">1,248 songs</p>
</div>
<div className="mt-6">
<button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-container shadow-lg active:scale-95 transition-transform">
<span className="material-symbols-outlined text-3xl" data-icon="play_arrow" >play_arrow</span>
</button>
</div>
</div>
</div>
{/*  Recent Grid  */}
<div className="mb-10">
<div className="flex justify-between items-end mb-6">
<h4 className="font-headline-sm text-headline-sm text-on-surface">Recently Played</h4>
<span className="font-label-sm text-label-sm text-primary">View All</span>
</div>
<div className="grid grid-cols-2 gap-4">
{/*  Card 1  */}
<div className="flex flex-col gap-2">
<div className="aspect-square rounded-lg overflow-hidden relative group">
<img alt="Cyberpunk Beats" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHQfb1gQl2HYWqo8kBcq0h3EVy_hvfoQ3nBvBqIXrCFGobWyO9ZK15imDqjnNIFUzCLz9tl35UV6qWZjqHLJY1lCYeFjimSBBtZkkUmwI3wH7APlk6nuhGdOLL6XEwa5W-aDPu06dQsQKpqac0ShEnK1YbvjejL1txtw4nH2L2iMfvTMEvDOzUe9iETN6XoKejNa1PYGuhhjzKpqvc29WZwIGXBFUniwhmdFsFBTPIxOi-dyrQkKdlI0DgqPrHMO92ZihCKPnmQ1w"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-white text-4xl" data-icon="play_circle" >play_circle</span>
</div>
</div>
<span className="font-label-md text-label-md text-on-surface truncate">Midnight Echoes</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Various Artists</span>
</div>
{/*  Card 2  */}
<div className="flex flex-col gap-2">
<div className="aspect-square rounded-lg overflow-hidden relative group">
<img alt="Lo-Fi Night" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGzzb8mCRNcBBM7-6emIJbJgqX6Pj-LWA8IhUYwH8K_2DxRSNOMqINTIpFn4RpB9ep12ABfzIL9mozkSn-EZPjup4-XYoHW94x5sRSjkTpwj-pO8ZF0GX3aScTFT_rrE0FFFdA4-0e6iG5vvqpVvUyGWlIme6juTfZJ_Q8ZXqZkdppRWGF0SbvUYpuZXGRSrZ_uQyqLxmwRLjNI3sWPZ85qk9e2rpQVAVUnydr5bh8OKYAAots9cAMDT3Rp6ymYuGql1UffgECeu0"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-white text-4xl" data-icon="play_circle" >play_circle</span>
</div>
</div>
<span className="font-label-md text-label-md text-on-surface truncate">Neon Solitude</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Synthwave Dream</span>
</div>
</div>
</div>
{/*  Section: Your Collections  */}
<div>
<div className="flex justify-between items-end mb-6">
<h4 className="font-headline-sm text-headline-sm text-on-surface">Your Collections</h4>
<span className="material-symbols-outlined text-on-surface-variant" data-icon="grid_view">grid_view</span>
</div>
<div className="space-y-4">
{/*  List Item 1  */}
<div className="flex items-center gap-4 p-2 rounded-xl hover:bg-surface-container transition-colors group">
<div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden">
<img alt="Jazz" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB67EeVMVIGNZHJgM6Y4zthlfaoKgwjvzayDF9mfsqUXAmCb9eNfI8mU3uEIl8PKcb5l2Wwy8m-87JoxShW6JJAG45RtrKFAX9UfgvegDDnJNUWDA3uwmYRYHSLL3T9WeGcmhO-yyDU6Wqwm4lUBKvAQqN9-nPWOXSzmdMcS4v-lUQqgvA6eCJp6KZibIHHsLHRdU3JbplDFMUbAZkSvpxvUiwpwb3BjrlMDzbu20I9W4h2ujVyoHmspwL0Osext6ahIFrj1AUk-Jo"/>
</div>
<div className="flex-grow">
<h5 className="font-label-md text-label-md text-on-surface">The Late Night Jazz</h5>
<p className="font-label-sm text-label-sm text-on-surface-variant">Playlist • 48 songs</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100" data-icon="more_vert">more_vert</span>
</div>
{/*  List Item 2  */}
<div className="flex items-center gap-4 p-2 rounded-xl hover:bg-surface-container transition-colors group">
<div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden">
<img alt="Electronic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiLlPVNXliX8T5T7fqrGdc29Gsw6UizGTsMTo3mYASCzEa-kLdQrbBmPeRNGxEFueYRH25sz1QbjKmlYf_0PJDRpsDf-xUvRjL34G7Z-Effs-5MN-YjcGANfGx6ikuUzfmOc4oB-GDqTNiDtMbPnrSKkM1D2M8yD_8jWtB0h1H6wgkdhkX6xm3mhZkowkUto3rJeyIyT7hyJoyPA9Nhrh5swZnlFyBBbJYELoroczHmxTeNUwWhceYEZLn7yg24OxiDXy25oS5IZQ"/>
</div>
<div className="flex-grow">
<h5 className="font-label-md text-label-md text-on-surface">Digital Horizon</h5>
<p className="font-label-sm text-label-sm text-on-surface-variant">Album • K-X Project</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100" data-icon="more_vert">more_vert</span>
</div>
{/*  List Item 3  */}
<div className="flex items-center gap-4 p-2 rounded-xl hover:bg-surface-container transition-colors group">
<div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden">
<img alt="Techno" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHJWfbjSTTG_4AVDeIPsECajEfUQk5XF34zD3YqSzd9iiunZKrFYmB_NKvoXBip8H-MHHlJg3C3_-83atYaFVeazAaH8C1MfI0FkVvteA64aqBrIsOUFubhBITUm_GHcvKuW1wZhlZerMPlynuHxag0qA0Qc45x4Z24DxMoXCtlQv_R_3wJ92pHINfA629YuYloHDg2sa6Ygfls_Wh4NnpHCrNhI_cSAQ-8RTlgRWgTViza3NvgZLHrFyqAxz-uavusS0-WBBERdg"/>
</div>
<div className="flex-grow">
<h5 className="font-label-md text-label-md text-on-surface">Pulse Code</h5>
<p className="font-label-sm text-label-sm text-on-surface-variant">Playlist • 126 songs</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100" data-icon="more_vert">more_vert</span>
</div>
</div>
</div>
</main>
{/*  Mini Player  */}
<div className="fixed bottom-20 left-4 right-4 z-50 glass-panel rounded-2xl h-16 flex items-center px-3 gap-3 active:scale-[0.98] transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Now Playing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS_z0KFnveqqXpDOLjf_aesUeBC-mcoOiHyB3cFVxwB45PPwKAYgf0tXJlLCNtI7smdcahqcNRg94ChELF7AcViHNJnjuSlLWjtOrgyotp0eVFT_BArjqME8t44PyuGBFt6iCfuEyUhNH18Yfj7_jLqTvTb7RGvjETpi_9JFIhh54FjKgANB3TvyRqC19SuqpkmJsjNkP1b538yo7Ce1ej4mmRrv8gdfsByUFjVaSb3WlwnfIcg9rIC71Uxn7QaLCbaLXGZXOH87A"/>
</div>
<div className="flex-grow min-w-0">
<h6 className="font-label-md text-label-md text-on-surface truncate">Obsidian Skies</h6>
<p className="font-label-sm text-label-sm text-primary truncate">Neural Network</p>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface" data-icon="devices">devices</span>
<button className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="pause" >pause</span>
</button>
</div>
<div className="absolute bottom-0 left-3 right-3 h-[2px] bg-outline-variant/20 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-primary"></div>
</div>
</div>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 w-full z-50 bg-background/80 backdrop-blur-xl flex justify-around items-center h-16 px-4 border-t border-outline-variant/10 shadow-[0_-4px_20px_rgba(157,78,221,0.1)]">
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-label-sm text-label-sm">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-primary bg-primary-container/20 rounded-xl px-3 py-1 active:scale-95 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="library_music" >library_music</span>
<span className="font-label-sm text-label-sm">Library</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="explore">explore</span>
<span className="font-label-sm text-label-sm">Explore</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="timer">timer</span>
<span className="font-label-sm text-label-sm">Pomodoro</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</a>
</nav>

