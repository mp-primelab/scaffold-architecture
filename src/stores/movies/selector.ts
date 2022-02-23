import { RootState } from '@/store/index';

export const selectMovies = (state: RootState) => state.movies.movies;
