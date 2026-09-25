import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="booking-page" aria-labelledby="booking-title">
      <div className="booking-page-content">
        <h1 id="booking-title">Reserve a Table</h1>
        <p>Plan your next meal at Little Lemon in Chicago.</p>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </div>
    </section>
  );
}

export default BookingPage;