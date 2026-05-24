import { create } from 'zustand';
import { Track } from '../types';

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  setTrack: (track: Track) => void;
  setVolume: (volume: number) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  currentTrack: null,
  isPlaying: false,
  volume: 1.0,
  play: () => set({ isPlaying: true }),
  pause: () => set({ isPlaying: false }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setTrack: (track) => set({ currentTrack: track, isPlaying: true }),
  setVolume: (volume) => set({ volume }),
}));
