import MovieTile from '@/component/MovieTile/MovieTile';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

/**
 * Index: The Landing page of the scaffold
 * @return {JSX.Element} The JSX Code for the Landing page
 */
const Detail: NextPage = (): JSX.Element => {
  const router = useRouter();
  const id = router.query.id as string;

  if (!id) {
    return <span>Loading…</span>;
  }

  return <MovieTile id={id} />;
};

export default Detail;
