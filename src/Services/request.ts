import axios, { AxiosRequestConfig, AxiosError, Method } from 'axios';
import { Config } from '../Config';

const BASE_URL = Config.BASE_URL;

const defaultHeaders: Record<string, string> = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export interface ApiResponse<T = any> {
  success: boolean;
  response: T | ApiError;
}

export interface ApiError {
  code: number | string;
  message: string;
  data?: unknown;
}

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: defaultHeaders,
  timeout: 60000, // 60 seconds
});

// Interceptors (optional)
api.interceptors.request.use(
  (config) => {
    console.log(
      '➡️ Request:',
      config.method?.toUpperCase(),
      config.url,
      config.data,
    );
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    console.log('✅ Response:', response.status, response.data);
    return response;
  },
  (error: AxiosError) => {
    console.log('❌ Error:', error.message);
    return Promise.reject(error);
  },
);

interface RequestOptions<T = any> {
  method?: Method;
  endpoint: string;
  params?: Record<string, any>;
  data?: Record<string, any>;
  headers?: Record<string, string>;
  token?: string;
}

/**
 * Common request function
 */
export async function request<T = any>(
  options: RequestOptions,
): Promise<ApiResponse<T>> {
  const { method = 'GET', endpoint, params, data, headers = {}, token } = options;

  try {
    const config: AxiosRequestConfig = {
      url: endpoint,
      method,
      params,
      data,
      headers: {
        ...defaultHeaders,
        ...headers,
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    };

    const response = await api.request<T>(config);
    return { success: true, response: response.data };
  } catch (err: unknown) {
    const error = err as AxiosError;

    if (error.response) {
      return {
        success: false,
        response: {
          code: error.response.status,
          message:
            (error.response.data as any)?.message || 'Server Error',
          data: error.response.data,
        },
      };
    }

    if (error.code === 'ECONNABORTED') {
      return { success: false, response: { code: 'ETO', message: 'Timeout' } };
    }

    return {
      success: false,
      response: { code: 'ERR', message: error.message },
    };
  }
}
