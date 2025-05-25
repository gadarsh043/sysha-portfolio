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

  const uiuxImages = [uiux1, uiux2, uiux3];
  const architectureImages = [arch1, arch2, arch3, arch4, arch5, arch6, arch7];

  const currentImages = activeTab === 'uiux' ? uiuxImages : architectureImages;

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImages.length]);

  // Reset carousel when switching tabs
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  };

  // Calculate which images to show (current and next 2)
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const imageIndex = (currentImageIndex + i) % currentImages.length;
      visible.push({
        image: currentImages[imageIndex],
        index: imageIndex
      });
    }
    return visible;
  };

  const visibleImages = getVisibleImages();

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
            <div className="carousel-track">
              {visibleImages.map((item, displayIndex) => (
                <div key={`${currentImageIndex}-${displayIndex}`} className="carousel-slide">
                  <img src={item.image} alt={`${activeTab} project ${item.index + 1}`} />
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