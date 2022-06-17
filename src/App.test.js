import { render, screen } from '@testing-library/react';
import App from './App';
import { messages } from './messages';

test('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText(messages.title)).toBeInTheDocument();
});
