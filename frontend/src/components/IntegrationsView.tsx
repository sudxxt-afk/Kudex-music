import React from 'react';
import { useIntegrationStore, IntegrationService } from '../store/useIntegrationStore';

export const IntegrationsView: React.FC = () => {
  const { 
    integrations, 
    connectService, 
    disconnectService, 
    startImport, 
    isImporting, 
    importProgress, 
    importError 
  } = useIntegrationStore();

  const handleImport = (service: IntegrationService) => {
    startImport(service);
  };

  return (
    <div className="integrations-view" style={{ padding: '20px', color: 'var(--text-main, #fff)', background: 'var(--bg-primary, #111)', borderRadius: '8px' }}>
      <h2 style={{ marginBottom: '20px' }}>Integrations Manager</h2>
      
      {importError && (
        <div style={{ color: 'red', marginBottom: '10px', padding: '10px', background: 'rgba(255, 0, 0, 0.1)', borderRadius: '4px' }}>
          Error: {importError}
        </div>
      )}

      {isImporting && (
        <div style={{ marginBottom: '20px', padding: '15px', background: 'var(--bg-secondary, #222)', borderRadius: '8px' }}>
          <p style={{ margin: '0 0 10px 0' }}>Importing playlist... {importProgress}%</p>
          <div style={{ width: '100%', height: '10px', background: 'var(--bg-primary, #111)', borderRadius: '5px', overflow: 'hidden' }}>
            <div style={{ 
              width: `${importProgress}%`, 
              height: '100%', 
              background: 'var(--accent-color, #0f0)', 
              transition: 'width 0.3s ease-in-out' 
            }} />
          </div>
        </div>
      )}

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {integrations.map((integration) => (
          <li key={integration.service} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '15px', 
            background: 'var(--bg-secondary, #222)', 
            borderRadius: '8px',
            border: '1px solid var(--bg-primary, #111)'
          }}>
            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{integration.service}</span>
            <div style={{ display: 'flex', gap: '10px' }}>
              {integration.isConnected ? (
                <>
                  <button 
                    onClick={() => handleImport(integration.service)} 
                    disabled={isImporting}
                    style={{
                      cursor: isImporting ? 'not-allowed' : 'pointer',
                      background: 'var(--accent-color, #0f0)',
                      color: '#000',
                      border: 'none',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      opacity: isImporting ? 0.5 : 1
                    }}
                  >
                    Import Playlist
                  </button>
                  <button 
                    onClick={() => disconnectService(integration.service)}
                    style={{
                      cursor: 'pointer',
                      background: 'transparent',
                      color: 'var(--text-main, #fff)',
                      border: '1px solid var(--text-main, #fff)',
                      padding: '8px 12px',
                      borderRadius: '4px'
                    }}
                  >
                    Disconnect
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => connectService(integration.service)}
                  style={{
                    cursor: 'pointer',
                    background: 'var(--text-main, #fff)',
                    color: '#000',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '4px'
                  }}
                >
                  Connect
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
