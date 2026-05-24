import React from 'react';

export const Settings: React.FC = () => {
  return (
    <>
      
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

    </>
  );
};
