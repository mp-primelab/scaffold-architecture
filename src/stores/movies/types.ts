import { Movie } from '@/type/Movie.type';

export type MoviesState = {
  movies: Movie[];
  isLoading: boolean;
  error?: string;
};
