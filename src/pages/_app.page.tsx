import Header from '@/component/Header/Header';
import { store } from '@/store/index';
import { Theme } from '@mui/material';
import darkScrollbar from '@mui/material/darkScrollbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    primary: {
      main: 'rgb(0, 61, 160)',
    },
    mode: 'dark',
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: (theme: Theme) =>
          theme.palette.mode === 'dark' ? darkScrollbar() : null,
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 3,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          fontWeight: 600,
          textTransform: 'none',
        },
        contained: {
          background:
            'linear-gradient(37.45deg, #003DF5 2.97%, #00A8E8 92.82%)',
        },
      },
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
        disableFocusRipple: true,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
  },
  spacing: 0,
});

/**
 * MyApp: Custom App component to initialize pages in nextjs
 * @return {JSX.Element} The JSX Code for the Home Page
 */
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <>
            <Header />
            <Component {...pageProps} />
          </>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
