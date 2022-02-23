import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/store/index';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

/**
 * MyApp: Custom App component to initialize pages in nextjs
 * @return {JSX.Element} The JSX Code for the Home Page
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
