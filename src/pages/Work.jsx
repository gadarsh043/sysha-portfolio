import './css/Work.scss';

function Work() {
  return (
    <div className="background-container">
      <main className="page-content">
        <h1>My Work</h1>
        <div className="work-categories">
          <div className="category">
            <h2>UI/UX</h2>
            <ul>
              <li>CUT.DWN</li>
              <li>Class Project</li>
              <li>This website</li>
            </ul>
          </div>
          <div className="category">
            <h2>Architecture</h2>
            <ul>
              <li>Vayu</li>
              <li>Xyz</li>
              <li>Abcdef Open</li>
            </ul>
          </div>
          <div className="category">
            <h2>Interiors</h2>
            <ul>
              <li>Adhyamu</li>
              <li>The Regency</li>
              <li>Ali’s Office</li>
              <li>Poliform Flagship Showroom</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Work;