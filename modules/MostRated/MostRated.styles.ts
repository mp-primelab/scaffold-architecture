import { css } from '@emotion/react';

const styles = {
  title: css`
    margin: 0;
  `,
  mostRatedMovies: css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-gap: 1rem;
    width: 100vw;
  `,
};

export default styles;
