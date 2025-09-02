import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => (
  <>
    <Header />
    <main className="main-content">
      <section className="services-section">
        <h2>Our Services</h2>
        <ul className="service-list">
          <li><strong>Transportation:</strong> Reliable delivery across India.</li>
          <li><strong>Bulk Supply:</strong> Large-scale orders for projects.</li>
          <li><strong>Custom Deals:</strong> Tailored solutions for unique requirements.</li>
        </ul>
      </section>
    </main>
    <Footer />
  </>
);

export default Services;
