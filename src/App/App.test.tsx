import { render, screen } from '@testing-library/react';
import App from '.';

test('renders a threat, a promise.', () => {
  render(<App />);
  const linkElement = screen.getByText(/subscribe or die/i);
  expect(linkElement).toBeInTheDocument();
});
