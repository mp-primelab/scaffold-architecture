import { useAppSelector } from '@/hook/index';
import { authTokenSelector } from '@/store/auth/selector';
import { AxiosInstance } from 'axios';
import { useEffect } from 'react';

export const useAuthToken = (api: AxiosInstance) => {
  const authToken = useAppSelector(authTokenSelector);

  useEffect(() => {
    let remover: number;
    if (authToken) {
      remover = api.interceptors.request.use((config) => {
        if (!config.headers) {
          config.headers = {};
        }

        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }

        return config;
      });
    }

    return () => {
      if (remover) {
        api.interceptors.request.eject(remover);
      }
    };
  }, [authToken, api]);

  return api;
};
