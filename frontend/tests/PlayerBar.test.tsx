import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PlayerBar } from '../src/components/PlayerBar';
import { usePlayerStore } from '../src/store/playerStore';
import '@testing-library/jest-dom';

beforeEach(() => {
  usePlayerStore.setState({ isPlaying: false, currentTrack: null, volume: 1.0 });
});

describe('PlayerBar', () => {
  it('toggles play state in playerStore when play button is clicked', () => {
    render(<PlayerBar />);
    
    const playBtn = screen.getByTestId('play-pause-btn');
    
    expect(usePlayerStore.getState().isPlaying).toBe(false);
    
    fireEvent.click(playBtn);
    
    expect(usePlayerStore.getState().isPlaying).toBe(true);
  });
});
