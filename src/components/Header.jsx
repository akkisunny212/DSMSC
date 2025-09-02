import React from 'react';
import Logo from '../logo/Logo';
import { colors, typography } from '../theme/theme';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <Logo size={48} />
      <div className="company-info">
        <h1 className="company-name">Dada Syonand Maharaj Stone Crusher</h1>
        <span className="tagline">“Crushing Limits, Building Foundations”</span>
      </div>
    </div>
    <nav className="nav">
      <a href="/" className="nav-link">Home</a>
      <a href="/about" className="nav-link">About Us</a>
      <a href="/products" className="nav-link">Products</a>
      <a href="/services" className="nav-link">Services</a>
      <a href="/gallery" className="nav-link">Gallery</a>
      <a href="/contact" className="nav-link">Contact</a>
  <a href="/quote" className="nav-link">Quote Calculator</a>
  <a href="/owners" className="nav-link">Owners</a>
    </nav>
  </header>
);

export default Header;
