import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { name: /Lasidu Dilshan/i, level: 1 });
  expect(headerElement).toBeInTheDocument();
});

test('renders about section', () => {
  render(<App />);
  const aboutElement = screen.getByText(/About Me/i);
  expect(aboutElement).toBeInTheDocument();
});

test('renders GitHub link', () => {
  render(<App />);
  const githubLink = screen.getByText(/GitHub/i);
  expect(githubLink).toBeInTheDocument();
});
