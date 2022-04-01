/** @jsxImportSource @emotion/react */
import globalStyles from '@/style/global.styles';
import { css } from '@emotion/react';
import { Button } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

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
        <Link href="/home" passHref>
          <Button>Contact Us</Button>
        </Link>
      </main>
    </div>
  </>
);

export default Index;
