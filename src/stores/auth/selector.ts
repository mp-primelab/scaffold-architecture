import { RootState } from '../index';

export const authTokenSelector = (state: RootState) => state.auth.token;
