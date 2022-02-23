import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/store/index';

/**
 * MyApp: Custom App component to initialize pages in nextjs
 * @return {JSX.Element} The JSX Code for the Home Page
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
