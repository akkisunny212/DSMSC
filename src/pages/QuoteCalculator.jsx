import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const productPrices = {
  '10mm': 800,
  '20mm': 750,
  'dust': 600,
  'boulders': 500,
};

const locations = [
  'Pichopa Kalan',
  'Charkhi Dadri',
  'Delhi',
  'Mumbai',
  'Other',
];

const locationMultipliers = {
  'Pichopa Kalan': 1,
  'Charkhi Dadri': 1.05,
  'Delhi': 1.15,
  'Mumbai': 1.25,
  'Other': 1.3,
};

const QuoteCalculator = () => {
  const [product, setProduct] = useState('10mm');
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState('Pichopa Kalan');
  const [quote, setQuote] = useState(null);

  const calculateQuote = (e) => {
    e.preventDefault();
    const basePrice = productPrices[product] || 0;
    const multiplier = locationMultipliers[location] || 1;
    const estimated = basePrice * quantity * multiplier;
    setQuote(estimated);
  };

  return (
    <>
      <Header />
      <main className="main-content">
        <section className="quote-section">
          <h2>Quote Calculator</h2>
          <form className="quote-form" onSubmit={calculateQuote}>
            <label>
              Product Type:
              <select value={product} onChange={e => setProduct(e.target.value)}>
                <option value="10mm">10mm Aggregates</option>
                <option value="20mm">20mm Aggregates</option>
                <option value="dust">Stone Dust</option>
                <option value="boulders">Boulders</option>
              </select>
            </label>
            <label>
              Quantity (tons):
              <input type="number" min="1" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
            </label>
            <label>
              Location:
              <select value={location} onChange={e => setLocation(e.target.value)}>
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </label>
            <button type="submit">Get Quote</button>
          </form>
          {quote !== null && (
            <div className="quote-result">
              <strong>Estimated Price: ₹{quote.toLocaleString()}</strong>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default QuoteCalculator;
