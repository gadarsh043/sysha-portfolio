import { useState } from 'react';
import './css/Contact.scss';
import organicShape from '@/assets/organic-shape.png';
import NavBar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error for the field when user starts typing
    setErrors((prev) => ({ ...prev, [id]: '' }));
  };

  // Validate form inputs
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', phone: '', message: '' };

    // Check if fields are filled
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate phone number format (e.g., +1 (XXX) XXX-XXXX or 10 digits)
    const phoneRegex = /^\+1\s\(\d{3}\)\s\d{3}-\d{4}$|^\d{10}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (e.g., +1 (XXX) XXX-XXXX or 10 digits)';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // EmailJS configuration
    const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS Service ID
    const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS Template ID
    const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS Public Key

    // Prepare the email parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSubmissionStatus('success');
        // Reset form after successful submission
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setSubmissionStatus('error');
      });
  };

  return (
    <div className="background-container contact-page-active">
      <NavBar />
      <main className="contact-page">
        <div className="contact-info-section">
          <h1>Get In Touch!</h1>
          <div className="contact-details">
            <p>
              <i className="fas fa-map-marker-alt"></i>
              Dallas, Texas
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              <a href="mailto:syshasharma@gmail.com">syshasharma@gmail.com</a>
            </p>
            <p>
              <i className="fas fa-phone"></i>
              +1 (623) 218-3389
            </p>
          </div>
          <div className="social-media">
            <a href="https://www.instagram.com/sysha.s" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/syshasharma" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://medium.com/@syshasharma" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-medium"></i>
            </a>
          </div>
        </div>
        <div className="contact-form-section">
          <div
            className="form-container"
            style={{
              backgroundImage: `url(${organicShape})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top center',
              backgroundSize: '100%',
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              <button type="submit" className="submit-btn">SUBMIT</button>
              {submissionStatus === 'success' && (
                <p className="success-message">Your message has been sent successfully!</p>
              )}
              {submissionStatus === 'error' && (
                <p className="error-message">Failed to send your message. Please try again later.</p>
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;