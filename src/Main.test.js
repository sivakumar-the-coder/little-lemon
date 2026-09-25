import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { initializeTimes, updateTimes } from './Main';
import Main from './Main';

beforeEach(() => {
  window.fetchAPI = jest.fn(() => ['17:00', '18:00']);
});

test('initializeTimes returns available booking times from fetchAPI', () => {
  const availableTimes = initializeTimes();

  expect(availableTimes).toEqual(expect.any(Array));
  expect(availableTimes.length).toBeGreaterThan(0);
  expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
});

test('updateTimes returns available booking times for the selected date', () => {
  const selectedDate = '2026-09-26';
  const availableTimes = updateTimes([], selectedDate);

  expect(availableTimes).toEqual(expect.any(Array));
  expect(availableTimes.length).toBeGreaterThan(0);
  expect(window.fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
});

test('successful booking submission navigates to the confirmation page', async () => {
  window.submitAPI = jest.fn(() => Promise.resolve(true));

  render(
    <MemoryRouter initialEntries={['/booking']}>
      <Main />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText('Choose date'), {
    target: { value: new Date().toISOString().split('T')[0] },
  });
  fireEvent.click(screen.getByRole('button', { name: 'Make Your reservation' }));

  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'Your booking has been confirmed!' })).toBeInTheDocument();
  });
  expect(window.submitAPI).toHaveBeenCalledWith(expect.objectContaining({ date: expect.any(String) }));
});