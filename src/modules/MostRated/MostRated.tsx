/** @jsxImportSource @emotion/react */
import styles from './MostRated.styles';
import globalStyles from '@/style/global.styles';
import MovieTile from '@/component/MovieTile/MovieTile';
import { useTopRated } from '@/hook/movies/useTopRated.hook';
import { useAppSelector } from '@/hook/index';
import { selectMovies } from '@/store/movies/selector';

/**
 * Home: A sample page
 * @return {JSX.Element} The JSX Code for the Home Page
 */
const MostRated = (): JSX.Element => {
  useTopRated();
  const movies = useAppSelector(selectMovies);

  return (
    <div css={globalStyles.container}>
      <main>
        <h2 css={styles.title}>Most Rated</h2>
        <div css={styles.mostRatedMovies}>
          {movies.map((movie) => (
            <MovieTile
              key={movie.id}
              id={movie.id}
              name={movie.name}
              thumbnail={movie.thumbnail}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MostRated;
