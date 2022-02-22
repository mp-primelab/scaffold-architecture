/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.styles';

/**
 * Home: A sample page
 * @return {JSX.Element} The JSX Code for the Home Page
 */
const Home: NextPage = (): JSX.Element => (
  <>
    <Head>
      <title>Scaffold | Home</title>
    </Head>
    <div css={styles.container}>
      <main css={styles.main}>
        <h1 css={styles.title}>Welcome to Scaffold</h1>
      </main>
    </div>
  </>
);

export default Home;
