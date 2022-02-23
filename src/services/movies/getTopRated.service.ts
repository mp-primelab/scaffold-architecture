import { Movie } from '@/type/Movie.type';
import { scaffoldApiV1 } from 'src/utils/api.utils';

export const getTopRated = async () =>
  await scaffoldApiV1.get<Movie[]>('/movies');
