import { create } from 'zustand';

export interface PomodoroState {
  timeLeft: number;
  isRunning: boolean;
  mode: 'focus' | 'break';
  toggleTimer: () => void;
  resetTimer: () => void;
  setTime: (seconds: number) => void;
}

export const usePomodoroStore = create<PomodoroState>((set) => ({
  timeLeft: 25 * 60,
  isRunning: false,
  mode: 'focus',
  toggleTimer: () => set((state) => ({ isRunning: !state.isRunning })),
  resetTimer: () => set((state) => ({ timeLeft: state.mode === 'focus' ? 25 * 60 : 15 * 60, isRunning: false })),
  setTime: (seconds: number) => set({ timeLeft: seconds, isRunning: false }),
}));
