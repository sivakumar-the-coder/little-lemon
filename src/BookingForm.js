import { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  function handleSubmit(event) {
    event.preventDefault();
    submitForm({ date, time, guests, occasion });
  }

  function handleDateChange(event) {
    const newDate = event.target.value;
    setDate(newDate);
    dispatch(newDate);
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          type="date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        >
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          type="number"
          min="1"
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;