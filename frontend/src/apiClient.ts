import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Базовый URL бэкенда. Берется из переменных окружения или использует дефолтный localhost
const API_URL: string = (typeof process !== 'undefined' && process.env)
  ? (process.env.NEXT_PUBLIC_API_URL || process.env.VITE_API_URL || 'http://localhost:8000')
  : 'http://localhost:8000';

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: добавляет заголовок Authorization, если токен присутствует в localStorage
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('kudex_access_token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error: AxiosError): Promise<never> => {
    return Promise.reject(error);
  }
);

// Response Interceptor: перехватывает ошибки 401 (истекший или неверный токен)
apiClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError): Promise<never> => {
    if (error.response && error.response.status === 401) {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('kudex_access_token');
        // Очищаем токен, при интеграции с UI здесь можно выполнить редирект на форму входа
      }
    }
    return Promise.reject(error);
  }
);
