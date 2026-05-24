export interface ThemeVariables {
  '--bg-primary': string;
  '--bg-secondary': string;
  '--text-main': string;
  '--accent-color': string;
}

export type ThemeName = 'tokyo-night' | 'gruvbox' | 'hacking-green' | 'dark-coal';

export const themes: Record<ThemeName, ThemeVariables> = {
  'tokyo-night': {
    '--bg-primary': '#1a1b26',
    '--bg-secondary': '#24283b',
    '--text-main': '#c0caf5',
    '--accent-color': '#7aa2f7'
  },
  'gruvbox': {
    '--bg-primary': '#282828',
    '--bg-secondary': '#3c3836',
    '--text-main': '#ebdbb2',
    '--accent-color': '#fe8019'
  },
  'hacking-green': {
    '--bg-primary': '#0d0d0d',
    '--bg-secondary': '#1a1a1a',
    '--text-main': '#00ff00',
    '--accent-color': '#39ff14'
  },
  'dark-coal': {
    '--bg-primary': '#121212',
    '--bg-secondary': '#1e1e1e',
    '--text-main': '#e0e0e0',
    '--accent-color': '#a855f7'
  }
};
