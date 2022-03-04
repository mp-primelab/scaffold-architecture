/** @jsxImportSource @emotion/react */
import { useMovieDetails } from '@/hook/movies/useMovieDetails.hook';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './MovieTile.styles';

/**
 * Home: A sample page
 * @return {JSX.Element} The JSX Code for the Home Page
 */
const MovieTile = ({ id }: { id: string }): JSX.Element => {
  const { data: movie, isLoading } = useMovieDetails(id);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/movie/${id}`);
  };

  if (isLoading || !movie) {
    return <span>Loading…</span>;
  }

  return (
    <div css={styles.container} onClick={handleClick}>
      <div css={styles.thumbnail}>
        <Image
          src={movie.thumbnail}
          alt={movie.name}
          width={256}
          height={256}
        />
      </div>
      <div css={styles.title}>{movie.name}</div>
    </div>
  );
};

export default MovieTile;
