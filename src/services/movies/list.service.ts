import { Movie } from '@/type/Movie.type';
import { AxiosInstance } from 'axios';
import { NormalizedData } from 'src/common/types/NormalizedData';

export const getMoviesList = async (moviesClient: AxiosInstance) => {
  const moviesResponse = await moviesClient.get<Movie[]>('/');
  const result = moviesResponse.data.reduce<NormalizedData<Movie>>(
    (obj, movie) => {
      obj.ids.push(movie.id);
      obj.data[movie.id] = movie;
      return obj;
    },
    {
      ids: [],
      data: {},
    }
  );

  return result;
};
