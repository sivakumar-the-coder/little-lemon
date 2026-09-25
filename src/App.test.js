import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the Little Lemon homepage', () => {
  window.fetchAPI = jest.fn(() => ['17:00']);

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getByRole('heading', { name: 'Little Lemon' })).toBeInTheDocument();
});
