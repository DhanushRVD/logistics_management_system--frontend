import React from 'react';
import '../../assests/css/services.css'
import { Link } from 'react-router-dom';
import logo from '../../assests/img/logo.png';
import truck from '../../assests/img/transport.jpg';
import air from '../../assests/img/flight.jpg';
import ocean from '../../assests/img/cargo-ship.jpg';
import ware from '../../assests/img/warehouse.jpg';

const ServicesPage = () => {
  return (
    <div className="services-page">
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
      <h1 className="services-page-title">Our Comprehensive Logistics Solutions</h1>

      <div className="services-container">
        <div className="service">
          <img src={truck} alt="Truck Transport" className="service-image" />
          <h2>Truck Transport</h2>
          <p>
            We offer a wide range of truck transportation services to meet your diverse needs, from LTL (Less-than-truckload) shipments to full truckloads. Our experienced drivers and dedicated fleet ensure efficient and timely delivery of your goods across Canada and the United States.
          </p>
          <a href="/services/truck-transport" className="service-link">Learn More</a>
        </div>

        <div className="service">
          <img src={air} alt="Air Transport" className="service-image" />
          <h2>Air Transport</h2>
          <p>
            For time-critical shipments, we provide expedited air transportation services, spanning both domestic and international routes. Our knowledgeable team handles all customs clearance and documentation to ensure seamless cargo movement.
          </p>
          <a href="/services/air-transport" className="service-link">Learn More</a>
        </div>

        <div className="service">
          <img src={ocean} alt="Ocean Transport" className="service-image" />
          <h2>Ocean Transport</h2>
          <p>
            For cost-effective bulk shipments, we offer ocean transportation services, including FCL (Full Container Load) and LCL (Less-than-Container Load) options. We manage all aspects of ocean freight, from port drayage to container stuffing and unpacking.
          </p>
          <a href="/services/ocean-transport" className="service-link">Learn More</a>
        </div>
        <div className="service">
          <img src={ware} alt="Warehousing and Distribution" className="service-image" />
          <h2>Warehousing and Distribution</h2>
          <p>
            We offer secure and state-of-the-art warehousing and distribution facilities strategically located across North America. Our experienced team provides a wide range of value-added services, including inventory management, order fulfillment, and cross-docking.
          </p>
          <a href="/services/warehousing-and-distribution" className="service-link">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
