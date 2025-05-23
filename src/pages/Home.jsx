import { Link } from 'react-router-dom';
import './css/Home.scss';
import AboutCard from '@/assets/about-card.png'
import WorkCard from '@/assets/work-card.png'
import PlayCard from '@/assets/play-card.png'
import ContactCard from '@/assets/contact-card.png'
import NavBar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';

function Home() {
  return (
    <div className="background-container">
      <NavBar />
      <main className="main-content">
        <div className="content-section">
          <h2>UI/UX</h2>
          <ul>
            <li>CUT.DWN</li>
            <li>Class Project</li>
            <li>This website</li>
          </ul>
        </div>
        <div className="content-section">
          <h2>Architecture</h2>
          <ul>
            <li>Vayu</li>
            <li>Xyz</li>
            <li>Abcdef Open</li>
          </ul>
        </div>
        <div className="content-section">
          <h2>Interiors</h2>
          <ul>
            <li>Adhyamu</li>
            <li>The Regency</li>
            <li>Ali’s Office</li>
            <li>Poliform Flagship Showroom</li>
          </ul>
        </div>
      </main>
      <div className="card-stack-container">
        <Link to="/about" className="stacked-card" id="card-about">
          <img src={AboutCard} alt="About" />
        </Link>
        <Link to="/work" className="stacked-card" id="card-work">
          <img src={WorkCard} alt="Work" />
        </Link>
        <Link to="/play" className="stacked-card" id="card-play">
          <img src={PlayCard} alt="Play" />
        </Link>
        <Link to="/contact" className="stacked-card" id="card-contact">
          <img src={ContactCard} alt="Contact" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;