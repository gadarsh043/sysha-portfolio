import { useState, useEffect } from 'react';
import './css/About.scss';
import AboutCard from '@/assets/about-card.png'
import ResumePDF from '@/assets/Resume.pdf';
import NavBar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';

function About() {
  const skills = [
    "Attention to detail",
    "Problem-solving",
    "Creative thinking",
    "Design thinking",
    "Creative writing",
    "Mental modeling",
    "Visual storytelling",
    "Process optimization",
    "Cross-disciplinary thinking",
    "Risk assessment",
    "User research",
    "Information Architecture",
    "Wireframing",
    "Prototyping",
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(null);
  const [usedIndices, setUsedIndices] = useState([]);

  // Function to get a random skill index that hasn't been used recently
  const getRandomSkillIndex = () => {
    if (usedIndices.length >= skills.length) {
      setUsedIndices([]);
      return Math.floor(Math.random() * skills.length);
    }

    let index;
    do {
      index = Math.floor(Math.random() * skills.length);
    } while (usedIndices.includes(index));

    setUsedIndices([...usedIndices, index]);
    return index;
  };

  // Function to show a random skill
  const showRandomSkill = () => {
    const randomIndex = getRandomSkillIndex();
    setCurrentSkillIndex(randomIndex);

    // Schedule the next skill change after 2000ms
    setTimeout(showRandomSkill, 2000);
  };

  // Start the skill rotation on component mount
  useEffect(() => {
    showRandomSkill();
    return () => clearTimeout();
  }, []);

  return (
    <div className="background-container">
      <NavBar />
      <main className="page-content">
        <div className="about-container">
          <div className="about-image">
            <img src={AboutCard} alt="Polaroid picture of Sysha" />
          </div>
          <div className="about-content">
            <div className="skills-container">
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <h1
                    key={index}
                    id={`skill-${index}`}
                    className={`skill ${currentSkillIndex === index ? 'active' : ''}`}
                  >
                    {skill}
                  </h1>
                ))}
              </div>
            </div>
            <div className="about-bio">
              <p>
                Design has always been my foundation, but I’ve built on it with a diverse set of skills that bridge creativity and management. With a background in architecture and interior design, I’ve spent years mastering visual storytelling, spatial composition, and aesthetics. Now, as a management professional, I’m expanding my expertise to understand the strategic, operational, and business aspects of the creative industry—while actively transitioning into user experience design. This pivot allows me to combine design thinking with user research, data-driven decision-making, and systems-level problem solving. The result is an ability to approach projects with both artistic vision and structured, user-centered execution.
              </p>
              <p>
                Beyond my professional pursuits, I’m a curious explorer at heart. I have an ever-growing love for design—whether it’s problem resolution, creative brainstorming, or the way spaces shape human emotions. When I’m not obsessing over aesthetics, you’ll find me surrounded by my favorite things: dogs, snakes, and plants. Travel fuels my creativity, offering new perspectives and design inspiration at every turn. Whether it’s a bustling city or a quiet forest, I love immersing myself in different environments, always looking for stories hidden in the details.
              </p>
              <div className="resume">
                <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
                  <p>View my Resume</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;