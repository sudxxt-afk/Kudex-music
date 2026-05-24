import { useQueueStore } from '../src/queueStore';
import { Track } from '../src/types';

describe('QueueStore (QueueManager)', () => {
  const track1: Track = {
    id: 't1',
    title: 'Song One',
    artist: 'Artist One',
    sourceId: 's1',
    sourceName: 'youtube'
  };

  const track2: Track = {
    id: 't2',
    title: 'Song Two',
    artist: 'Artist Two',
    sourceId: 's2',
    sourceName: 'spotify'
  };

  const track3: Track = {
    id: 't3',
    title: 'Song Three',
    artist: 'Artist Three',
    sourceId: 's3',
    sourceName: 'soundcloud'
  };

  beforeEach(() => {
    // Сбрасываем очередь перед каждым тестом
    useQueueStore.getState().clearQueue();
  });

  test('should initialize with empty queue', () => {
    const state = useQueueStore.getState();
    expect(state.tracks).toEqual([]);
    expect(state.currentIndex).toBe(-1);
  });

  test('should add track and set currentIndex to 0 if it was empty', () => {
    useQueueStore.getState().addTrack(track1);

    const state = useQueueStore.getState();
    expect(state.tracks).toHaveLength(1);
    expect(state.tracks[0]).toEqual(track1);
    expect(state.currentIndex).toBe(0);
  });

  test('should add track and keep currentIndex unchanged if not empty', () => {
    useQueueStore.getState().addTrack(track1);
    useQueueStore.getState().addTrack(track2);

    const state = useQueueStore.getState();
    expect(state.tracks).toHaveLength(2);
    expect(state.currentIndex).toBe(0);
  });

  test('should increase index on next()', () => {
    useQueueStore.getState().addTrack(track1);
    useQueueStore.getState().addTrack(track2);
    useQueueStore.getState().addTrack(track3);

    // Текущий индекс 0.
    useQueueStore.getState().next();
    expect(useQueueStore.getState().currentIndex).toBe(1);

    useQueueStore.getState().next();
    expect(useQueueStore.getState().currentIndex).toBe(2);
  });

  test('should loop index to 0 when next() is called at the end of queue', () => {
    useQueueStore.getState().addTrack(track1);
    useQueueStore.getState().addTrack(track2);

    // Индекс 0.
    useQueueStore.getState().next(); // Индекс 1 (конец)
    expect(useQueueStore.getState().currentIndex).toBe(1);

    useQueueStore.getState().next(); // Зацикливание -> индекс 0
    expect(useQueueStore.getState().currentIndex).toBe(0);
  });

  test('should loop index to end when prev() is called at index 0', () => {
    useQueueStore.getState().addTrack(track1);
    useQueueStore.getState().addTrack(track2);
    useQueueStore.getState().addTrack(track3);

    // Индекс 0 (начало)
    useQueueStore.getState().prev(); // Зацикливание в обратную сторону -> индекс 2 (конец)
    expect(useQueueStore.getState().currentIndex).toBe(2);

    useQueueStore.getState().prev(); // Индекс 1
    expect(useQueueStore.getState().currentIndex).toBe(1);
  });

  test('should clear queue and reset index', () => {
    useQueueStore.getState().addTrack(track1);
    useQueueStore.getState().clearQueue();

    const state = useQueueStore.getState();
    expect(state.tracks).toEqual([]);
    expect(state.currentIndex).toBe(-1);
  });
});
