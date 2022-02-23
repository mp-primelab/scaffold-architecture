import { store } from '@/store/index';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from './index.page';

describe('Home', () => {
  it('renders a welcome message', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const heading = screen.getByRole('heading', {
      name: /Welcome to Scaffold/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
