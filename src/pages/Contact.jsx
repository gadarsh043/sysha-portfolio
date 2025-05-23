import './css/Contact.scss';

function Contact() {
  return (
    <div className="background-container contact-page-active">
      <main className="contact-page">
        <div className="contact-info-section">
          <h1>Get In Touch!</h1>
          <div className="contact-details">
            <p>
              <i className="fas fa-map-marker-alt"></i>
              7421 Frankford Road, Richardson, Texas - 75252
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              <a href="mailto:sysha.sharma@gmail.com">sysha.sharma@gmail.com</a>
            </p>
            <p>
              <i className="fas fa-phone"></i>
              +1 623-218 (3389)
            </p>
          </div>
          <div className="social-media">
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-behance"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="contact-form-section">
          <div className="form-container">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" placeholder="Your Phone" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="submit-btn">SUBMIT</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;