import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types';

const initialState = {} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate(state, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
    logout(state) {
      delete state.token;
    },
  },
});

export default authSlice;
