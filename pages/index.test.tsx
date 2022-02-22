import { render, screen } from '@testing-library/react';
import Index from './index.page';

describe('Home', () => {
  it('renders a link to home page', () => {
    render(<Index />);

    const link = screen.getByRole('link').getAttribute('href');

    const heading = screen.getByRole('heading', {
      name: /Go to Home Page/i,
    });

    expect(link).toBe('/home');
    expect(heading).toBeInTheDocument();
  });
});
