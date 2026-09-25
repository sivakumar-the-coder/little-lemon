import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title">Little Lemon</h1>
        <p className="hero-location">Chicago</p>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link className="button" to="/booking">Reserve a Table</Link>
      </div>
      <img
        className="hero-image"
        src="/restaurantfood.jpg"
        alt="Fresh Mediterranean dishes served at Little Lemon"
      />
    </section>
  );
}

export default CallToAction;