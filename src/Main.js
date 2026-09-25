import { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import Homepage from './Homepage';

function initializeTimes() {
  return window.fetchAPI(new Date());
}

function updateTimes(state, selectedDate) {
  return window.fetchAPI(new Date(selectedDate));
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  async function submitForm(formData) {
    const submissionSucceeded = await window.submitAPI(formData);
    if (submissionSucceeded) {
      navigate('/confirmed');
    }
    return submissionSucceeded;
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;

export { initializeTimes, updateTimes };