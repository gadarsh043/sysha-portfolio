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

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/; // Matches "+1 (623) 218-3389"

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone number must be in the format +1 (XXX) XXX-XXXX';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error for the field when user starts typing
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: null }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // EmailJS configuration
    const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS Service ID
    const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS Template ID
    const userId = 'YOUR_USER_ID'; // Replace with your EmailJS User ID

    // Prepare the email parameters
    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    // Send email using EmailJS
    emailjs
      .send(serviceId, templateId, emailParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
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
              7421 Frankford Road, Richardson, Texas - 75252
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
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <span className="error">{errors.message}</span>}
              </div>
              {submitStatus === 'success' && (
                <p className="success-message">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="error-message">Failed to send message. Please try again.</p>
              )}
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'SUBMIT'}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;