import { ENDPOINT_V1 } from 'src/constants/app.constants';
import { useAuthToken } from './useAuthToken';
import { useHttpClient } from './useHttpClient';

export const useMoviesHttpClient = () => {
  const api = useHttpClient(`${ENDPOINT_V1}/movies`);
  return useAuthToken(api);
};
