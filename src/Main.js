import { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import BookingPage from './BookingPage';
import Homepage from './Homepage';

function initializeTimes() {
  return window.fetchAPI(new Date());
}

function updateTimes(state, selectedDate) {
  return window.fetchAPI(new Date(selectedDate));
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
        />
      </Routes>
    </main>
  );
}

export default Main;