
{/*  Background Layer  */}
<canvas className="floating-graph-canvas" id="floatingGraph"></canvas>
<div className="fixed inset-0 bg-gradient-to-b from-primary-container/10 via-background to-background pointer-events-none z-0"></div>
{/*  Top Navigation Bar  */}
<header className="fixed top-0 w-full z-50 bg-background/40 backdrop-blur-md flex items-center justify-between px-6 h-16">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary cursor-pointer">menu</span>
<h1 className="font-display-lg-mobile text-display-lg-mobile font-black tracking-tighter text-primary">Kudex</h1>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface">search</span>
<div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a person with soft studio lighting, showcasing a minimalist and tech-forward aesthetic. The background is a deep charcoal gray, complementing the nocturnal theme of the UI. The lighting highlights the subject's face with a subtle cool purple tint, aligning with the primary brand color of Tokyo Purple." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI5Vixj77GUjKZzrUt6Roov6O49i5sLCf4tsdCZjHYiFRiMxc0OXnZtLZzBBRUq2eEj6iSpE2hx4GZXGvtMOdFcc1RlKptxfLGAUaTisRUfPNjj8z8W9Lr6xLEiu2WZB_3aAyrFZUw2x7Tq4xc0N_M3K9I99iyB26qwclvIFy9cYJVdu5kjqP44mjHXse0qleHB-Oe-IpR-Ufh_wi7Oc7e3y1x_oOKsMbp-ILo7KI37rk6YcukFWHcLnuD2l4XnDPU4CSAsobiouA"/>
</div>
</div>
</header>
{/*  Main Content Canvas  */}
<main className="relative z-10 pt-20 pb-40 px-6 max-w-lg mx-auto overflow-y-auto no-scrollbar h-screen">
{/*  Welcome Section  */}
<section className="mb-10">
<h2 className="font-headline-md text-headline-md text-on-background mb-2">Good evening</h2>
<p className="font-body-md text-body-md text-on-surface-variant opacity-70">Ready for some late-night focus?</p>
</section>
{/*  Recently Played (Horizontal Bento)  */}
<section className="mb-10">
<div className="flex justify-between items-end mb-4">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Recently Played</h3>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">See all</span>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x">
{/*  Card 1  */}
<div className="min-w-[160px] snap-start group">
<div className="relative aspect-square rounded-xl overflow-hidden mb-3 border border-white/5 active:scale-95 transition-transform">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Abstract digital art featuring fluid, metallic obsidian waves with neon purple highlights. The scene is dark and immersive, evoking a late-night music production vibe. The lighting is low-key with intense bioluminescent glows in the valleys of the waves, perfect for an audiophile streaming experience." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLGRXCIdqDXHtemxIJ6lik0D0o1LO7eDS8s-NTzg_3MyR5uKoOV-gdkO1rnyYtI5uHuWlS1Hm5Yw7iNcjsJAV3h1KSvVdCLxPIXvYtDBKOIoHmSiMNYMaKI2cFNYlBkd0iNYoybAnzRKErBJq4Z2zA1YDgHPr7Ep3X7uqE-6Tqonb1s5TomY1yoptBpLpYSanLjRCdw49bGlbzhn6WFT_qYs6n6AtVPMkzw5HD-fECYNMp6D2II3Jn8JM33FNLULyAROQ5cwKUjOA"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-4xl" >play_circle</span>
</div>
</div>
<p className="font-label-md text-label-md text-on-surface truncate">Midnight Pulse</p>
<p className="font-label-sm text-label-sm text-on-surface-variant truncate">Cyber Glitch</p>
</div>
{/*  Card 2  */}
<div className="min-w-[160px] snap-start group">
<div className="relative aspect-square rounded-xl overflow-hidden mb-3 border border-white/5 active:scale-95 transition-transform">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A minimalist photograph of a high-end synthesizer in a dimly lit studio. The knobs and faders are illuminated by a soft magenta light. The aesthetic is sophisticated and tech-forward, focusing on the texture of the equipment. Deep blacks and vibrant purple accents create a sense of professional depth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSKJkHJ50Ntre8uIjybJh04jCOQ9YIvKjyFR570BV-R5r-cPvLY998uMMA8Me22apsMLFgNwbDs-5kmmTX8T0g09zx-ue-gAZ4y9e6E_DRhkYucTeraJWMNYCZHoVz1eM5ewfoCX86pCrKTJShErKHP69B5HCH7B7mrWLeo_LB9_a5tZuM7i-_Hu8-qpAzIkQbYprf52WcnuVPpLyTv4aumDm_ccaOj-l3h7jLKPEULF-dJMUaL2a-lHuziE0W-msK3KTGhWGejCg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-4xl" >play_circle</span>
</div>
</div>
<p className="font-label-md text-label-md text-on-surface truncate">Analog Dreams</p>
<p className="font-label-sm text-label-sm text-on-surface-variant truncate">Synthwave Collective</p>
</div>
{/*  Card 3  */}
<div className="min-w-[160px] snap-start group">
<div className="relative aspect-square rounded-xl overflow-hidden mb-3 border border-white/5 active:scale-95 transition-transform">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A dark, atmospheric landscape showing a misty forest at dusk. The sky is a deep indigo, and the silhouettes of pine trees create a rhythmic pattern. Subtle purple light filters through the fog, giving it a mysterious and focused nocturnal quality. High contrast between the deep shadows and the soft ethereal light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUN3KfhemW5j-BrvGVF9i8RL-ZiEXuRZdLOsYKOkbmL0IOKc3R6Mcdx_MgXtye2dlXxIYi1H9ZCZEL3VUQPn8FG8qm3_CeMfPGrQAzPWx5lFPxG0V_ShhXFhnHuJ8jI950jdP-AFXVIxOAN7kc3rm8LynrB6KvVWVoFdTzzMnIZMsGaeY_5Dgqc7gIMwQQ7k9yCST2DxQxSJfr6zaQOsOraAgK7c7zzK4zoxT0Nt7PpzwZy_yi_C22-ceHGEhG8QaS4tDQvrUsybM"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-4xl" >play_circle</span>
</div>
</div>
<p className="font-label-md text-label-md text-on-surface truncate">Deep Echoes</p>
<p className="font-label-sm text-label-sm text-on-surface-variant truncate">Lofi Beats</p>
</div>
</div>
</section>
{/*  Made For You (Asymmetric Layout)  */}
<section className="mb-10">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">Made for You</h3>
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 glass-card rounded-2xl p-4 flex items-center gap-6 group cursor-pointer hover:bg-surface-variant/40 transition-all">
<div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform" data-alt="Close-up of a high-fidelity vinyl record spinning on a modern turntable. The needle is precisely placed, and the light reflects off the grooves creating a shimmering effect. The color palette is dark with chrome and deep purple reflections, emphasizing a premium audiophile experience." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDV-Myfx5SXIPP81upvZ8A1w05EPTMINEf5iMRSCHyBPsl1-8whZbhN36YkNmWSmV4qI8mTmIIURlLofNjkTgPsseawDxT_BgXTOfkbE-hw1Vdmq7MNcBaG2v4AwBbqJOH5kFjYKmccb4Vobcg_IyNOJYBulxHLGX3JIV7TR4QNyQ33CQ5_Oh6SR7WQ2Y-Sf0iqVj6c5Dx8k5-5ThYb__gDgkC0_w_2GjcdCm8XABQGVqEr6w4ff8_M14QN0EnbjorIBnL72Xu238"/>
</div>
<div>
<p className="font-headline-sm text-primary mb-1">Discover Weekly</p>
<p className="font-body-md text-on-surface-variant text-sm">New tracks selected for your nocturnal flow.</p>
</div>
</div>
<div className="glass-card rounded-2xl p-4 flex flex-col items-center text-center group cursor-pointer active:scale-95 transition-all">
<div className="w-24 h-24 rounded-full border-4 border-primary/20 p-1 mb-3 group-hover:border-primary/50 transition-colors">
<img className="w-full h-full object-cover rounded-full" data-alt="A vibrant, blurred concert scene with a DJ performing under intense purple and green laser lights. The atmosphere is energetic and immersive, capturing the essence of high-performance music. The dark background ensures the glowing colors are the focal point, aligning with the nocturnal music theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3-5iOL8H9XKCObOgOA3yr1x3BsCe1fX2vy5oYknq1ul-c0BmXBhbiGgdf3yyrglMJYsI_Emwq8Cap1ovCI5CZq8KubG3MX4TPxNfp6mhMoKrXd_Jnc0Dl1hGctrL-qgkGDYksw7DtOD2ir0jOQg8Yt1HL4isQAPylpwlyKg2BkTHkFOeD9xIMOI5YW5yOb9jk8Tvh5bXJJ56G7R2akq3WH-BBthjxcaYH9BxA_kCjqWqYmJZwzBPMR5n7dZ8Ohqew3nB4pKR3uec"/>
</div>
<p className="font-label-md text-label-md text-on-surface">Daily Mix 1</p>
</div>
<div className="glass-card rounded-2xl p-4 flex flex-col items-center text-center group cursor-pointer active:scale-95 transition-all">
<div className="w-24 h-24 rounded-full border-4 border-secondary/20 p-1 mb-3 group-hover:border-secondary/50 transition-colors">
<img className="w-full h-full object-cover rounded-full" data-alt="A sophisticated macro shot of guitar strings vibrating against a dark fretboard. Soft teal and purple ambient lighting highlights the metallic textures. The image is clean, minimalist, and focuses on the technical beauty of musical instruments, fitting for a tech-forward music app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBzIFUtPnGLwbs8z6cLFcty0WJF1D1N0N9CaxaRSdZp6potO-uKzwnkJ7Y6j14DNEMfv2_hPZOcTpkh1rDB6ORF5HG2kQR7Iyc-tQ6uT88ZRbpTB_y7R3hV9oCDgJOFwCyIr3CUGwcq1G70i21qZ6-jA4Ot_NDaGYXWbFwCV3XBBnkVel0sPiCVnFzDS7U7PxtfGjRJDIpWWWKZwk0r1TdkS_rktL57evwV9DSfYMtxapXu8_x9DEYEXxDRsJfCeGFErs8L5iLUss"/>
</div>
<p className="font-label-md text-label-md text-on-surface">Daily Mix 2</p>
</div>
</div>
</section>
{/*  New Releases (Table Style)  */}
<section className="mb-10">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">New Releases</h3>
<div className="flex flex-col gap-2">
{/*  Track 1  */}
<div className="flex items-center p-3 rounded-xl hover:bg-surface-variant/30 transition-colors cursor-pointer group">
<span className="font-label-sm text-on-surface-variant w-6 text-center group-hover:hidden">1</span>
<span className="material-symbols-outlined text-primary text-sm hidden group-hover:block w-6 text-center">play_arrow</span>
<div className="w-12 h-12 rounded bg-surface-container mx-3 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Deep abstract gradient of magenta and violet merging into total darkness. The texture is grainy and cinematic, resembling a high-quality album cover. The lighting is focused in the center, creating a portal-like effect that draws the viewer in. Perfectly captures the nocturnal, sophisticated vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY-kh4mCk1OH_ugWXlARHHP2xY_Zwnau8haHnZFfXUHAaCX2K9ycZIyA77KSRNwZZQTRuK2DiFwSnAlADdRkKi6PNhtvN4WpijGDIv73DIbE09Us41jlYRaZZ3ZscbEZZ6yxnPwKL1-9fDvoBAjaHkt-XPbm2E4XTr_1VLbaou_qG-VdkJRBKL9-9FfqA0G14tUhIIHlsNW_ZeGpZGEeLh-7dyWew3PNgmErbjIYvfEAQ2Ha8jl9qbhrXysza2plgcIlg3TUtzBvI"/>
</div>
<div className="flex-1">
<p className="font-label-md text-label-md text-on-surface">Stellar Void</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Nova Protocol</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
</div>
{/*  Track 2  */}
<div className="flex items-center p-3 rounded-xl hover:bg-surface-variant/30 transition-colors cursor-pointer group">
<span className="font-label-sm text-on-surface-variant w-6 text-center group-hover:hidden">2</span>
<span className="material-symbols-outlined text-primary text-sm hidden group-hover:block w-6 text-center">play_arrow</span>
<div className="w-12 h-12 rounded bg-surface-container mx-3 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A stylized digital illustration of a cityscape at night seen from a rainy window. Blurred city lights in cool blues and warm ambers create a beautiful bokeh effect. The mood is calm and melancholic, ideal for a background image in a premium music streaming application for late-night listening." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvb-wbOvHrra0iJd7ZuYiquuIPtfFsNmlXG-8AIR3azXjtUF1aTnY5DLvL7i_qtmHQmtqq5xGhJdQ8zZhrxChlDXa4Y1SyubmWGHczj2TjyLqoFc24oiwkSxM6_6w6niubdz-Uga3TpFpESMwIN_OteIEJHNZ2s5dNjLfFjGkE_eDnXKzulxT52-vAiaHJxD78i66quJRDNuMS2ZWj9Puz2Sxa34-2hvo6PiPteHirShnuELRtsKJl5LHBL5RAakxobK2iHUB_ajg"/>
</div>
<div className="flex-1">
<p className="font-label-md text-label-md text-on-surface">Neon Rain</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Lofi Raindrops</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
</div>
</div>
</section>
</main>
{/*  Mini Player (Floating Shell)  */}
<div className="fixed bottom-20 left-4 right-4 z-50">
<div className="glass-card rounded-2xl p-3 flex items-center justify-between shadow-2xl border-primary/20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg animate-pulse">
<img className="w-full h-full object-cover" data-alt="Small album thumbnail with vibrant neon colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV1yo5A70oEzdTd-NEA2NmOoIYSAyWPEVp65UQX89rHu0XXAIENadEWQMxqhY-hFrIPwF8TAg9b6R2deFU9c6IbAXUW5Tnkx605wdc9p0eQsUSfmFR4qEGd4MFmV26Qa1nMp2sAVQLUHu_ddWbU8wGLZJnanUWVvbOxMRtmkzpRvq_aTUy85Jv3wk0cBQ9gLwBfr05K3TAQNef3L2BmOU5JUUI_GJFnMgRQK7pbBxYNCIDHmlXRVjsFL1t-riwse3zGikLv3R2ozc"/>
</div>
<div>
<p className="font-label-md text-label-md text-primary leading-none mb-1">Midnight Pulse</p>
<p className="font-label-sm text-label-sm text-on-surface-variant leading-none">Cyber Glitch</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface">devices</span>
<span className="material-symbols-outlined text-primary text-3xl" >pause</span>
</div>
</div>
{/*  Simple Progress Overlay  */}
<div className="h-1 bg-primary/20 w-full mt-[-4px] rounded-full overflow-hidden">
<div className="h-full bg-primary w-[65%] shadow-[0_0_10px_#e0b6ff]"></div>
</div>
</div>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 w-full z-50 bg-background/80 backdrop-blur-xl border-t border-outline-variant/10 shadow-[0_-4px_20px_rgba(157,78,221,0.1)] flex justify-around items-center h-16 px-4">
{/*  Home (Active)  */}
<div className="flex flex-col items-center justify-center text-primary bg-primary-container/20 rounded-xl px-3 py-1 active:scale-95 duration-200 cursor-pointer">
<span className="material-symbols-outlined" >home</span>
<span className="font-label-sm text-label-sm">Home</span>
</div>
{/*  Library  */}
<div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200 cursor-pointer">
<span className="material-symbols-outlined">library_music</span>
<span className="font-label-sm text-label-sm">Library</span>
</div>
{/*  Explore  */}
<div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200 cursor-pointer">
<span className="material-symbols-outlined">explore</span>
<span className="font-label-sm text-label-sm">Explore</span>
</div>
{/*  Pomodoro  */}
<div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200 cursor-pointer">
<span className="material-symbols-outlined">timer</span>
<span className="font-label-sm text-label-sm">Pomodoro</span>
</div>
{/*  Settings  */}
<div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200 cursor-pointer">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</div>
</nav>

