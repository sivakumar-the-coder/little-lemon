import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  const isBookingRoute = location.pathname === '/booking' || location.pathname === '/confirmed';

  return (
    <nav>
      <img src="/little-lemon-logo.svg" alt="Little Lemon logo" />
      <ul>
        <li><Link to="/" aria-current={location.pathname === '/' ? 'page' : undefined}>Home</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#specials">Menu</Link></li>
        <li><Link to="/booking" aria-current={isBookingRoute ? 'page' : undefined}>Reservations</Link></li>
        <li><Link to="/#specials">Order Online</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;