import './css/Octaphilosophy.scss';
import { useState } from 'react';
import NavBar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import img1 from '@/assets/octaphilosophy/1.png';

function Octaphilosophy() {
    
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="background-container play-route-background">
        <NavBar />
        <main className="octaphilosophy-content">
            <div className='main-grid'>
                <div className='main-image'>
                    <img src={img1} alt="Octaphilosophy moodboard visualization" />
                </div>
                <div className='info-panel'>
                    <div className="project-title">
                        OCTAPHILOSOPHY: The Eight Elements of Restaurant André
                    </div>
                    <div className="info-card">
                        <div className="info-header" onClick={handleToggle}>
                            <div className="info-details">
                                <div className="role">Self</div>
                                <div className="year">Year: 2023</div>
                                <div className="scope">Scope: Interior Design, Moodboarding</div>
                            </div>
                            <div className="toggle-arrow">
                                {isOpen ? '▲' : '▼'}
                            </div>
                        </div>
                        {isOpen && (
                            <div className="info-content">
                                Led by chef-owner André Chiang, Restaurant André is built upon his distinctive culinary philosophy known as Octaphilosophy. This concept encapsulates eight fundamental elements of gastronomy—salt, texture, memory, pure, terroir, south, artisan, and unique—which collectively shape the restaurant&apos;s identity and menu.
                                <br /><br />
                                This moodboard translates the essence of Octaphilosophy into an interior design narrative, drawing inspiration from the film André and His Olive Tree. The composition reflects a meticulous interplay of materiality, sensory depth, and spatial storytelling—where textures evoke memory, colors embrace terroir, and the purity of form creates an artisanal dialogue between space and experience.
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

export default Octaphilosophy; 