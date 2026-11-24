import React from 'react';
import './BookingBanner.css'; // Optional: move styles to CSS file

const BookingBanner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h1>Need a Ride to the Cruise Ship or Airport?</h1>
        <p>
          Call now to reserve your shuttle. Instant confirmation in under 3
          seconds. Fast, reliable, and stress-free!
        </p>
      </div>
      <a className="cta-button" href="tel:+12065551234">
        📞 Call Now to Book
      </a>
    </section>
  );
};

export default BookingBanner;
