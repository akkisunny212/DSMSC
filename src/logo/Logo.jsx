import React from 'react';

const Logo = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="#7C6A4A" stroke="#A89F91" strokeWidth="4" />
    <rect x="18" y="36" width="28" height="12" rx="6" fill="#A89F91" />
    <polygon points="32,16 24,36 40,36" fill="#D9B382" />
    <text x="32" y="54" textAnchor="middle" fontFamily="Oswald, Arial, sans-serif" fontWeight="700" fontSize="12" fill="#2E2B26">DSMSC</text>
  </svg>
);

export default Logo;
