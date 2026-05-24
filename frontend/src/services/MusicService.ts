import { apiClient } from '../api/client';

export class MusicService {
  static async importPlaylist() {
    const { data } = await apiClient.post('/api/v1/import');
    return data;
  }

  static async searchTracks(query: string) {
    const { data } = await apiClient.get('/api/v1/search', { params: { q: query } });
    return data;
  }

  static async getTracks() {
    const { data } = await apiClient.get('/api/v1/tracks');
    return data;
  }
}
