function Footer() {
  return (
    <footer>
      <img src="/logo192.png" alt="Little Lemon logo" />

      <section>
        <h2>Navigation</h2>
        <nav aria-label="Footer navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </section>

      <section>
        <h2>Contact</h2>
        <address>
          <p>123 Main Street, Chicago, IL</p>
          <p>Phone: (312) 555-0100</p>
          <p>Email: info@littlelemon.com</p>
          <p>Hours: Mon-Sun 11am-10pm</p>
        </address>
      </section>

      <section>
        <h2>Social Media</h2>
        <ul>
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://www.instagram.com">Instagram</a></li>
          <li><a href="https://www.twitter.com">Twitter</a></li>
          <li><a href="https://www.youtube.com">YouTube</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;