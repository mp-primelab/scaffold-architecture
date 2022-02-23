/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import globalStyles from '@/style/global.styles';
import { css } from '@emotion/react';

/**
 * Index: The Landing page of the scaffold
 * @return {JSX.Element} The JSX Code for the Landing page
 */
const Index: NextPage = (): JSX.Element => (
  <>
    <Head>
      <title>Scaffold | Landing Page</title>
    </Head>
    <div css={globalStyles.container}>
      <main
        css={[
          globalStyles.main,
          css`
            place-items: center;
          `,
        ]}
      >
        <Link href="/home">
          <a>
            <h1>Go to Home Page</h1>
          </a>
        </Link>
      </main>
    </div>
  </>
);

export default Index;
