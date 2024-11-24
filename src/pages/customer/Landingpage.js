import React, { Component } from 'react';
import '../../assests/css/LandingPage.css';
import{ FontAwesomeIcon } from'@fortawesome/react-fontawesome';
import logo from '../../assests/img/logo.png';
import heroImage from '../../assests/img/landing.jpg';
import { Link } from 'react-router-dom';
import flight from '../../assests/img/flight.jpg';
import ship from '../../assests/img/cargo-ship.jpg';
import truck from '../../assests/img/transport.jpg';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTransportType: null,
    };
  }

  handleTransportTypeClick = (transportType) => {
    this.setState({ selectedTransportType: transportType });
  };

  render() {
    const { selectedTransportType } = this.state;

    const transportTypes = [
      {
        type: 'Air Freight',
        image: flight,
        description:
          'Fast and reliable air freight services to get your goods to their destination quickly and efficiently.',
      },
      {
        type: 'Ocean Freight',
        image: ship,
        description:
          'Cost-effective ocean freight solutions for your shipping needs, whether you need to transport large shipments or smaller packages.',
      },
      {
        type: 'Land Freight',
        image: truck,
        description:
          'Flexible and reliable land freight services to transport your goods across land. We have a network of carriers that can accommodate a wide variety of shipments.',
      },
    ];

    const transportTypeDetails = transportTypes.find(
      (transportType) => transportType.type === selectedTransportType
    );

    return (
      <div className="landing-page">
        <header className="header">
            <center>
          <img src={logo} alt="Company Logo" />
          </center>
          <h1>VJB Logistics Company</h1>

          <nav className="navbar1">
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/aboutus'>About Us</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
              <li>
                <Link to='/service'>Services</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
            </ul>
          </nav>
        </header>

        <section className="hero">
          <img src={heroImage} alt="Hero Image" />
        </section>

        <section className="transport-types">
          {transportTypes.map((transportType) => (
            <div
              key={transportType.type}
              className={`transport-type ${
                selectedTransportType === transportType.type ? 'active' : ''
              }`}
              onClick={() => this.handleTransportTypeClick(transportType.type)}
            >
              <img src={transportType.image} alt={transportType.type} />
              <h3>{transportType.type}</h3>
            </div>
          ))}
        </section>

        {transportTypeDetails && (
          <section className="transport-type-details">
            <center>
            <img src={transportTypeDetails.image} alt={transportTypeDetails.type} />
            </center>
            <h2>{transportTypeDetails.type}</h2>
            <p>{transportTypeDetails.description}</p>
          </section>
        )}

        <section className="tracking">
          <h2>Track Your Shipment</h2>
          <div className="tracking-input">
            <label htmlFor="trackingNumber">Tracking Number:</label>
            <input type="text" id="trackingNumber" />
            <button>Track Shipment</button>
          </div>
        </section>

        <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          We are here to help you with all your logistics needs. Please contact us today for a free quote.
        </p>
        <ul>
          <li>
            <p>Phone: +1-800-555-1212</p>
          </li>
          <li>
            <p>Email: info@logisticscompany.com</p>
          </li>
        </ul>
      </section>
      <footer className="footer1">
      <div className="footer-links">
        <Link className="footer-link" to="/terms">Terms and Conditions</Link>
        <Link className="footer-link" to="/privacy">Privacy Policy</Link>
        <Link className="footer-link" to="/faq">FAQ</Link>
      </div>
      <div className="footer-icons">
        <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
      </div>

    );
  }
}
export default LandingPage;
