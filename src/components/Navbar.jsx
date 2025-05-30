import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';
import './css/Navbar.scss'

function NavBar() {
  const location = useLocation();
  const [isWorkMenuOpen, setIsWorkMenuOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);

  // Check if current route is a play sub-route (not the main /play route)
  const isPlaySubRoute = location.pathname.startsWith('/play/') && location.pathname !== '/play';
  
  // Check if current route is a work sub-route (not the main /work route)
  const isWorkSubRoute = location.pathname.startsWith('/work/') && location.pathname !== '/work';

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
    <header className={`top-nav ${isPlaySubRoute ? 'play-route-nav' : ''} ${isWorkSubRoute ? 'work-route-nav' : ''}`}>
      <nav className="nav-links-left">
        <Link to="/about" className={`nav-about ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
        <Link to="/work" className={`nav-work ${location.pathname === '/work' || location.pathname.startsWith('/work/') ? 'active' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Work</Link>
        <div className='work-drop-container'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {isWorkMenuOpen && (
            <div className="work-categories">
              <div className="category">
                <h2>UI/UX</h2>
                <ul>
                  <li className='pointer'>Lucent</li>
                  <li className='pointer'>CUT.DWN</li>
                  <li className='pointer'>TGE</li>
                  <li><Link to="/work/user-research" className='pointer'>User Research</Link></li>
                </ul>
              </div>
              <div className="category width-change">
                <h2>Architecture + Interior Design</h2>
                <ul>
                  <li className='pointer'>Poliform Experience Centre</li>
                  <li className='pointer'>The Regency</li>
                  <li className='pointer'>Ventura Experience Centre</li>
                  <li className='pointer'>Sona Residence</li>
                  <li className='pointer'>DryBy Nail Salon</li>
                  <li className='pointer'>The Vayu</li>
                  <li className='pointer'>Aabha Residence</li>
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
        <Link to="/play" className={`nav-play ${location.pathname === '/play' || location.pathname.startsWith('/play/') ? 'active' : ''}`}>Play</Link>
        <Link to="/contact" className={`nav-contact ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
      </nav>
    </header>
  );
}

export default NavBar;