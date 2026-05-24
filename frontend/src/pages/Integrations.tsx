import React from 'react';

export const Integrations: React.FC = () => {
  return (
    <>
      
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

    </>
  );
};
