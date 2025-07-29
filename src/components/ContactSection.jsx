import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Get in Touch</h2>
        <p>
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hi.
        </p>
        <div className="contact-info">
          <p><strong>Email:</strong> contact@example.com</p>
          <p><strong>Phone:</strong> +92 123 4567890</p>
          <p><strong>Location:</strong> Lahore, Pakistan</p>
        </div>
      </div>

      <div className="contact-right">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
