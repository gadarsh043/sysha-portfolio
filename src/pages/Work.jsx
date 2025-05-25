import './css/Work.scss';
import { useState, useEffect } from 'react';
import NavBar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';

// Import UI/UX images
import uiux1 from '@/assets/ui-ux/1.png';
import uiux2 from '@/assets/ui-ux/2.png';
import uiux3 from '@/assets/ui-ux/3.png';

// Import Architecture + Interior Design images
import arch1 from '@/assets/architecture-interior-design/1.png';
import arch2 from '@/assets/architecture-interior-design/2.png';
import arch3 from '@/assets/architecture-interior-design/3.png';
import arch4 from '@/assets/architecture-interior-design/4.png';
import arch5 from '@/assets/architecture-interior-design/5.png';
import arch6 from '@/assets/architecture-interior-design/6.png';
import arch7 from '@/assets/architecture-interior-design/7.png';

function Work() {
  const [activeTab, setActiveTab] = useState('architecture');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const uiuxImages = [uiux1, uiux2, uiux3];
  const architectureImages = [arch1, arch2, arch3, arch4, arch5, arch6, arch7];

  const currentImages = activeTab === 'uiux' ? uiuxImages : architectureImages;
  
  // Create seamless loop: last image + all images + first image
  const extendedImages = [
    currentImages[currentImages.length - 1], // Last image at start
    ...currentImages,                        // All original images
    currentImages[0]                         // First image at end
  ];

  // Auto-advance carousel every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle seamless loop
  useEffect(() => {
    if (currentImageIndex === 0) {
      // At fake last image, jump to real last image
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentImageIndex(currentImages.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 300);
    } else if (currentImageIndex === currentImages.length + 1) {
      // At fake first image, jump to real first image
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentImageIndex(1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 300);
    }
  }, [currentImageIndex, currentImages.length]);

  // Reset carousel when switching tabs
  useEffect(() => {
    setCurrentImageIndex(1); // Start at first real image
    setIsTransitioning(true);
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="background-container work-background">
      <NavBar />
      <main className="work-content">
        <div className="tabs-container">
          <button 
            className={`tab ${activeTab === 'uiux' ? 'active' : ''}`}
            onClick={() => handleTabChange('uiux')}
          >
            UI/UX
          </button>
          <button 
            className={`tab ${activeTab === 'architecture' ? 'active' : ''}`}
            onClick={() => handleTabChange('architecture')}
          >
            Architecture + Interior Design
          </button>
        </div>
        
        <div className="carousel-wrapper">
          <button className="carousel-nav prev" onClick={handlePrevious}>
            &#8249;
          </button>
          
          <div className="carousel-container">
            <div 
              className="carousel-track" 
              style={{
                transform: `translateX(-${currentImageIndex * 33.33}%)`,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
              }}
            >
              {extendedImages.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img src={image} alt={`${activeTab} project ${((index - 1 + currentImages.length) % currentImages.length) + 1}`} />
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-nav next" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Work;