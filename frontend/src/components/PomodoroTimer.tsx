import React, { useEffect } from 'react';
import { usePomodoroStore } from '../store/usePomodoroStore';

export const PomodoroTimer: React.FC = () => {
  const { timeLeft, isActive, duration, tick, start, pause, reset, setDuration } = usePomodoroStore();

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        tick();
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      // Time is up!
      pause();
      // Integration: call player.pause()
      if ((window as any).player) {
        (window as any).player.pause();
      }
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, tick, pause]);

  const progress = ((duration - timeLeft) / duration) * 100;
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="pomodoro-timer" style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--bg-primary)', padding: '10px', borderRadius: '8px' }}>
      <div className="pomodoro-circle" style={{ position: 'relative', width: '50px', height: '50px' }}>
        <svg width="50" height="50">
          <circle
            stroke="var(--bg-secondary, #444)"
            strokeWidth="4"
            fill="transparent"
            r={radius}
            cx="25"
            cy="25"
          />
          <circle
            stroke="var(--accent-color, #0f0)"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx="25"
            cy="25"
            style={{ transition: 'stroke-dashoffset 1s linear' }}
          />
        </svg>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px'
        }}>
          ⏱️
        </div>
      </div>
      
      <div className="pomodoro-controls" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--text-main, #fff)' }}>{formatTime(timeLeft)}</div>
        <div style={{ display: 'flex', gap: '5px' }}>
          {!isActive ? (
            <button onClick={start} style={{ cursor: 'pointer', background: 'var(--accent-color, #0f0)', color: '#000', border: 'none', borderRadius: '4px' }}>Play</button>
          ) : (
            <button onClick={pause} style={{ cursor: 'pointer', background: 'var(--bg-secondary, #444)', color: 'var(--text-main, #fff)', border: 'none', borderRadius: '4px' }}>Pause</button>
          )}
          <button onClick={reset} style={{ cursor: 'pointer', background: 'var(--bg-secondary, #444)', color: 'var(--text-main, #fff)', border: 'none', borderRadius: '4px' }}>Reset</button>
        </div>
        <div style={{ display: 'flex', gap: '5px' }}>
          <button onClick={() => setDuration(25)} style={{ fontSize: '10px', cursor: 'pointer' }}>25m</button>
          <button onClick={() => setDuration(50)} style={{ fontSize: '10px', cursor: 'pointer' }}>50m</button>
        </div>
      </div>
    </div>
  );
};
