import { store } from '@/store/index';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import Home from './index.page';

const queryClient = new QueryClient();

describe('Home', () => {
  it('renders a welcome message', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Home />
        </Provider>
      </QueryClientProvider>
    );

    const heading = screen.getByRole('heading', {
      name: /Welcome to Scaffold/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
