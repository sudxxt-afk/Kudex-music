
{/*  Animated Particle Background  */}
<canvas id="particle-canvas"></canvas>
{/*  Top AppBar (Mobile)  */}
<header className="bg-background/40 backdrop-blur-md fixed top-0 w-full z-50 flex items-center justify-between px-6 h-16 transition-opacity">
<h1 className="font-display-lg-mobile text-display-lg-mobile font-black tracking-tighter text-primary">Kudex</h1>
<div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/20">
<img alt="Kudex Premium User" className="w-full h-full object-cover" data-alt="A professional, high-quality portrait of a young adult with a creative and tech-savvy appearance, set against a dark, minimalist background. The lighting is dramatic and moody, with subtle purple rim light that aligns with a high-end music streaming app's aesthetic. The subject has a confident expression, suggesting a premium user experience." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAYCVkBMO0UPyREiXB5ApJiqdGUpmiknYPNZQdN8PflRmjnRB7AfdQ5yrUo3cZMUYDZFIt82716CvuQ9mEuT8RBBe1oWL10iW8uxfGQO8R10q-gm6hNKQkQElvTthqe8t1i9E9kac9cG4cprUNvYYWI-wLriTZHQKOqLggmQ66QeuqRDi2WzCvYlK9gbpbaGzN6wDoB2TeBEnH72dFLOD6kvgUHVGw5HtEpHpcVG_rOPQoRoY7kkCuL8s1_sAHKOoEc-0h1dnf7Hs"/>
</div>
</header>
{/*  Main Content Canvas  */}
<main className="mt-16 px-6 pt-6 flex-1 max-w-lg mx-auto w-full relative z-10">
{/*  Search Header  */}
<section className="mb-8">
<div className="relative search-glow transition-all duration-300 rounded-xl overflow-hidden border border-outline-variant/30 bg-surface-container-lowest h-14 flex items-center px-4">
<span className="material-symbols-outlined text-on-surface-variant mr-3">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md font-body-md w-full placeholder:text-on-surface-variant/50" placeholder="Artists, songs, or podcasts" type="text"/>
</div>
</section>
{/*  Categories Bento Grid  */}
<section className="mb-10">
<h2 className="font-headline-sm text-headline-sm mb-4">Browse All</h2>
<div className="grid grid-cols-2 gap-4">
{/*  Synthwave  */}
<div className="relative h-28 rounded-xl overflow-hidden glass-card group cursor-pointer active:scale-95 transition-transform duration-200">
<div className="absolute inset-0 bg-gradient-to-br from-[#ff00ff]/40 to-transparent z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A vibrant and cinematic synthwave landscape at dusk, featuring a retro-futuristic grid, glowing neon sun, and digital mountains. The color palette is dominated by electric purples, deep pinks, and midnight blues. The lighting is atmospheric and hazy, reflecting a high-tech, 80s-inspired musical aesthetic suitable for a modern streaming platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW2pglBP_vNax9wNrPH7FeKAQtJ66Iee_uxh-L55bTCZs8uZCnEzjsrbNLaOz4SL1FJvQN5bXdEsXGKajwr2hCRlZ1XXOtEwhM9pFaC1v85dg13d-AmT96VPMMLVCqgidpm7VRhsYpw8EoV-M5udMtid3fUXVbVg6he-Nt_FCk6jQ6sxygEELBnUp75X0XUeJjaGEkHxJTqbMGvJY22o3RP5phsiawPu_mfBLhSecFKgjJ5iaf4k6pIU3hU-gP9djfSbTLWjSA8nU"/>
<span className="absolute bottom-3 left-3 z-20 font-label-md text-label-md text-white font-bold">Synthwave</span>
</div>
{/*  Lo-Fi  */}
<div className="relative h-28 rounded-xl overflow-hidden glass-card group cursor-pointer active:scale-95 transition-transform duration-200">
<div className="absolute inset-0 bg-gradient-to-br from-[#9d4edd]/40 to-transparent z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A cozy, dim-lit study room at night with a single warm lamp illuminating a desk with a notebook and a steaming cup of coffee. Outside the window, soft raindrops blur the city lights. The aesthetic is grainy and nostalgic, capturing the calm, focused essence of lo-fi hip hop music. The colors are muted browns, warm ambers, and soft shadows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAshLPO5T-x6DeCr2NWomdwehHPUeMDqeqqxtwtv4sHus73-jDjLcbEwIA-1C8S1e1L2euG3GW_RaBClg-HRzhYtAu3T8yXBUeW9tsHQ6eo-9TRE-jgA4E8P8t__tIK6pC4MXx-v66rmW253FYRlnQ21NaakG64lkJ3jw69SbtQL3pjLxcOssOcQHn0cFiWDiwPqaXz_cZzPUeDpi2yTpfJZqhmAMbdBWBmsYlK8SXtsbMn3aDYY39VJheNF5cgurTvt-gYd2a2SMI"/>
<span className="absolute bottom-3 left-3 z-20 font-label-md text-label-md text-white font-bold">Lo-Fi</span>
</div>
{/*  Techno  */}
<div className="relative h-28 rounded-xl overflow-hidden glass-card group cursor-pointer active:scale-95 transition-transform duration-200">
<div className="absolute inset-0 bg-gradient-to-br from-[#00e639]/40 to-transparent z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="An underground warehouse techno party with strobe lights piercing through a thick layer of haze and smoke. The silhouettes of a dense crowd are visible against sharp, cold white and green laser beams. The atmosphere is industrial and high-energy, with a dark, gritty aesthetic. High contrast lighting highlights the mechanical and raw nature of the techno scene." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMixKvCd7ToyGvasv9hgrF3UBLm5r9wufnvnqySDlgatLXEdOpm1hA68i-lzhYLeliMC6YObRwU5ZILRTvRKV293cgRBSnTbISve48y13tyR4YqdkKtY3l6YWGZGW9-g2X6LhKLMnv3pJCX-guXMbv6rbw8uw5NVakPAE4WgLRGduh_Oq4CWWVWvuucRFdUepspZkfdsuchhJhENJnA1eWpurL_l3buvljtimHEEVGT07V9la6Ard0DYB1hnL0y5VNKgOLRuDPgXQ"/>
<span className="absolute bottom-3 left-3 z-20 font-label-md text-label-md text-white font-bold">Techno</span>
</div>
{/*  Jazz  */}
<div className="relative h-28 rounded-xl overflow-hidden glass-card group cursor-pointer active:scale-95 transition-transform duration-200">
<div className="absolute inset-0 bg-gradient-to-br from-[#ffba27]/40 to-transparent z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A close-up shot of a polished brass saxophone being played in a dimly lit, smoky jazz club. The lighting is warm and golden, catching the reflections on the instrument's surface. The background is a soft-focus blur of deep mahogany and warm stage lights. The mood is sophisticated, soulful, and intimate, embodying the timeless spirit of jazz music." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyA_8BkYIIHtLShJGeOk7yIHD08XzVXub1PmAAPJOxZYOkgLx31b5VHHTGu8r75d1p-OhY_aPCeqPJVf5Aab0KBXxuxqJFpMxSrA68lcEJRxGYNiOHU1qq0olPPj332BUl1L6mSli8PdbfclLH8hf4-hR5c9fTJfOadOz6_cLepQTgFzNNroXHrNtsR5GyvkNAqnGQwZTEsJ1mCqyJ8NXpqUU3YC0RsiMbLlsyQj3vLrVjCadd69wSc-gYonPr-Tbx0YMzqtYjwn4"/>
<span className="absolute bottom-3 left-3 z-20 font-label-md text-label-md text-white font-bold">Jazz</span>
</div>
</div>
</section>
{/*  Trending Now  */}
<section className="mb-10">
<div className="flex items-center justify-between mb-4">
<h2 className="font-headline-sm text-headline-sm">Trending Now</h2>
<button className="text-primary font-label-sm text-label-sm uppercase tracking-widest">See All</button>
</div>
<div className="space-y-4">
{/*  Track 1  */}
<div className="flex items-center group cursor-pointer p-2 -mx-2 rounded-xl hover:bg-surface-container-high transition-colors">
<div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Abstract album art featuring fluid, metallic silver shapes swirling in a void of deep obsidian and electric violet. The textures are glossy and reflective, catching sharp highlights like liquid mercury under neon lights. The overall mood is avant-garde, dark, and technologically sophisticated, representing high-fidelity electronic music." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB92M-10Y5FCao40b20Eut5P_pxL4YrECJX6SKcDXsQYEDD08s-_hLddn18KnxV809BE_5fwunRLdhbQj_UpB1lvusrB6CIFOGUXJ7zQ5AZjkD2z0ELb9E5LosnGBHHW-_s00y_97NMdHFjj6aSe4TwVOn-duunM4O_N8eXWXPS3xQ3W2i-pPAwGk5F7TfEuJ8G08qLWTS4NKBi89vNbfAkvA-Qxo_zVC9r17tV3K2W50N4CV3oXsA49HzuQM_M2jDSt2Fwpaf2aFE"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<span className="material-symbols-outlined text-white" >play_arrow</span>
</div>
</div>
<div className="ml-4 flex-1">
<h3 className="font-body-md text-body-md font-bold text-on-surface truncate">Cybernetic Dreams</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant truncate">Neon Architect • Ultra-fidelity</p>
</div>
<div className="text-on-surface-variant flex items-center">
<span className="material-symbols-outlined mr-4">favorite</span>
<span className="material-symbols-outlined">more_vert</span>
</div>
</div>
{/*  Track 2  */}
<div className="flex items-center group cursor-pointer p-2 -mx-2 rounded-xl hover:bg-surface-container-high transition-colors">
<div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover" data-alt="Modernist album cover featuring a minimal geometric composition of overlapping circles and lines in muted slate gray, Tokyo purple, and charcoal. The design is clean and balanced, with a subtle grainy texture that gives it a professional, high-end print feel. The mood is intellectual and calm, perfect for deep-focus techno or experimental ambient tracks." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyWi6fc4pdxKbPzEPlqUSDYfFWwM_bMGsJLGHND9vpslMbxehd25VnRc9Tvr2SvEt3azfCKbe54SLgS4oITrKCG5O7OhlPFDszNUzm1F4TJubVHM8dlcnOiZzeCgN1Cp-hcaX0s1YiC2n1y7ZdgMzgCyVzRUaG0dVzoy1toU_dzOigjAk55FFGrjTaPUx3ublx8DtSJu6W74BqAJdYnKWQx_uq1FDKbsbzIl7GlkdIG5OetrIWe9vF773lZlxZKcTC7P7qNfy7BBo"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<span className="material-symbols-outlined text-white" >play_arrow</span>
</div>
</div>
<div className="ml-4 flex-1">
<h3 className="font-body-md text-body-md font-bold text-on-surface truncate">Midnight Algorithm</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant truncate">Digital Nomad • Single</p>
</div>
<div className="text-on-surface-variant flex items-center">
<span className="material-symbols-outlined mr-4">favorite</span>
<span className="material-symbols-outlined">more_vert</span>
</div>
</div>
</div>
</section>
</main>
{/*  Floating Mini Player (Anchored above Nav)  */}
<div className="fixed bottom-20 left-4 right-4 z-40">
<div className="bg-surface-container-high/90 backdrop-blur-2xl border border-white/5 rounded-2xl h-16 flex items-center px-3 shadow-2xl">
<div className="w-10 h-10 rounded-lg overflow-hidden mr-3">
<img className="w-full h-full object-cover" data-alt="Album art of Cybernetic Dreams featuring fluid metallic shapes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYNCzZ1FgLNHhusLRabrC9jIrNhCplqm3FA8iUWZjVjWMKskoKjhx9u8sq-6k9i1NqUy8LeDcot5LVx-NtD7aLGq-qpGQFuUTPhOnRckUPoi7zDpcjbeVYIB9suMU-zkKa40wFxd-uoLk8WRWbHyM1NtWaAHriM5UnPl-0-NdbOst7xoEiWxTGoJhNBmOX9OEaQxtHA5sqvVIomZkrg_D5O_7qzduzPja81N7WVmcOoJ_X-Tf5AclBmEtU_e05lnRSPQMKPnDLUrw"/>
</div>
<div className="flex-1 overflow-hidden">
<div className="font-label-md text-label-md font-bold text-on-surface truncate">Cybernetic Dreams</div>
<div className="font-label-sm text-label-sm text-primary flex items-center">
<span className="mr-1">Now Playing</span>
<span className="w-1 h-3 bg-primary animate-pulse inline-block mx-0.5"></span>
<span className="w-1 h-2 bg-primary animate-pulse inline-block mx-0.5" ></span>
<span className="w-1 h-4 bg-primary animate-pulse inline-block mx-0.5" ></span>
</div>
</div>
<div className="flex items-center space-x-4 pr-1">
<span className="material-symbols-outlined text-on-surface" >skip_next</span>
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined" >pause</span>
</div>
</div>
{/*  Simple Progress Line  */}
<div className="absolute bottom-0 left-3 right-3 h-0.5 bg-outline-variant/20 overflow-hidden rounded-full">
<div className="h-full bg-gradient-to-r from-primary to-secondary-container w-1/3"></div>
</div>
</div>
</div>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 w-full z-50 bg-background/80 backdrop-blur-xl border-t border-outline-variant/10 shadow-[0_-4px_20px_rgba(157,78,221,0.1)] flex justify-around items-center h-16 px-4">
{/*  Home  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-label-sm text-label-sm">Home</span>
</a>
{/*  Library  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200" href="#">
<span className="material-symbols-outlined">library_music</span>
<span className="font-label-sm text-label-sm">Library</span>
</a>
{/*  Explore (Active)  */}
<a className="flex flex-col items-center justify-center text-primary bg-primary-container/20 rounded-xl px-3 py-1 active:scale-95 duration-200" href="#">
<span className="material-symbols-outlined" >explore</span>
<span className="font-label-sm text-label-sm">Explore</span>
</a>
{/*  Pomodoro  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200" href="#">
<span className="material-symbols-outlined">timer</span>
<span className="font-label-sm text-label-sm">Pomodoro</span>
</a>
{/*  Settings  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 duration-200" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</a>
</nav>

