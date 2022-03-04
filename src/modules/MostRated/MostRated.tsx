/** @jsxImportSource @emotion/react */
import MovieTile from '@/component/MovieTile/MovieTile';
import { useMoviesList } from '@/hook/movies/useMoviesList.hook';
import globalStyles from '@/style/global.styles';
import styles from './MostRated.styles';

/**
 * Home: A sample page
 * @return {JSX.Element} The JSX Code for the Home Page
 */
const MostRated = (): JSX.Element => {
  const { data } = useMoviesList();

  return (
    <div css={globalStyles.container}>
      <main>
        <h2 css={styles.title}>Most Rated</h2>
        <div css={styles.mostRatedMovies}>
          {data?.ids.map((movie) => (
            <MovieTile key={movie} id={movie} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MostRated;
