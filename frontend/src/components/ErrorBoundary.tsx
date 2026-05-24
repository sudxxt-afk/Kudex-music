import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('UI Error Boundary Caught:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '2rem', 
          margin: '2rem', 
          borderRadius: '12px',
          background: 'var(--surface-container, rgba(255,255,255,0.05))',
          border: '1px solid var(--outline, rgba(255,0,0,0.3))',
          color: 'var(--text-main, #fff)'
        }}>
          <h2>Что-то пошло не так</h2>
          <p style={{ color: '#ff6b6b' }}>{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
