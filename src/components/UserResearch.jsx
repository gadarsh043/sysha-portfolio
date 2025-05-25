import './css/UserResearch.scss';
import { useState } from 'react';
import NavBar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import marshallPdf from '@/assets/ux-research/Marshall.pdf';
import museumPdf from '@/assets/ux-research/Museum of the Future.pdf';
import finnairPdf from '@/assets/ux-research/Finnair.pdf';

function UserResearch() {
  const [openCards, setOpenCards] = useState({
    marshall: false,
    museum: false,
    finnair: false
  });

  const handleToggle = (cardName) => {
    setOpenCards(prev => ({
      ...prev,
      [cardName]: !prev[cardName]
    }));
  };

  return (
    <div className="background-container work-route-background">
      <NavBar />
      <main className="user-research-content">
        <div className="page-title">
          User Research Projects
        </div>

        {/* Finnair Project */}
        <div className="info-card full-width">
        <div className="info-header" onClick={() => handleToggle('finnair')}>
            <div className="info-details">
            <div className="role">Finnair - Service Design Research</div>
            <div className="year">Year: 2023</div>
            <div className="scope">Scope: Service Design, Customer Journey Analysis, UX Research</div>
            </div>
            <div className="toggle-arrow">
            {openCards.finnair ? '▲' : '▼'}
            </div>
        </div>
        {openCards.finnair && (
            <div className="info-content">
            <div className="pdf-container">
                <iframe
                src={finnairPdf}
                width="100%"
                height="600px"
                title="Finnair Service Design Research PDF"
                />
            </div>
            </div>
        )}
        </div>
        
        {/* Marshall Project */}
        <div className="info-card full-width">
          <div className="info-header" onClick={() => handleToggle('marshall')}>
            <div className="info-details">
              <div className="role">Marshall - User Experience Research</div>
              <div className="year">Year: 2023</div>
              <div className="scope">Scope: User Research, Data Analysis, UX Strategy</div>
            </div>
            <div className="toggle-arrow">
              {openCards.marshall ? '▲' : '▼'}
            </div>
          </div>
          {openCards.marshall && (
            <div className="info-content">
              <div className="pdf-container">
                <iframe
                  src={marshallPdf}
                  width="100%"
                  height="600px"
                  title="Marshall UX Research PDF"
                />
              </div>
            </div>
          )}
        </div>

        {/* Museum of the Future Project */}
        <div className="info-card full-width">
          <div className="info-header" onClick={() => handleToggle('museum')}>
            <div className="info-details">
              <div className="role">Museum of the Future - Experience Design Research</div>
              <div className="year">Year: 2023</div>
              <div className="scope">Scope: Experience Design, User Journey Mapping, Research Analysis</div>
            </div>
            <div className="toggle-arrow">
              {openCards.museum ? '▲' : '▼'}
            </div>
          </div>
          {openCards.museum && (
            <div className="info-content">
              <div className="pdf-container">
                <iframe
                  src={museumPdf}
                  width="100%"
                  height="600px"
                  title="Museum of the Future Research PDF"
                />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default UserResearch;
