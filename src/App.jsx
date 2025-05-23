import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import NavBar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;