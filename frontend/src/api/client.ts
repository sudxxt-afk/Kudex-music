import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import toast from 'react-hot-toast';

const API_URL = (typeof process !== 'undefined' && process.env)
  ? (process.env.VITE_API_URL || '')
  : '';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

let isRefreshing = false;
let failedQueue: Array<{ resolve: (value?: unknown) => void, reject: (reason?: any) => void }> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    (config as any).metadata = { startTime: new Date() };
    console.info(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
    
    const token = localStorage.getItem('kudex_access_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    const config = response.config as any;
    const duration = new Date().getTime() - config.metadata.startTime.getTime();
    console.info(`[API Response] ${config.method?.toUpperCase()} ${config.url} - ${response.status} (${duration}ms)`);
    return response;
  },
  async (error: AxiosError) => {
    const config = error.config as any;
    const originalRequest = config;
    
    const duration = new Date().getTime() - config.metadata.startTime.getTime();
    console.error(`[API Error] ${config.method?.toUpperCase()} ${config.url} - Status ${error.response?.status} (${duration}ms)`);

    if (error.response?.status === 401 && !originalRequest._retry && originalRequest.url !== '/auth/refresh') {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers['Authorization'] = 'Bearer ' + token;
          return apiClient(originalRequest);
        }).catch(err => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = localStorage.getItem('kudex_refresh_token');
      if (!refreshToken) {
        processQueue(error, null);
        isRefreshing = false;
        localStorage.removeItem('kudex_access_token');
        toast.error('Session expired, please login again');
        return Promise.reject(error);
      }

      try {
        const { data } = await axios.post(`${API_URL}/auth/refresh`, { refresh_token: refreshToken });
        localStorage.setItem('kudex_access_token', data.access_token);
        localStorage.setItem('kudex_refresh_token', data.refresh_token);
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
        originalRequest.headers['Authorization'] = `Bearer ${data.access_token}`;
        
        processQueue(null, data.access_token);
        isRefreshing = false;
        
        return apiClient(originalRequest);
      } catch (err) {
        processQueue(err, null);
        isRefreshing = false;
        localStorage.removeItem('kudex_access_token');
        localStorage.removeItem('kudex_refresh_token');
        toast.error('Session expired, please login again');
        return Promise.reject(err);
      }
    }

    if (error.response?.status !== 401) {
      toast.error(error.message || 'Network Error');
    }
    return Promise.reject(error);
  }
);
