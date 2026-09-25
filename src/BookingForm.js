import { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const today = new Date().toISOString().split('T')[0];
  const isFormValid = Boolean(
    date && date >= today && time && occasion && Number(guests) >= 1 && Number(guests) <= 10
  );
  const errors = {
    date: touched.date && (!date || date < today) ? 'Please select a date.' : '',
    time: touched.time && !time ? 'Please select a time.' : '',
    guests: touched.guests && (Number(guests) < 1 || Number(guests) > 10 || guests === '')
      ? 'Number of guests must be between 1 and 10.'
      : '',
    occasion: touched.occasion && !occasion ? 'Please select an occasion.' : '',
  };

  function markTouched(field) {
    setTouched((current) => ({ ...current, [field]: true }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }
    if (!event.currentTarget.checkValidity() || !isFormValid) {
      setTouched({ date: true, time: true, guests: true, occasion: true });
      return;
    }

    setSubmitError('');
    setIsSubmitting(true);
    try {
      const submissionSucceeded = await submitForm({ date, time, guests, occasion });
      if (submissionSucceeded === false) {
        setSubmitError("We couldn't complete your reservation. Please try again.");
      }
    } catch {
      setSubmitError("We couldn't complete your reservation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleDateChange(event) {
    const newDate = event.target.value;
    setDate(newDate);
    markTouched('date');
    dispatch(newDate);
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <p className="availability-note">Available times update when you choose a date.</p>
      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          type="date"
          value={date}
          onChange={handleDateChange}
          min={today}
          aria-describedby={errors.date ? 'date-error' : undefined}
          onBlur={() => markTouched('date')}
          required
        />
        {errors.date && <p id="date-error" className="field-error" role="alert">{errors.date}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(event) => {
            setTime(event.target.value);
            markTouched('time');
          }}
          onBlur={() => markTouched('time')}
          aria-describedby={errors.time ? 'time-error' : undefined}
          required
        >
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
          {errors.time && <p id="time-error" className="field-error" role="alert">{errors.time}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          type="number"
          min="1"
          max="10"
          value={guests}
          onChange={(event) => {
            setGuests(event.target.value);
            markTouched('guests');
          }}
          onBlur={() => markTouched('guests')}
          aria-describedby={errors.guests ? 'guests-error' : undefined}
          required
        />
        {errors.guests && <p id="guests-error" className="field-error" role="alert">{errors.guests}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(event) => {
            setOccasion(event.target.value);
            markTouched('occasion');
          }}
          onBlur={() => markTouched('occasion')}
          aria-describedby={errors.occasion ? 'occasion-error' : undefined}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {errors.occasion && <p id="occasion-error" className="field-error" role="alert">{errors.occasion}</p>}
      </div>

      {submitError && <p className="submit-error" role="alert" aria-live="assertive">{submitError}</p>}
      {isSubmitting && <p className="submit-status" role="status" aria-live="polite">Submitting your reservation...</p>}
      <input
        type="submit"
        value="Make Your reservation"
        disabled={!isFormValid || isSubmitting}
      />
    </form>
  );
}

export default BookingForm;