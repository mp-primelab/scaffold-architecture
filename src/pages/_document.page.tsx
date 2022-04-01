import { CssBaseline } from '@mui/material';
import { Head, Html, Main, NextScript } from 'next/document';

/**
 * Document: Custom App component to initialize pages in nextjs
 * @return {JSX.Element} The JSX Code for the Home Page
 */
export default function Document(): JSX.Element {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&display=swap"
          rel="stylesheet"
        />
        <CssBaseline />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
