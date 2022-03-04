import axios from 'axios';

export const useHttpClient = (baseURL: string) => {
  return axios.create({
    baseURL,
    timeout: 6000,
  });
};
