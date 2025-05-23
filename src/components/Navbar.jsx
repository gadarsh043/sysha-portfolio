import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png'

function NavBar() {
  const location = useLocation();
  return (
    <header className="top-nav">
      <nav className="nav-links-left">
        <Link to="/about" className={`nav-about ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
        <Link to="/work" className={`nav-work ${location.pathname === '/work' ? 'active' : ''}`}>Work</Link>
      </nav>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="nav-links-right">
        <Link to="/play" className={`nav-play ${location.pathname === '/play' ? 'active' : ''}`}>Play</Link>
        <Link to="/contact" className={`nav-contact ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
      </nav>
    </header>
  );
}

export default NavBar;