import './css/Architerrax.scss';
import { useState } from 'react';
import NavBar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import img1 from '@/assets/architerrax/1.png';
import img2 from '@/assets/architerrax/2.png';
import img3 from '@/assets/architerrax/3.png';
import img4 from '@/assets/architerrax/4.png';
import img5 from '@/assets/architerrax/5.png';
import img6 from '@/assets/architerrax/6.png';

function Architerrax() {
    
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);

  };
  return (
    <div className="background-container">
        <NavBar />
        <main className="architerrax-content">
            <div className='grid'>
                <div className='left-side'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </div>
                <div className='right-side'>
                    <div className="title">
                        ArchiterraX
                    </div>
                    <div className="collapsible-section">
                        <div className="collapsible-title" onClick={handleToggle}>
                            Fellow, ArchiterraX
                            <br />
                            <br />
                            Year: 2021-22
                            <br />
                            <br />
                            Scope: Research, Social Media, Workshops
                            <span>{isOpen ? '▼' : '▲'}</span>
                        </div>
                        {isOpen && <div className="collapsible-content">
                            At ArchiterraX—a platform dedicated to fostering global collaboration among architecture students and professionals—I participated in a fellowship that emphasized knowledge exchange, interdisciplinary learning, and design dialogue. During my time there, I engaged in research on emerging topics in architecture, contributed to content creation for the organization’s social media platforms, and participated in Rhino software workshops to enhance my parametric design skills. I also built meaningful connections with a global network of like-minded architects.
                            <br /><br />
                            This experience deepened my understanding of collaborative design discourse while helping ArchiterraX grow its digital footprint and knowledge base. It was a mutually enriching exchange that bridged learning, creativity, and community engagement in the architectural field.
                        </div>}
                    </div>

                </div>
            </div>
            <div className='grid2'>
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default Architerrax;