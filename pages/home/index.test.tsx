import { render, screen } from '@testing-library/react';
import Home from './index.page';

describe('Home', () => {
  it('renders a welcome message', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Welcome to Scaffold/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
