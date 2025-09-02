import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <Header />
    <main className="main-content">
      <section className="hero">
        <h2>Welcome to DSMSC</h2>
        <p>Premium-grade aggregates, stone dust, and boulders. Timely delivery, consistent quality, competitive pricing.</p>
      </section>
      <section className="quick-links">
        <a href="/products" className="quick-link">View Products</a>
        <a href="/services" className="quick-link">Our Services</a>
        <a href="/contact" className="quick-link">Contact Us</a>
      </section>
    </main>
    <Footer />
  </>
);

export default Home;
