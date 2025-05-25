import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  
  // Check if current route is a play sub-route (not the main /play route)
  const isPlaySubRoute = location.pathname.startsWith('/play/') && location.pathname !== '/play';
  
  // Check if current route is a work sub-route (not the main /work route)
  const isWorkSubRoute = location.pathname.startsWith('/work/') && location.pathname !== '/work';

  return (
    <footer className={`footer ${isPlaySubRoute ? 'play-route-footer' : ''} ${isWorkSubRoute ? 'work-route-footer' : ''}`}>
      <p>© Sysha Sharma 2025</p>
    </footer>
  );
}

export default Footer;