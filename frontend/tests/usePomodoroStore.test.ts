import { usePomodoroStore } from '../src/store/usePomodoroStore';

describe('Pomodoro Store', () => {
  beforeEach(() => {
    usePomodoroStore.getState().reset();
    usePomodoroStore.getState().pause();
  });

  it('should decrease timeLeft on tick when active', () => {
    const store = usePomodoroStore.getState();
    store.start();
    const initialTime = store.timeLeft;
    
    usePomodoroStore.getState().tick();
    
    expect(usePomodoroStore.getState().timeLeft).toBe(initialTime - 1);
  });

  it('should not decrease timeLeft when paused', () => {
    const store = usePomodoroStore.getState();
    store.pause();
    const initialTime = store.timeLeft;
    
    usePomodoroStore.getState().tick();
    
    expect(usePomodoroStore.getState().timeLeft).toBe(initialTime);
  });

  it('should change duration', () => {
    const store = usePomodoroStore.getState();
    store.setDuration(50);
    
    expect(usePomodoroStore.getState().duration).toBe(50 * 60);
    expect(usePomodoroStore.getState().timeLeft).toBe(50 * 60);
  });
});
