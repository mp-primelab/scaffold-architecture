import { useMovieDetails } from '@/hook/movies/useMovieDetails.hook';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MovieCard } from './MovieTile.styles';

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
    <MovieCard>
      <CardActionArea onClick={handleClick}>
        <CardMedia>
          <Image
            src={movie.thumbnail}
            alt={movie.name}
            width={256}
            height={125}
            objectFit="cover"
          />
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h6">
            {movie.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MovieCard>
  );
};

export default MovieTile;
