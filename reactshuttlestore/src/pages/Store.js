

import { Row, Col } from "react-bootstrap";
import { productsArray } from '../ProductStore';
import Productcard from '../components/Productcard';
import './Store.css';

function Store() {
    return (
      <>

        <section className="booking-banner">
          <div className="banner-container">

          <img
              src="https://2seattleairportshuttles.com/images/cruiseship-bunny.jpg"
              alt="Cruise Shuttle Banner"
              className="banner-image"
            />

            

            <div className="booking-banner-overlay">

              <h1>🚐 Cruise or Airport Ride?</h1>

              <p>
                Fast & Secure Booking. Instant Confirmation in 3 Seconds!
              </p>

              <div className="highlight-box">

                <h2>
                  ✅ Cruise Ship Shuttle? Book Now — Seats Fill Fast!
                </h2>

                <p>
                  📞 
                  <a 
                    href="tel:+12068983322" 
                    className="booking-button pulse"
                  >
                    Call Now to Reserve Instantly: (206) 898-3322
                  </a>
                </p>

                <p>
                  📲 Or Text <strong>"CRUISE"</strong> to{" "}
                  <a href="sms:+12068983322">
                    206-898-3322
                  </a>
                </p>

                <p>
                  🕒 Takes less than 3 seconds to reserve your ride.
                </p>

                <p>
                  <a 
                    href="https://2SeattleAirportShuttles.com"
                    className="site-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    2SeattleAirportShuttles.com
                  </a>
                </p>

              </div>
            </div>

          </div>
        </section>


        <h1 align="center" className="p-3">
          Welcome to the store!
        </h1>


        <Row xs={1} md={3} className="g-4">
          {productsArray.map((product, idx) => (
            <Col key={idx} align="center">
              <Productcard product={product} />
            </Col>
          ))}
        </Row>

      </>
    );
}

export default Store;