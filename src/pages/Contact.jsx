import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => (
  <>
    <Header />
    <main className="main-content">
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>For inquiries, orders, or custom deals, reach out to us:</p>
        <ul className="contact-list">
          <li><strong>Location:</strong> Pichopa Kalan, Charkhi Dadri, Haryana</li>
          <li><strong>Service Area:</strong> Pan-India</li>
          <li><strong>Email:</strong> <a href="mailto:info@dsmsc.com">info@dsmsc.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+911234567890">+91 12345 67890</a></li>
        </ul>
        <div className="map-section" style={{marginTop: '2rem'}}>
          <h3>Find Us on Google Maps</h3>
          <iframe
            title="DSMSC Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.217964813624!2d76.08328!3d28.5515997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39128d0009f71d09%3A0xcf8cebf1f791baaa!2sDada%20Syonand%20Maharaj%20Stone%20Crusher%20Pichopa!5e0!3m2!1sen!2sin!4v1693660800000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{border:0, borderRadius:'8px'}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Contact;
