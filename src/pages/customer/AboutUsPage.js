import React from 'react';
import '../../assests/css/AboutUsPage.css';
import { Link } from 'react-router-dom';
import logo from '../../assests/img/logo.png';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
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
                <Link to='/service'>services</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
            </ul>
          </nav>
        </header>
      <center>
      <h1>About Us</h1>

      <section className="about-us-section">
        <h2>Our Mission</h2>
        <p>
          We are committed to providing our customers with the most reliable, efficient, and cost-effective logistics solutions in the industry. We are passionate about connecting businesses and communities around the world, and we strive to deliver exceptional service every step of the way.
        </p>
      </section>

      <section className="about-us-section">
        <h2>Our Vision</h2>
        <p>
          We envision a future where logistics is seamlessly integrated into the global economy, powering businesses of all sizes to reach new markets and achieve their full potential. We are committed to leading the way in innovation and sustainability, creating a world where logistics is a force for good.
        </p>
      </section>

      <section className="about-us-section">
        <h2>Our Values</h2>
        <ul>
          <li>Customer Focus: We are dedicated to understanding and exceeding the needs of our customers.</li>
          <li>Integrity: We operate with honesty, transparency, and ethical conduct in all our dealings.</li>
          <li>Innovation: We are constantly seeking new and better ways to improve our services and deliver value to our customers.</li>
          <li>Sustainability: We are committed to minimizing our environmental impact and operating in a responsible manner.</li>
          <li>Teamwork: We believe in the power of teamwork and collaboration to achieve our goals.</li>
        </ul>
      </section>

      <section className="about-us-section">
        <h2>Our History</h2>
        <p>
          Founded in [year], we have a long and storied history of providing logistics solutions to businesses of all sizes. We have a proven track record of success and a deep understanding of the ever-changing logistics landscape. We are proud to be a trusted partner to our customers and a leader in the logistics industry.
        </p>
      </section>
      </center>
    </div>
  );
};

export default AboutUsPage;
