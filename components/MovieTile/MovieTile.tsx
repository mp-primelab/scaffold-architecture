/** @jsxImportSource @emotion/react */
import { Movie } from 'mocks/movies';
import styles from './MovieTile.styles';
import Image from 'next/image';

/**
 * Home: A sample page
 * @return {JSX.Element} The JSX Code for the Home Page
 */
const MovieTile = ({ id, name, thumbnail }: Movie): JSX.Element => {
  return (
    <div css={styles.container}>
      <div css={styles.thumbnail}>
        <Image src={thumbnail} alt={name} width={256} height={256} />
      </div>
      <div css={styles.title}>{name}</div>
    </div>
  );
};

export default MovieTile;
