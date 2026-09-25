import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page" aria-labelledby="booking-title">
      <div className="booking-page-content">
        <h1 id="booking-title">Reserve a Table</h1>
        <p>Plan your next meal at Little Lemon in Chicago.</p>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </section>
  );
}

export default BookingPage;