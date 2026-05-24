
{/*  Background Atmospheric Layer  */}
<div className="bg-animate">
<div className="floating-blob w-[600px] h-[600px] -top-20 -left-20"></div>
<div className="floating-blob w-[500px] h-[500px] bottom-0 right-0" ></div>
</div>
{/*  Top Navigation (Shell)  */}
<nav className="fixed top-0 right-0 w-[calc(100%-280px)] h-16 flex items-center justify-between px-gutter z-30 bg-surface/80 backdrop-blur-xl">
<div className="flex items-center gap-4">
<span className="font-display-lg text-headline-sm font-black text-primary">Melodix</span>
<div className="h-6 w-px bg-white/10 mx-2"></div>
<span className="font-label-md text-label-md text-on-surface-variant">Focus Timer</span>
</div>
<div className="flex items-center gap-gutter">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors" data-icon="account_circle">account_circle</span>
</div>
</div>
</nav>
{/*  Side Navigation (Shell)  */}
<aside className="fixed left-0 top-0 h-full w-sidebar-width flex flex-col py-margin-page z-40 bg-surface-container border-r border-white/5">
<div className="px-6 mb-12">
<h1 className="font-display-lg text-display-lg font-black text-primary leading-none">Melodix</h1>
<p className="font-label-md text-label-md text-on-surface-variant mt-2 uppercase tracking-widest">Premium Audio</p>
</div>
<nav className="flex-1 px-2 space-y-2">
<a className="flex items-center py-3 px-5 text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors rounded-lg group" href="#">
<span className="material-symbols-outlined mr-4 group-hover:text-primary" data-icon="search">search</span>
<span className="font-label-md text-label-md">Search</span>
</a>
<a className="flex items-center py-3 px-5 text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors rounded-lg group" href="#">
<span className="material-symbols-outlined mr-4 group-hover:text-primary" data-icon="library_music">library_music</span>
<span className="font-label-md text-label-md">Media Library</span>
</a>
<a className="flex items-center py-3 px-5 text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors rounded-lg group" href="#">
<span className="material-symbols-outlined mr-4 group-hover:text-primary" data-icon="playlist_play">playlist_play</span>
<span className="font-label-md text-label-md">Playlists</span>
</a>
<a className="flex items-center py-3 px-5 text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors rounded-lg group" href="#">
<span className="material-symbols-outlined mr-4 group-hover:text-primary" data-icon="favorite">favorite</span>
<span className="font-label-md text-label-md">Liked Songs</span>
</a>
<div className="pt-8 px-5">
<button className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all">
                    New Playlist
                </button>
</div>
</nav>
<div className="px-2 mt-auto">
<a className="flex items-center py-3 px-5 text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors rounded-lg" href="#">
<span className="material-symbols-outlined mr-4" data-icon="settings">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</div>
</aside>
{/*  Main Content Area  */}
<main className="ml-[280px] mt-16 mb-[96px] h-[calc(100vh-160px)] overflow-y-auto px-margin-page pb-12">
<div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-full py-12">
{/*  Timer Section  */}
<div className="relative flex flex-col items-center justify-center mb-section-gap">
<p className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-6">Focus Session</p>
{/*  Circular Timer  */}
<div className="relative w-80 h-80 flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full -rotate-90">
<circle className="text-surface-container-highest" cx="160" cy="160" fill="transparent" r="150" stroke="currentColor" strokeWidth="8"></circle>
<circle className="timer-ring" cx="160" cy="160" fill="transparent" id="progress-circle" r="150" stroke="url(#timer-gradient)" stroke-dasharray="942" stroke-dashoffset="0" strokeLinecap="round" strokeWidth="12"></circle>
<defs>
<linearGradient id="timer-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#e0b6ff"></stop>
<stop offset="100%" stop-color="#9d4edd"></stop>
</linearGradient>
</defs>
</svg>
{/*  Glow effect container  */}
<div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(157,78,221,0.15)] -z-10"></div>
<div className="text-center">
<h2 className="font-display-lg text-[84px] font-extrabold tracking-tighter text-on-surface" id="timer-display">25:00</h2>
<div className="flex gap-4 justify-center mt-4">
<button className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-primary/20" id="toggle-timer">
<span className="material-symbols-outlined text-3xl" data-icon="play_arrow">play_arrow</span>
</button>
<button className="w-14 h-14 bg-surface-container-high border border-white/5 text-on-surface rounded-full flex items-center justify-center hover:bg-surface-bright active:scale-95 transition-all" id="reset-timer">
<span className="material-symbols-outlined text-2xl" data-icon="replay">replay</span>
</button>
</div>
</div>
</div>
{/*  Presets  */}
<div className="flex gap-3 mt-12">
<button className="px-6 py-2 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-label-md font-label-md" onclick="setTimer(25)">25 min</button>
<button className="px-6 py-2 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-label-md font-label-md" onclick="setTimer(50)">50 min</button>
<button className="px-6 py-2 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-label-md font-label-md text-tertiary" onclick="setTimer(15)">15 min Break</button>
</div>
</div>
{/*  Integrated Playlists  */}
<div className="w-full">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Integrated Study Playlists</h3>
<a className="text-primary font-label-md text-label-md hover:underline" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Card 1  */}
<div className="glass-panel p-4 rounded-xl group cursor-pointer hover:shadow-2xl hover:shadow-primary/5 transition-all">
<div className="aspect-square rounded-lg mb-4 overflow-hidden relative">
<img alt="Lo-Fi Study Beats" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A moody, cinematic photograph of a desk with a warm desk lamp lighting an open book and a pair of high-end headphones. The background is a dark room with subtle purple neon light reflecting off a window. The atmosphere is quiet, focused, and scholarly. Minimalist aesthetics with deep blacks and rich indigo tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv7XfKLDh0kFPBhBGj9pgX2YYAFrSRBkCtBeVRM7p8JKj_ymX9r3wtYXSQHtqbfHFf9G2HIVxc0j4dcODxoOSSvL22Itrb0X10679PextiAK3oU3R2_-fxPOhjOeaAMb5Ojw5whfi8YoOQeiFomnBdk_k2jtCWnT6dlHrtE9YxtjwFUBL4fEgPyImc3JZr6YLP3atW_jphLjIPFKQ_VMis0BVOQfiG0GZnTYvBPkxMKmyVvNji2XrEL37nZbKCwaH4ZC7SkwQcOjM" />
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<span className="material-symbols-outlined text-white text-4xl" data-icon="play_circle" >play_circle</span>
</div>
</div>
<h4 className="font-headline-sm text-body-md text-on-surface truncate">Deep Focus Techno</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Instrumental / 120 BPM</p>
<button className="w-full mt-4 flex items-center justify-center gap-2 py-2 rounded-lg border border-primary/20 text-primary font-label-sm text-label-sm hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="sync">sync</span>
                            Sync with Timer
                        </button>
</div>
{/*  Card 2  */}
<div className="glass-panel p-4 rounded-xl group cursor-pointer hover:shadow-2xl hover:shadow-primary/5 transition-all">
<div className="aspect-square rounded-lg mb-4 overflow-hidden relative">
<img alt="Ambient Flows" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A clean, minimalist 3D rendering of floating geometric shapes in a soft purple mist. The style is modern glassmorphism with frosted textures and sharp white highlights. High-key lighting creates a dreamlike, ethereal vibe perfect for ambient music covers. Cohesive color palette of violet, obsidian, and silver." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHp3P32NMYF-vQQLa9F0PbbNomlpT4-n9S7RKTAiBc6Z2E3t2WvucW2bSxQ7qzsS1O9EfDgibjS14IPXmoKATux4oGTFsZKlK2FP5dq2NFDjTvJBEeZOMrmUQudu2E34ZC3rsr58o0J0HpN8mrRshDeJ65kgUTzXVDbOh9VxH6XYKCKC3E_J4SWGz0V9UMZmH9CdrdQTCWgV-SPN9-BB5QtNFtyq8HNd1F5S21U34SXxpxaHemLQruNTBtSIXZUEIQJZHou7z37Ps" />
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<span className="material-symbols-outlined text-white text-4xl" data-icon="play_circle" >play_circle</span>
</div>
</div>
<h4 className="font-headline-sm text-body-md text-on-surface truncate">Ethereal Ambience</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Generative / Soundscapes</p>
<button className="w-full mt-4 flex items-center justify-center gap-2 py-2 rounded-lg border border-primary/20 text-primary font-label-sm text-label-sm hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="sync">sync</span>
                            Sync with Timer
                        </button>
</div>
{/*  Card 3  */}
<div className="glass-panel p-4 rounded-xl group cursor-pointer hover:shadow-2xl hover:shadow-primary/5 transition-all">
<div className="aspect-square rounded-lg mb-4 overflow-hidden relative">
<img alt="Synth Concentration" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Close up shot of a retro-futuristic audio synthesizer with glowing green and purple LED buttons in a dark studio. The knobs and faders are sharp and metallic. Moody, tech-forward aesthetic with shallow depth of field. The lighting is dominated by primary purple and hacker green neon accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCggz3cX3wMMzbKgsLkiQf6UN6cMf1M2z7cSJWPkCG3rfwsdC0yG2xP6hHl_3klgR0t6ry57OKTnKHsvs80-HD_7xvmgY4KgXFg8w7JKRweDVxXkQjZvF8LRh6_X4-71ls4OUK50Sxcy7f74Ol4yRThtqzl2J6E4t4C1_ISCo7kAJVNQWhmEkVKfq2r4R7DoibZHIPpkm15SnvN2MppS4d8eZNy3RWQfRINBU24a9HJ7Mkty6WK6Td6u6c1ecrQZZmk7HltIB22VmI" />
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<span className="material-symbols-outlined text-white text-4xl" data-icon="play_circle" >play_circle</span>
</div>
</div>
<h4 className="font-headline-sm text-body-md text-on-surface truncate">Flow State Tracks</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Electronic / 90 BPM</p>
<button className="w-full mt-4 flex items-center justify-center gap-2 py-2 rounded-lg border border-primary/20 text-primary font-label-sm text-label-sm hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="sync">sync</span>
                            Sync with Timer
                        </button>
</div>
</div>
</div>
</div>
</main>
{/*  Bottom Player Bar (Shell)  */}
<footer className="fixed bottom-0 left-0 w-full h-player-height z-50 flex items-center justify-between px-gutter bg-surface-container-high/95 backdrop-blur-2xl border-t border-white/10">
{/*  Now Playing  */}
<div className="flex items-center gap-4 w-1/3">
<div className="w-14 h-14 rounded bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A macro shot of a iridescent vinyl record spinning on a high-end turntable. The surface of the record reflects vibrant streaks of purple, blue, and pink light. Sophisticated dark mode vibe with sharp details and luxurious textures. Lighting is low-key and dramatic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQHVoxyktu_z9VxbanRg0zIe9YXntiSML1hvZtv0skObM9qjcA5z9KKoztSR1WZmTZ95FxgPZy18_Il-z792L5FfHcrC4NletMqiFnB14yq_3XaG5U7JbeFVXzOqYY_CT_qJAkxUStwWOi8yDhtA9sNazqAVoRy9cPofK0gH5L3mrN2ZsLRwHZvCO_j1PgySEHCXcz1qcAGpZhkL0KMYBLcFD-lvGOyUL4NoEbt8VfZ239Ub0OQuEnjOgyA_Ooxp0pUPPy9nLAJqI" />
</div>
<div>
<p className="font-body-md text-body-md text-on-surface font-semibold truncate">Lumina Drift</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Focus Artist</p>
</div>
<span className="material-symbols-outlined text-primary ml-2" data-icon="favorite" >favorite</span>
</div>
{/*  Player Controls  */}
<div className="flex flex-col items-center gap-2 w-1/3">
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-on-surface-variant hover:text-on-surface cursor-pointer text-xl" data-icon="shuffle">shuffle</span>
<span className="material-symbols-outlined text-on-surface-variant hover:text-on-surface cursor-pointer text-2xl" data-icon="skip_previous">skip_previous</span>
<button className="w-10 h-10 bg-on-surface text-surface rounded-full flex items-center justify-center hover:scale-110 transition-transform">
<span className="material-symbols-outlined" data-icon="pause" >pause</span>
</button>
<span className="material-symbols-outlined text-on-surface-variant hover:text-on-surface cursor-pointer text-2xl" data-icon="skip_next">skip_next</span>
<span className="material-symbols-outlined text-on-surface-variant hover:text-on-surface cursor-pointer text-xl" data-icon="repeat">repeat</span>
</div>
<div className="w-full flex items-center gap-2 max-w-md">
<span className="font-label-sm text-label-sm text-on-surface-variant">2:14</span>
<div className="h-1 bg-white/10 flex-1 rounded-full overflow-hidden group cursor-pointer relative">
<div className="h-full bg-gradient-to-r from-primary to-primary-container w-[60%] rounded-full"></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">3:45</span>
</div>
</div>
{/*  Volume/Tools  */}
<div className="flex items-center justify-end gap-4 w-1/3">
<span className="material-symbols-outlined text-primary" data-icon="timer">timer</span>
<span className="material-symbols-outlined text-on-surface-variant hover:text-on-surface cursor-pointer" data-icon="lyrics">lyrics</span>
<span className="material-symbols-outlined text-on-surface-variant hover:text-on-surface cursor-pointer" data-icon="queue_music">queue_music</span>
<div className="flex items-center gap-2 w-24">
<span className="material-symbols-outlined text-on-surface-variant text-sm" data-icon="volume_up">volume_up</span>
<div className="h-1 bg-white/10 flex-1 rounded-full">
<div className="h-full bg-on-surface-variant w-1/2 rounded-full"></div>
</div>
</div>
</div>
</footer>

