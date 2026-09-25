const testimonials = [
  {
    name: 'Aisha B.',
    initials: 'AB',
    rating: '★★★★★',
    ratingLabel: '5 out of 5 stars',
    quote: 'The Greek salad was fresh, bright, and exactly what I needed for lunch.',
  },
  {
    name: 'Priya K.',
    initials: 'PK',
    rating: '★★★★☆',
    ratingLabel: '4 out of 5 stars',
    quote: 'Lovely atmosphere and amazing bruschetta. Will definitely be back soon.',
  },
  {
    name: 'Carlos R.',
    initials: 'CR',
    rating: '★★★★★',
    ratingLabel: '5 out of 5 stars',
    quote: 'The lemon dessert is out of this world. A must-try for anyone visiting.',
  },
];

function CustomersSay() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <p className="rating" aria-label={testimonial.ratingLabel}>
              <span aria-hidden="true">{testimonial.rating}</span>
            </p>
            <div className="testimonial-person">
              <span className="profile-placeholder" aria-hidden="true">{testimonial.initials}</span>
              <h3>{testimonial.name}</h3>
            </div>
            <p>&ldquo;{testimonial.quote}&rdquo;</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;