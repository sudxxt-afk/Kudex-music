import React, { useEffect, useState } from 'react';
import { apiClient } from '../api/client';

export const GlobalLoader: React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let requestsCount = 0;
    
    const requestInterceptor = apiClient.interceptors.request.use(config => {
      requestsCount++;
      setLoading(true);
      return config;
    });

    const responseInterceptor = apiClient.interceptors.response.use(
      response => {
        requestsCount = Math.max(0, requestsCount - 1);
        if (requestsCount === 0) setLoading(false);
        return response;
      },
      error => {
        requestsCount = Math.max(0, requestsCount - 1);
        if (requestsCount === 0) setLoading(false);
        return Promise.reject(error);
      }
    );

    return () => {
      apiClient.interceptors.request.eject(requestInterceptor);
      apiClient.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  if (!loading) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', zIndex: 9999,
      display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{
        width: '50px', height: '50px', border: '5px solid var(--bg-secondary, #333)',
        borderTopColor: 'var(--accent-color, #cc97ff)', borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};
