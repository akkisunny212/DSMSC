import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const owners = [
  {
    name: 'Vikash Beniwal',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Founder & Operations Head. Passionate about quality and customer service. (Bio placeholder)',
  },
  {
    name: 'Dinesh Kumar',
    image: 'https://randomuser.me/api/portraits/men/33.jpg',
    bio: 'Logistics & Supply Chain Expert. Ensures timely delivery. (Bio placeholder)',
  },
  {
    name: 'Jitener',
    image: 'https://randomuser.me/api/portraits/men/34.jpg',
    bio: 'Sales & Customer Relations. Dedicated to client satisfaction. (Bio placeholder)',
  },
  {
    name: 'Praveen Lamba',
    image: 'https://randomuser.me/api/portraits/men/35.jpg',
    bio: 'Finance & Strategy. Focused on growth and value. (Bio placeholder)',
  },
];

const Owners = () => (
  <>
    <Header />
    <main className="main-content">
      <section className="owners-section">
        <h2>Meet the Owners</h2>
        <div className="owners-grid">
          {owners.map(owner => (
            <div className="owner-card" key={owner.name}>
              <img src={owner.image} alt={owner.name} className="owner-img" />
              <h3>{owner.name}</h3>
              <p>{owner.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Owners;
