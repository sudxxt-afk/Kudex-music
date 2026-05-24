import { create } from 'zustand';

export interface PomodoroState {
  timeLeft: number;
  isActive: boolean;
  duration: number;
  setDuration: (minutes: number) => void;
  start: () => void;
  pause: () => void;
  reset: () => void;
  tick: () => void;
}

export const usePomodoroStore = create<PomodoroState>((set) => ({
  timeLeft: 25 * 60,
  isActive: false,
  duration: 25 * 60,
  setDuration: (minutes: number) => set({
    duration: minutes * 60,
    timeLeft: minutes * 60,
    isActive: false
  }),
  start: () => set({ isActive: true }),
  pause: () => set({ isActive: false }),
  reset: () => set((state) => ({ timeLeft: state.duration, isActive: false })),
  tick: () => set((state) => {
    if (state.timeLeft > 0 && state.isActive) {
      return { timeLeft: state.timeLeft - 1 };
    }
    return {};
  })
}));
