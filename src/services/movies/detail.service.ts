import { Movie } from '@/type/Movie.type';
import { AxiosInstance } from 'axios';

export const getMovieDetails = async (
  moviesClient: AxiosInstance,
  id: string | undefined
) => {
  if (!id) {
    throw new Error('Movie ID is required');
  }
  const moviesResponse = await moviesClient.get<Movie>(`/${id}`);
  const result = moviesResponse.data;
  return result;
};
