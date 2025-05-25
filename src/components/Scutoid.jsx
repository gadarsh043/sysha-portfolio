import './css/Scutoid.scss';
import { useState } from 'react';
import NavBar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import img1 from '@/assets/scutoid/1.png';

function Scutoid() {
    
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="background-container play-route-background">
        <NavBar />
        <main className="scutoid-content">
            <div className='main-grid'>
                <div className='main-image'>
                    <img src={img1} alt="Hotel Scutoid main visualization" />
                </div>
                <div className='info-panel'>
                    <div className="project-title">
                        Hotel Scutoid
                    </div>
                    <div className="info-card">
                        <div className="info-header" onClick={handleToggle}>
                            <div className="info-details">
                                <div className="role">Under Prof. Sonali Walimbe</div>
                                <div className="year">Year: 2021</div>
                                <div className="scope">Scope: AutoCAD, Structural Design, Interior Design, Literature Study, Case Studies, Architectural Design, Moodboarding, Rendering, Zoning, Spatial Planning, 3-D Modeling, Site Documentation, Site Analysis, Working Drawings, SketchUp</div>
                            </div>
                            <div className="toggle-arrow">
                                {isOpen ? '▲' : '▼'}
                            </div>
                        </div>
                        {isOpen && (
                            <div className="info-content">
                                Manipal has a rich culture due to being in close proximity with Udupi which is a famous Indian temple town. Mangalorian tiles and bricks adorn the built-scape of the region. But since the past very many decades, a new identity has been shaping the face of Manipal. Manipal university, founded by Dr. T.M.A. Pai and established in 1953, has brought in students from across the country and the globe in increasing numbers with each passing year. The concept is inspired by and is a representation of the youth of Manipal and their aspirational vision.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default Scutoid;
