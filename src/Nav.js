import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <img src="/little-lemon-logo.svg" alt="Little Lemon logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#specials">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/#specials">Order Online</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;