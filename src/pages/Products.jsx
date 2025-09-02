import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Products = () => (
  <>
    <Header />
    <main className="main-content">
      <section className="products-section">
        <h2>Our Products</h2>
        <ul className="product-list">
          <li><strong>10mm Aggregates:</strong> For concrete, roadwork, and construction.</li>
          <li><strong>20mm Aggregates:</strong> For heavy-duty foundations and infrastructure.</li>
          <li><strong>Stone Dust:</strong> For paving, landscaping, and filler.</li>
          <li><strong>Boulders:</strong> For retaining walls, landscaping, and custom needs.</li>
        </ul>
      </section>
    </main>
    <Footer />
  </>
);

export default Products;
