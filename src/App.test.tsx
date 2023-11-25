import { render, screen } from '@testing-library/react';
import App from './App';

test('renders roulette', () => {
  render(<App />);
  const spinBtn = screen.getByText('SPIN');
  HTMLCanvasElement.prototype.getContext = jest.fn();
  expect(spinBtn).toBeInTheDocument();
});
