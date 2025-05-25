import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Work from '../pages/Work';
import Play from '../pages/Play';
import Contact from '../pages/Contact';
import Architerrax from '../components/Architerrax';
import Scutoid from '../components/Scutoid';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/play" element={<Play />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/play/architerrax" element={<Architerrax />} />
      <Route path="/play/scutoid" element={<Scutoid />} />
    </Routes>
  );
}

export default AppRoutes;