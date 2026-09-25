import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <img src="/little-lemon-logo.svg" alt="Little Lemon logo" />

      <section>
        <h2>Navigation</h2>
        <nav aria-label="Footer navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#specials">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/#specials">Order Online</Link></li>
            <li><Link to="/">Login</Link></li>
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