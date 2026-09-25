import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';

const availableTimes = ['17:00', '18:00', '19:00'];

function renderBookingForm(props = {}) {
  return render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={jest.fn()}
      submitForm={jest.fn()}
      {...props}
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
  expect(screen.getByRole('alert')).toHaveTextContent('Number of guests must be between 1 and 10.');
});

test('keeps the submit button disabled for a date before today', () => {
  renderBookingForm();

  fireEvent.change(screen.getByLabelText('Choose date'), {
    target: { value: getDateString(-1) },
  });

  expect(screen.getByRole('button', { name: 'Make Your reservation' })).toBeDisabled();
  expect(screen.getByRole('alert')).toHaveTextContent('Please select a date.');
});

test('shows validation feedback when a required time or occasion is cleared', () => {
  renderBookingForm();

  fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: '' } });

  expect(screen.getByText('Please select a time.')).toBeInTheDocument();
  expect(screen.getByText('Please select an occasion.')).toBeInTheDocument();
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

test('shows submitting feedback and disables duplicate submission while pending', async () => {
  let resolveSubmission;
  const submitForm = jest.fn(() => new Promise((resolve) => {
    resolveSubmission = resolve;
  }));
  renderBookingForm({ submitForm });

  fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: getDateString() } });
  fireEvent.click(screen.getByRole('button', { name: 'Make Your reservation' }));

  expect(submitForm).toHaveBeenCalledTimes(1);
  expect(screen.getByRole('status')).toHaveTextContent('Submitting your reservation...');
  expect(screen.getByRole('button', { name: 'Make Your reservation' })).toBeDisabled();

  resolveSubmission(true);
  await waitFor(() => {
    expect(screen.getByRole('button', { name: 'Make Your reservation' })).toBeEnabled();
  });
});

test('shows an error and stays on the form when submission fails', async () => {
  const submitForm = jest.fn(() => Promise.resolve(false));
  renderBookingForm({ submitForm });

  fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: getDateString() } });
  fireEvent.click(screen.getByRole('button', { name: 'Make Your reservation' }));

  await waitFor(() => {
    expect(screen.getByRole('alert')).toHaveTextContent("We couldn't complete your reservation. Please try again.");
  });
  expect(submitForm).toHaveBeenCalledTimes(1);
});
