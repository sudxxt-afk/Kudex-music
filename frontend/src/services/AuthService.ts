import { apiClient } from '../api/client';

export class AuthService {
  static async telegramLogin(initData: string) {
    const { data } = await apiClient.post('/auth/telegram-login', { initData });
    localStorage.setItem('kudex_access_token', data.access_token);
    localStorage.setItem('kudex_refresh_token', data.refresh_token);
    return data;
  }

  static async refresh() {
    const refreshToken = localStorage.getItem('kudex_refresh_token');
    const { data } = await apiClient.post('/auth/refresh', { refresh_token: refreshToken });
    localStorage.setItem('kudex_access_token', data.access_token);
    localStorage.setItem('kudex_refresh_token', data.refresh_token);
    return data;
  }

  static logout() {
    localStorage.removeItem('kudex_access_token');
    localStorage.removeItem('kudex_refresh_token');
  }
}
