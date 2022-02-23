import axios from 'axios';
import { ENDPOINT_V1 } from 'src/constants/app.constants';

export const scaffoldApiV1 = axios.create({
  baseURL: ENDPOINT_V1,
  timeout: 5000,
  headers: {
    version: 'v1',
  },
});
