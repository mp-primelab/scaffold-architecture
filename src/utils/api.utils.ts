import axios from 'axios';
import { ENDPOINT_V1 } from 'src/constants/app.constants';

export const moviesApi = axios.create({
  baseURL: ENDPOINT_V1,
  timeout: 15000,
});
