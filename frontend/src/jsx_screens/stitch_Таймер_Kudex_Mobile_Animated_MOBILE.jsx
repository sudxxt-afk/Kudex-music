
{/*  Animated Background Canvas  */}
<canvas id="particle-canvas"></canvas>
{/*  Top App Bar  */}
<header className="fixed top-0 w-full z-50 bg-background/40 backdrop-blur-md flex items-center justify-between px-6 h-16 transition-opacity">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary cursor-pointer">menu</span>
<h1 className="font-display-lg-mobile text-display-lg-mobile font-black tracking-tighter text-primary">Kudex</h1>
</div>
<div className="w-10 h-10 rounded-full overflow-hidden border border-primary/20">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="A professional close-up studio portrait of a modern music enthusiast with soft, cinematic lighting. The individual has a focused expression, reflecting a high-performance lifestyle. The color palette is dominated by deep charcoal tones and subtle purple neon highlights, maintaining the nocturnal tech-forward aesthetic of the Kudex brand. The background is a blurred metropolitan nightscape." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSNDO1ssllyvJ63jWNtUxTRMD-oTg8VkcQ4dIYq032vzC96eae2PWHdU4zz1N7BlPPKcRPHfhDKWDm44lppP1fOdCvl5LMh1E6o9TmoWwZgZ0J9N36tGshMnoPZGmktIxsGG2GM_PavITFzeO5v0f2hQP2nSbCb6F8nflziXcFDgMl7E_xqd2guYlp_E1c8cEGjtw8lQfCGP3_W_XfJS6Z_hZAjgSvaQe5z7DW4v1M8JXuwZSX4suNuWqKybjQ489dDBkW48efhwk"/>
</div>
</header>
<main className="pt-24 px-6 max-w-lg mx-auto relative z-10">
{/*  Timer Section  */}
<section className="flex flex-col items-center justify-center py-8">
<div className="relative flex items-center justify-center w-72 h-72">
{/*  SVG Progress Ring  */}
<svg className="absolute inset-0 w-full h-full -rotate-90">
<circle className="text-surface-container-highest" cx="144" cy="144" fill="transparent" r="130" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-primary transition-all duration-1000 ease-linear" cx="144" cy="144" fill="transparent" id="progress-ring" r="130" stroke="currentColor" stroke-dasharray="816" stroke-dashoffset="200" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
{/*  Inner Timer Content  */}
<div className="z-10 text-center">
<span className="font-display-lg-mobile text-[64px] font-black tracking-tight text-on-background" id="timer-display">25:00</span>
<p className="font-label-sm text-label-sm text-on-surface-variant tracking-[0.2em] uppercase mt-[-8px]">Focus Session</p>
</div>
{/*  Atmospheric Pulse  */}
<div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse-slow"></div>
</div>
{/*  Play/Pause Controls  */}
<div className="mt-12 flex items-center gap-8">
<button className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[28px]">refresh</span>
</button>
<button className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-on-primary timer-glow active:scale-95 transition-all" id="main-play-btn">
<span className="material-symbols-outlined text-[40px]" >play_arrow</span>
</button>
<button className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[28px]">skip_next</span>
</button>
</div>
{/*  Presets  */}
<div className="mt-10 flex gap-4">
<button className="px-6 py-2 rounded-full glass-panel font-label-md text-label-md text-primary border-primary/40">25 min</button>
<button className="px-6 py-2 rounded-full glass-panel font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">50 min</button>
<button className="px-6 py-2 rounded-full glass-panel font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">15 min</button>
</div>
</section>
{/*  Integrated Playlists Section  */}
<section className="mt-12 pb-12">
<div className="flex items-center justify-between mb-6">
<h2 className="font-headline-sm text-headline-sm">Integrated Study Playlists</h2>
<span className="material-symbols-outlined text-primary">arrow_forward</span>
</div>
<div className="grid grid-cols-1 gap-4">
{/*  Playlist Card 1  */}
<div className="flex items-center gap-4 p-4 glass-panel rounded-xl group active:scale-[0.98] transition-transform">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="A high-contrast digital art piece featuring deep violet and neon emerald patterns that resemble sound waves in a digital void. The visual style is sleek and immersive, perfectly matching the nocturnal, tech-forward aesthetic of an audiophile's music streaming experience. The composition is minimalist with sharp geometric edges and soft glowing gradients." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvt6YSpZ1MLprrNWfeJXdoZByVSf_KZxkq7S_UFIoWR3EZD24i-yCzATET3ofxdVgIqSfh5iVc7wRPhrVGnx4DndJvV-rSddueoaPUVdZJe1QUUmp0j3lYFnK5i9s1x5faoR97hE1TU0LWPywhfaqZITahf-PlzbANTu41EWtSv65sLI0hHX9Aa9ummpngV-aw7mrGZZv3sbEJa7Cm9xIWnRBaT9ELx9oDkC-jRccl6dGkT8pTU-bq-NIxlqrQJXPGFmmoEgIpJRQ"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<span className="material-symbols-outlined text-white" >play_circle</span>
</div>
</div>
<div className="flex-1">
<h3 className="font-body-md text-body-md font-semibold text-on-background">Deep Focus Coding</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Lofi &amp; Ambient Synth • 120 Tracks</p>
</div>
<div className="flex flex-col items-end gap-1">
<span className="material-symbols-outlined text-primary text-[20px]">graphic_eq</span>
<p className="font-label-sm text-[10px] text-primary uppercase">Active</p>
</div>
</div>
{/*  Playlist Card 2  */}
<div className="flex items-center gap-4 p-4 glass-panel rounded-xl group active:scale-[0.98] transition-transform">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="An atmospheric visualization of a calm metropolitan night sky with subtle light leaks in Tokyo Purple and Hacker Green. The image evokes a sense of deep focus and tranquility. The style is modern minimalist with a slight grainy texture, reflecting a sophisticated lean-back music experience for late-night developers and deep-thinkers." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtqcJEEVgLmLU8NKR-HE1iXLClSsrw9vTz8ithpeeR13RJRxO5dADJtuxzkuavJmwY8qzQ7xfI4EWEtfMP506iJ5uLzLPY5xsbK8ELNiTdZfIzahFe2VuX-FDSzSSUzmqUWgHZPCMtjP-1S8K2_NLFewXML8UVaZjraYEkZs8-KuLoWEQMv44umlrjVWM0IfX8wQ5B3VHr11WVjnyXsJw0KThSOOr4waVKUfHuDSCmkX9FJqel-lwioBn0RADSsu4gJyBtOhoRGoU"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<span className="material-symbols-outlined text-white" >play_circle</span>
</div>
</div>
<div className="flex-1">
<h3 className="font-body-md text-body-md font-semibold text-on-background">Binaural Beats</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Alpha Waves • 45 Tracks</p>
</div>
</div>
{/*  Playlist Card 3  */}
<div className="flex items-center gap-4 p-4 glass-panel rounded-xl group active:scale-[0.98] transition-transform">
<div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="A stylized macro photography shot of an old vinyl record player, but with a futuristic neon twist. The light glows with a soft 'Tokyo Purple' luminescence against a matte black surface. This represents the blend of classic music appreciation with high-performance digital technology. The mood is sophisticated and intensely focused on the detail of the sound." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEDEmYHK-XFYnHW2On5PsjvNlhJwy2UmYMyAMVjZ188p4hjuKIQSn7jRggIVhArb2xHnih8iFRGVmySbReTeUurzWOIZDaumZRv_323oR6xhrldxfToGaLe1oRp4Fo9NZI-0GootBoMa6qI6ZI94-G9k_wn78jFr-CxC5L4qvz4ArgyB3iU9BFORaquqwfM_aU1TsfW7jdRaWpvx8A3mI2kPq4pe6yfHkf1mX0hVwo6kBh46IV9HC3GcK0KTzhshI7wl-vf2Wn67o"/>
<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<span className="material-symbols-outlined text-white" >play_circle</span>
</div>
</div>
<div className="flex-1">
<h3 className="font-body-md text-body-md font-semibold text-on-background">Nightly Rituals</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Slow Jazz &amp; Rain • 80 Tracks</p>
</div>
</div>
</div>
</section>
</main>
{/*  Floating Mini Player  */}
<div className="fixed bottom-20 left-4 right-4 z-40">
<div className="glass-panel p-3 rounded-2xl flex items-center gap-3 shadow-2xl border-primary/10">
<div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Digital wave art in neon purple and deep black, representing a pulsing audio track. The artwork is vibrant yet dark, centered on the idea of deep focus music. It has a high-quality glassmorphism effect and looks like a futuristic album cover for a lofi hip hop collection." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBArhEMmv7y9f91u2nPlEXeJKr7ccywqNrVYgBcn-LtMB3yvmzEwH479N2p8lLwWU4gjJu_rihfX3BuGaquzWq4dLbm3tqgiHx9jY2cnyqclxmrzMREreqEhb8p0ToXakD08Bm2PKd5M02GOkK--cAqD_Pp_NnzuQudGvF4wTlZmY_oeUzCw6gbKZf3OokhVgFHOXET9hC95pO2zTncRdpo-xVtyTAGdl2O7X_bfeZHJM_px0fDTaUZxTpZuNMuBItiY-1lzLVBPBg"/>
</div>
<div className="flex-1 overflow-hidden">
<h4 className="font-label-md text-label-md font-bold truncate text-on-background">Cyberpunk Dreams</h4>
<p className="font-label-sm text-[10px] text-on-surface-variant truncate">Night City Lofi</p>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-surface-variant">favorite</span>
<span className="material-symbols-outlined text-primary" >pause</span>
<span className="material-symbols-outlined text-on-surface-variant">close</span>
</div>
<div className="absolute bottom-0 left-0 h-0.5 bg-primary/30 w-full rounded-b-2xl overflow-hidden">
<div className="h-full bg-primary w-2/3 shadow-[0_0_8px_rgba(224,182,255,0.8)]"></div>
</div>
</div>
</div>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 w-full z-50 bg-background/80 backdrop-blur-xl flex justify-around items-center h-16 px-4 border-t border-outline-variant/10 shadow-[0_-4px_20px_rgba(157,78,221,0.1)]">
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-label-sm text-label-sm">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200" href="#">
<span className="material-symbols-outlined">library_music</span>
<span className="font-label-sm text-label-sm">Library</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200" href="#">
<span className="material-symbols-outlined">explore</span>
<span className="font-label-sm text-label-sm">Explore</span>
</a>
<a className="flex flex-col items-center justify-center text-primary bg-primary-container/20 rounded-xl px-3 py-1 active:scale-95 duration-200" href="#">
<span className="material-symbols-outlined">timer</span>
<span className="font-label-sm text-label-sm">Pomodoro</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</a>
</nav>

