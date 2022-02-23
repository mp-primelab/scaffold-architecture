import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import moviesReducer from './movies/slice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
