import { loadMovies, moviesLoaded } from '@/store/movies/slice';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getTopRated } from 'src/services/movies/getTopRated.service';
import { useAppDispatch } from '..';

export const useTopRated = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  useQuery(['movies', 'topRated'], getTopRated, {
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (response) => {
      dispatch(moviesLoaded(response.data));
    },
  });
};
