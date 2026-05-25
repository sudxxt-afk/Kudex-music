import React from 'react';
import { useTranslation } from 'react-i18next';

export const Settings: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      
<div className="max-w-4xl mx-auto space-y-12">
<header>
<h1 className="font-display-lg text-display-lg text-on-surface mb-2">{t('settings.title')}</h1>
<p className="font-body-lg text-on-surface-variant">{t('settings.subtitle')}</p>
</header>
{/*  Interface Section  */}
<section className="space-y-6">
<h2 className="font-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined">palette</span> {t('settings.interface')}
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="glass-panel rounded-xl p-6 flex flex-col justify-between h-40">
<div>
<h3 className="font-headline-sm text-lg text-on-surface mb-1">{t('settings.theme')}</h3>
<p className="font-label-md text-on-surface-variant">{t('settings.theme_desc')}</p>
</div>
<select className="custom-select w-full bg-surface-container-low border border-outline-variant text-on-surface font-body-md text-sm rounded-lg py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-primary transition-colors cursor-pointer">
<option defaultValue="tokyo-night" value="tokyo-night">Tokyo Night</option>
<option value="gruvbox">Gruvbox Dark</option>
<option value="oled">OLED Black</option>
</select>
</div>
<div className="glass-panel rounded-xl p-6 flex flex-col justify-between h-40">
<div>
<h3 className="font-headline-sm text-lg text-on-surface mb-1">{t('settings.language')}</h3>
<p className="font-label-md text-on-surface-variant">{t('settings.language_desc')}</p>
</div>
<div className="flex bg-surface-container-low rounded-lg p-1 border border-outline-variant">
<button onClick={() => i18n.changeLanguage('en')} className={`flex-1 py-1.5 font-label-md text-sm rounded-md transition-colors ${i18n.language === 'en' ? 'bg-surface-variant text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}>English</button>
<button onClick={() => i18n.changeLanguage('ru')} className={`flex-1 py-1.5 font-label-md text-sm rounded-md transition-colors ${i18n.language === 'ru' ? 'bg-surface-variant text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}>Русский</button>
</div>
</div>
</div>
</section>
{/*  Account Section  */}
<section className="space-y-6">
<h2 className="font-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined">shield_person</span> {t('settings.account')}
                </h2>
<div className="glass-panel rounded-xl overflow-hidden">
<div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
<span className="material-symbols-outlined text-primary text-2xl">send</span>
</div>
<div>
<h3 className="font-headline-sm text-lg text-on-surface">{t('settings.linked_id')}</h3>
<p className="font-body-md text-sm text-on-surface-variant font-mono mt-0.5">@user_kudex_77</p>
</div>
</div>
<button className="px-5 py-2 rounded-lg border border-outline-variant text-on-surface-variant font-label-md text-sm hover:bg-white/5 hover:text-on-surface transition-colors">
                            {t('settings.manage_connection')}
                        </button>
</div>
<div className="px-6 py-4 bg-white/[0.02] border-t border-white/5">
<button className="flex items-center gap-2 text-error hover:opacity-80 transition-opacity font-label-md text-sm font-bold">
<span className="material-symbols-outlined text-xl">logout</span>
                            {t('settings.logout')}
                        </button>
</div>
</div>
</section>
{/*  Quality & Network Section  */}
<section className="space-y-6">
<h2 className="font-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined">network_wifi</span> {t('settings.quality')}
                </h2>
<div className="space-y-4">
<div className="glass-panel rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div>
<h3 className="font-headline-sm text-lg text-on-surface mb-1">{t('settings.low_data')}</h3>
<p className="font-body-md text-sm text-on-surface-variant">{t('settings.low_data_desc')}</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="low-data-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant peer-checked:after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-300 after:ease-in-out peer-checked:bg-primary transition-colors duration-300 ease-in-out"></div>
</label>
</div>
<div className="glass-panel rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div>
<h3 className="font-headline-sm text-lg text-on-surface mb-1">{t('settings.audio_quality')}</h3>
<p className="font-body-md text-sm text-on-surface-variant">{t('settings.audio_quality_desc')}</p>
</div>
<select className="custom-select w-full sm:w-48 bg-surface-container-low border border-outline-variant text-on-surface font-body-md text-sm rounded-lg py-2.5 px-4 focus:outline-none cursor-pointer">
<option value="low">Low (64kbps)</option>
<option defaultValue="normal" value="normal">Normal (128kbps)</option>
<option value="high">High (320kbps)</option>
</select>
</div>
</div>
</section>
{/*  Storage Section  */}
<section className="space-y-6">
<h2 className="font-headline-sm text-primary flex items-center gap-2">
<span className="material-symbols-outlined">database</span> {t('settings.storage')}
                </h2>
<div className="glass-panel rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div>
<h3 className="font-headline-sm text-lg text-on-surface mb-1">{t('settings.cache')}</h3>
<p className="font-body-md text-sm text-on-surface-variant">{t('settings.cache_desc')}</p>
</div>
<button className="px-5 py-2 rounded-lg border border-outline-variant text-on-surface-variant font-label-md text-sm hover:border-error hover:text-error transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-xl">delete</span>
                        {t('settings.clear_cache')}
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
