import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Gallery = () => (
  <>
    <Header />
    <main className="main-content">
      <section className="gallery-section">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {/* Placeholder images, replace with actual photos */}
          <div className="gallery-item">Image 1</div>
          <div className="gallery-item">Image 2</div>
          <div className="gallery-item">Image 3</div>
          <div className="gallery-item">Image 4</div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Gallery;
