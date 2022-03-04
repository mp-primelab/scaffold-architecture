import { useQuery, useQueryClient } from 'react-query';
import { getMoviesList } from 'src/services/movies/list.service';
import { useMoviesHttpClient } from '../http/useMoviesHttpClient';

export const useMoviesList = () => {
  const queryClient = useQueryClient();
  const moviesClient = useMoviesHttpClient();
  const queryFn = () => getMoviesList(moviesClient);

  return useQuery(['movies', 'list'], queryFn, {
    onSuccess(result) {
      result.ids.forEach((id) => {
        queryClient.setQueryData(['movies', 'list', id], result.data[id]);
      });
    },
  });
};
