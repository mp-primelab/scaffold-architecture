import { useQuery } from 'react-query';
import { getMovieDetails } from 'src/services/movies/detail.service';
import { useMoviesHttpClient } from '../http/useMoviesHttpClient';

export const useMovieDetails = (id: string | undefined) => {
  const movieClient = useMoviesHttpClient();
  const queryFn = () => getMovieDetails(movieClient, id);
  return useQuery(['movies', 'list', id], queryFn, {
    enabled: !!id,
  });
};
