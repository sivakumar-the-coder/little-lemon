function Main() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <h1 id="hero-title">Little Lemon</h1>
          <p className="hero-location">Chicago</p>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <a className="button" href="/reservations">Reserve a Table</a>
        </div>
        <img
          className="hero-image"
          src="/restaurantfood.jpg"
          alt="Fresh Mediterranean dishes served at Little Lemon"
        />
      </section>

      <section className="specials" aria-labelledby="specials-title">
        <div className="section-heading">
          <h2 id="specials-title">This week&apos;s specials!</h2>
          <a className="button button-secondary" href="/menu">Online Menu</a>
        </div>
        <div className="specials-grid">
          <article className="special-card">
            <img src="/greek-salad.jpg" alt="Greek salad with fresh vegetables and feta" />
            <div className="card-content">
              <div className="card-title-row">
                <h3>Greek Salad</h3>
                <span className="special-price">$12.99</span>
              </div>
              <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.</p>
              <a href="/order-online">Order a delivery</a>
            </div>
          </article>

          <article className="special-card">
            <img src="/bruschetta.svg" alt="Bruschetta topped with tomatoes and herbs" />
            <div className="card-content">
              <div className="card-title-row">
                <h3>Bruschetta</h3>
                <span className="special-price">$7.99</span>
              </div>
              <p>Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned.</p>
              <a href="/order-online">Order a delivery</a>
            </div>
          </article>

          <article className="special-card">
            <img src="/lemon-dessert.jpg" alt="Little Lemon signature lemon dessert" />
            <div className="card-content">
              <div className="card-title-row">
                <h3>Lemon Dessert</h3>
                <span className="special-price">$5.00</span>
              </div>
              <p>This comes straight from grandma&apos;s recipe book, every ingredient is sourced for an authentic finish.</p>
              <a href="/order-online">Order a delivery</a>
            </div>
          </article>
        </div>
      </section>

      <section className="testimonials" aria-labelledby="testimonials-title">
        <h2 id="testimonials-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          <article className="testimonial-card">
            <p className="rating" aria-label="5 out of 5 stars"><span aria-hidden="true">★★★★★</span></p>
            <div className="testimonial-person">
              <span className="profile-placeholder" aria-hidden="true">AB</span>
              <h3>Aisha B.</h3>
            </div>
            <p>&ldquo;The Greek salad was fresh, bright, and exactly what I needed for lunch.&rdquo;</p>
          </article>

          <article className="testimonial-card">
            <p className="rating" aria-label="4 out of 5 stars"><span aria-hidden="true">★★★★☆</span></p>
            <div className="testimonial-person">
              <span className="profile-placeholder" aria-hidden="true">PK</span>
              <h3>Priya K.</h3>
            </div>
            <p>&ldquo;Lovely atmosphere and amazing bruschetta. Will definitely be back soon.&rdquo;</p>
          </article>

          <article className="testimonial-card">
            <p className="rating" aria-label="5 out of 5 stars"><span aria-hidden="true">★★★★★</span></p>
            <div className="testimonial-person">
              <span className="profile-placeholder" aria-hidden="true">CR</span>
              <h3>Carlos R.</h3>
            </div>
            <p>&ldquo;The lemon dessert is out of this world. A must-try for anyone visiting.&rdquo;</p>
          </article>
        </div>
      </section>

      <section className="about" aria-labelledby="about-title">
        <div className="about-content">
          <h2 id="about-title">About Little Lemon</h2>
          <p className="about-location">Chicago</p>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment. The restaurant
            features a locally sourced menu with daily specials.
          </p>
          <p>
            Founded by two Italian brothers, Mario and Adrian, Little Lemon brings
            the flavors of the Mediterranean to the heart of Chicago.
          </p>
        </div>
        <div className="about-images">
          <img src="/mario-and-adrian-a.jpg" alt="Mario and Adrian in the Little Lemon kitchen" />
          <img src="/mario-and-adrian-b.jpg" alt="The Little Lemon founders preparing food" />
        </div>
      </section>
    </main>
  );
}

export default Main;