import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';
import './css/Navbar.scss'

function NavBar() {
  const location = useLocation();
  const [isWorkMenuOpen, setIsWorkMenuOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsWorkMenuOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsWorkMenuOpen(false);
      setCloseTimeout(null);
    }, 100);
    setCloseTimeout(timeout);
  };

  return (
    <header className="top-nav">
      <nav className="nav-links-left">
        <Link to="/about" className={`nav-about ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
        <Link to="/work" className={`nav-work ${location.pathname === '/work' ? 'active' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Work</Link>
        <div className='work-drop-container'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {isWorkMenuOpen && (
            <div className="work-categories">
              <div className="category">
                <h2>UI/UX</h2>
                <ul>
                  <li className='pointer'>CUT.DWN</li>
                  <li className='pointer'>Class Project</li>
                  <li className='pointer'>This website</li>
                </ul>
              </div>
              <div className="category">
                <h2>Architecture</h2>
                <ul>
                  <li className='pointer'>Vayu</li>
                  <li className='pointer'>Xyz</li>
                  <li className='pointer'>Abcdef Open</li>
                </ul>
              </div>
              <div className="category">
                <h2>Interiors</h2>
                <ul>
                  <li className='pointer'>Adhyamu</li>
                  <li className='pointer'>The Regency</li>
                  <li className='pointer'>Ali’s Office</li>
                  <li className='pointer'>Poliform Flagship Showroom</li>
                </ul>
              </div>
            </div>
          )}
        </div>
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