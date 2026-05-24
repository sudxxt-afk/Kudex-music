import { create } from 'zustand';
import { apiClient } from '../apiClient';

export type IntegrationService = 'Spotify' | 'Yandex' | 'Soundcloud';

export interface Integration {
  service: IntegrationService;
  isConnected: boolean;
}

export interface IntegrationState {
  integrations: Integration[];
  isImporting: boolean;
  importProgress: number;
  importError: string | null;
  connectService: (service: IntegrationService) => void;
  disconnectService: (service: IntegrationService) => void;
  startImport: (service: IntegrationService) => Promise<void>;
  resetImport: () => void;
}

export const useIntegrationStore = create<IntegrationState>((set, get) => ({
  integrations: [
    { service: 'Spotify', isConnected: false },
    { service: 'Yandex', isConnected: false },
    { service: 'Soundcloud', isConnected: false },
  ],
  isImporting: false,
  importProgress: 0,
  importError: null,

  connectService: (service: IntegrationService) => set((state) => ({
    integrations: state.integrations.map(i => i.service === service ? { ...i, isConnected: true } : i)
  })),

  disconnectService: (service: IntegrationService) => set((state) => ({
    integrations: state.integrations.map(i => i.service === service ? { ...i, isConnected: false } : i)
  })),

  resetImport: () => set({ isImporting: false, importProgress: 0, importError: null }),

  startImport: async (service: IntegrationService) => {
    set({ isImporting: true, importProgress: 0, importError: null });

    try {
      // Имитация поллинга через apiClient
      for (let progress = 20; progress <= 100; progress += 20) {
        // Мы используем мок, делая реальный запрос, но мы перехватим его или сымитируем задержку
        // Так как реального бэкенда для этого нет, мы делаем задержку через Promise
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // В реальности здесь был бы запрос:
        // const response = await apiClient.get(`/integrations/${service}/import-status`);
        // set({ importProgress: response.data.progress });
        
        set({ importProgress: progress });
      }
      set({ isImporting: false });
    } catch (error: any) {
      set({ importError: error.message || 'Ошибка импорта', isImporting: false });
    }
  }
}));
