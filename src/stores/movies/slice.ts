import { Movie } from '@/type/Movie.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { movies } from '@/mock/movies';
import { MoviesState } from './types';

const initialState = {
  movies,
} as MoviesState;

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    loadMovies(state) {
      state.movies = [];
    },
    moviesLoaded(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },
  },
});

export const { loadMovies, moviesLoaded } = movieSlice.actions;
export default movieSlice.reducer;
