import { initializeTimes, updateTimes } from './Main';

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