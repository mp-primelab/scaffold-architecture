/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import Link from 'next/link';
import Head from 'next/head';

/**
 * Index: The Landing page of the scaffold
 * @return {JSX.Element} The JSX Code for the Landing page
 */
const Index: NextPage = (): JSX.Element => (
  <>
    <Head>
      <title>Scaffold | Landing Page</title>
    </Head>
    <div
      css={css`
        height: 100vh;
        display: grid;
        place-items: center;
      `}
    >
      <Link href="/home">
        <a>
          <h1>Go to Home Page</h1>
        </a>
      </Link>
    </div>
  </>
);

export default Index;
