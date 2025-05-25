import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Work from '../pages/Work';
import Play from '../pages/Play';
import Contact from '../pages/Contact';
import Architerrax from '../components/Architerrax';
import Scutoid from '../components/Scutoid';
import Octaphilosophy from '../components/Octaphilosophy';
import Adyamu from '../components/Adyamu';

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
      <Route path="/play/octaphilosophy" element={<Octaphilosophy />} />
      <Route path="/play/adyamu" element={<Adyamu />} />
    </Routes>
  );
}

export default AppRoutes;