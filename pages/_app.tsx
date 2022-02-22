import type { AppProps } from 'next/app';

/**
 * MyApp: Custom App component to initialize pages in nextjs
 * @return {JSX.Element} The JSX Code for the Home Page
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
