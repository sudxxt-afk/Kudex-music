import { useIntegrationStore } from '../src/store/useIntegrationStore';

describe('Integration Store', () => {
  beforeEach(() => {
    useIntegrationStore.getState().resetImport();
    useIntegrationStore.getState().disconnectService('Spotify');
  });

  it('should connect and disconnect a service', () => {
    useIntegrationStore.getState().connectService('Spotify');
    expect(useIntegrationStore.getState().integrations.find(i => i.service === 'Spotify')?.isConnected).toBe(true);

    useIntegrationStore.getState().disconnectService('Spotify');
    expect(useIntegrationStore.getState().integrations.find(i => i.service === 'Spotify')?.isConnected).toBe(false);
  });

  it('should handle import progress', async () => {
    const promise = useIntegrationStore.getState().startImport('Spotify');
    
    // Check that importing is set to true
    expect(useIntegrationStore.getState().isImporting).toBe(true);
    
    await promise;

    // After finish
    expect(useIntegrationStore.getState().isImporting).toBe(false);
    expect(useIntegrationStore.getState().importProgress).toBe(100);
  });
});
