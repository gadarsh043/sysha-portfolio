import './css/Adyamu.scss';
import { useState } from 'react';
import NavBar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import img1 from '@/assets/adyamu/1.png';
import img2 from '@/assets/adyamu/2.png';
import img3 from '@/assets/adyamu/3.png';
import img4 from '@/assets/adyamu/4.png';
import img5 from '@/assets/adyamu/5.png';
import img6 from '@/assets/adyamu/6.png';
import img7 from '@/assets/adyamu/7.png';

function Adyamu() {
    
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="background-container play-route-background">
        <NavBar />
        <main className="adyamu-content">
            <div className='main-grid'>
                <div className='mobile-mockups'>
                    <div className="phone-mockup">
                        <img src={img1} alt="adyamu project image 1" />
                    </div>
                    <div className="phone-mockup">
                        <img src={img2} alt="adyamu project image 2" />
                    </div>
                </div>
                <div className='info-panel'>
                    <div className="project-title">
                        Adyamu
                    </div>
                    <div className="info-card">
                        <div className="info-header" onClick={handleToggle}>
                            <div className="info-details">
                                <div className="role">Self</div>
                                <div className="year">Year: 2023</div>
                                <div className="scope">Scope: Interior Design, Moodboarding, Site Inspection, BOQ, 3-D Modeling, Furniture Curation, Spatial Planning, Concepts, Material Selection, Lighting Design, Furniture Curation, Spatial Planning</div>
                            </div>
                            <div className="toggle-arrow">
                                {isOpen ? '▲' : '▼'}
                            </div>
                        </div>
                        {isOpen && (
                            <div className="info-content">
                                Adyamu was a compact yet deeply personal residential interior design project that I led from concept to completion under strict budgetary and timeline constraints. The goal was to create a space that felt elevated yet rooted—blending function, comfort, and understated elegance. Each area, from the custom wardrobe study units to the living room&apos;s curated lighting setup, was crafted with care to reflect mindful living and spatial harmony.
                                <br /><br />
                                The design language embraced a muted material palette layered with pops of warmth through natural textures and curated decor, and cozy lighting—to create a space that feels both grounded and joyful. From the bespoke pooja unit nestled in a transitional space to vibrant artwork that celebrates local identity, every element was optimized for utility while maintaining a strong aesthetic identity.
                                <br /><br />
                                Working with limited resources challenged me to think innovatively—balancing design aspirations with real-world constraints. I learned to prioritize, detailing, build clear communication pipelines with contractors and vendors, and navigate the complexities of execution. The experience sharpened my problem-solving skills and reaffirmed my belief in design as a medium for emotional and spatial storytelling.
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='additional-images'>
                <div className='row-three'>
                    <img src={img3} alt="adyamu work sample 1" />
                    <img src={img4} alt="adyamu work sample 2" />
                    <img src={img5} alt="adyamu work sample 3" />
                </div>
                <div className='row-two'>
                    <img src={img6} alt="adyamu work sample 4" />
                    <img src={img7} alt="adyamu work sample 5" />
                </div>
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default Adyamu; 