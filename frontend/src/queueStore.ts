import { create } from 'zustand';
import { Track } from './types';

export interface QueueState {
  tracks: Track[];
  currentIndex: number;
  next: () => void;
  prev: () => void;
  addTrack: (track: Track) => void;
  clearQueue: () => void;
}

export const useQueueStore = create<QueueState>((set) => ({
  tracks: [],
  currentIndex: -1,

  next: () => set((state) => {
    if (state.tracks.length === 0) {
      return {};
    }
    // Зацикливание очереди при достижении конца
    const nextIndex = (state.currentIndex + 1) % state.tracks.length;
    return { currentIndex: nextIndex };
  }),

  prev: () => set((state) => {
    if (state.tracks.length === 0) {
      return {};
    }
    // Зацикливание очереди при достижении начала
    const prevIndex = (state.currentIndex - 1 + state.tracks.length) % state.tracks.length;
    return { currentIndex: prevIndex };
  }),

  addTrack: (track: Track) => set((state) => {
    const newTracks = [...state.tracks, track];
    // Если очередь была пуста, устанавливаем индекс на 0 (первый трек)
    const newIndex = state.currentIndex === -1 ? 0 : state.currentIndex;
    return {
      tracks: newTracks,
      currentIndex: newIndex
    };
  }),

  clearQueue: () => set({
    tracks: [],
    currentIndex: -1
  })
}));
