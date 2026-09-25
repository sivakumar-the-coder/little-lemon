import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

const availableTimes = ['17:00', '18:00', '19:00'];

function renderBookingForm() {
  return render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={jest.fn()}
      submitForm={jest.fn()}
    />
  );
}

function getDateString(offsetDays = 0) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + offsetDays);
  return date.toISOString().split('T')[0];
}

test('applies the expected HTML5 validation attributes', () => {
  renderBookingForm();

  const dateInput = screen.getByLabelText('Choose date');
  const timeSelect = screen.getByLabelText('Choose time');
  const guestsInput = screen.getByLabelText('Number of guests');
  const occasionSelect = screen.getByLabelText('Occasion');

  expect(dateInput).toBeRequired();
  expect(dateInput).toHaveAttribute('min', getDateString());
  expect(timeSelect).toBeRequired();
  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
  expect(occasionSelect).toBeRequired();
});

test('keeps the submit button disabled for the default form', () => {
  renderBookingForm();

  expect(screen.getByRole('button', { name: 'Make Your reservation' })).toBeDisabled();
});

test('keeps the submit button disabled when guests is zero', () => {
  renderBookingForm();

  fireEvent.change(screen.getByLabelText('Number of guests'), {
    target: { value: '0' },
  });

  expect(screen.getByRole('button', { name: 'Make Your reservation' })).toBeDisabled();
});

test('keeps the submit button disabled for a date before today', () => {
  renderBookingForm();

  fireEvent.change(screen.getByLabelText('Choose date'), {
    target: { value: getDateString(-1) },
  });

  expect(screen.getByRole('button', { name: 'Make Your reservation' })).toBeDisabled();
});

test('keeps the submit button disabled when time is missing', () => {
  renderBookingForm();

  fireEvent.change(screen.getByLabelText('Choose time'), {
    target: { value: '' },
  });

  expect(screen.getByRole('button', { name: 'Make Your reservation' })).toBeDisabled();
});

test('keeps the submit button disabled when occasion is missing', () => {
  renderBookingForm();

  fireEvent.change(screen.getByLabelText('Occasion'), {
    target: { value: '' },
  });

  expect(screen.getByRole('button', { name: 'Make Your reservation' })).toBeDisabled();
});

test('enables the submit button when all fields are valid', () => {
  renderBookingForm();

  fireEvent.change(screen.getByLabelText('Choose date'), {
    target: { value: getDateString() },
  });
  fireEvent.change(screen.getByLabelText('Choose time'), {
    target: { value: '18:00' },
  });
  fireEvent.change(screen.getByLabelText('Number of guests'), {
    target: { value: '3' },
  });
  fireEvent.change(screen.getByLabelText('Occasion'), {
    target: { value: 'Anniversary' },
  });

  expect(screen.getByRole('button', { name: 'Make Your reservation' })).toBeEnabled();
});
