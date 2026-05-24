
{/*  Ambient Background  */}
<div className="neon-orb orb-purple"></div>
<div className="neon-orb orb-amber"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0B_100%)] z-0"></div>
{/*  Main Content Canvas  */}
<main className="relative z-10 w-full max-w-[440px] px-gutter">
{/*  Login Card  */}
<div className="glass-card rounded-xl p-10 flex flex-col items-center text-center">
{/*  Branding  */}
<div className="mb-8">
<div className="flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-primary text-[48px] logo-glow" data-icon="music_cast">music_cast</span>
</div>
<h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg tracking-tighter text-on-surface">
                    KUDEX
                </h1>
<p className="font-label-md text-on-surface-variant uppercase tracking-[0.2em] mt-2">
                    Your Music, Sync'd
                </p>
</div>
{/*  Login Section  */}
<div className="w-full space-y-6">
<p className="font-body-md text-on-surface-variant px-4">
                    Experience seamless audio across all your devices with high-fidelity streaming.
                </p>
<button className="btn-gradient w-full flex items-center justify-center gap-3 py-4 rounded-lg font-label-md text-on-primary-container shadow-xl">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.19 15.51 15.96C15.37 16.71 15.09 16.96 14.82 16.99C14.24 17.04 13.8 16.6 13.23 16.23C12.35 15.65 11.85 15.29 11 14.73C10.02 14.08 10.65 13.72 11.21 13.14C11.36 12.99 13.92 10.66 13.97 10.45C13.98 10.42 13.98 10.32 13.92 10.27C13.86 10.22 13.77 10.24 13.71 10.25C13.62 10.27 12.27 11.16 9.66 12.92C9.28 13.18 8.93 13.31 8.62 13.3C8.27 13.29 7.61 13.11 7.11 12.94C6.5 12.75 6.02 12.64 6.06 12.3C6.08 12.13 6.32 11.95 6.77 11.77C9.57 10.55 11.45 9.75 12.41 9.35C15.13 8.21 15.7 8.01 16.07 8.01C16.15 8.01 16.33 8.03 16.45 8.13C16.55 8.21 16.58 8.32 16.59 8.4C16.6 8.47 16.65 8.64 16.64 8.8Z" fill="white"></path>
</svg>
                    Log in with Telegram
                </button>
<div className="flex items-center gap-4 py-2">
<div className="h-[1px] flex-1 bg-white/10"></div>
<span className="font-label-sm text-on-surface-variant">OR</span>
<div className="h-[1px] flex-1 bg-white/10"></div>
</div>
<div className="grid gap-4 grid-cols-1">
<button className="flex items-center justify-center gap-2 py-3 border border-white/5 rounded-lg font-label-sm text-on-surface hover:bg-white/5 transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="qr_code_scanner">qr_code_scanner</span>
                        QR Code
                    </button>
</div>
</div>
{/*  Footer Links  */}
<div className="mt-10 flex flex-col gap-4">
<a className="font-label-sm text-primary hover:text-primary-fixed-dim transition-colors" href="#">
                    Create a Kudex Account
                </a>
<p className="font-label-sm text-on-surface-variant opacity-60">
                    By continuing, you agree to Kudex’s <br/>
<span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
                </p>
</div>
</div>
{/*  App Store Badges (Optional / Contextual)  */}
<div className="mt-8 flex justify-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined cursor-pointer hover:text-primary" data-icon="phone_iphone">phone_iphone</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary" data-icon="laptop_mac">laptop_mac</span>
</div>
</main>
{/*  Visual Atmosphere: Interactive Cursor Light  */}
<div className="fixed w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 opacity-0" id="cursor-glow"></div>

