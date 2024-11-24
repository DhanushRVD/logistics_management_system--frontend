import React from 'react';
import '../../assests/css/privacy.css'
import Footer from './Footer';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div>
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>

      <p>
        Effective Date: [Date]
      </p>

      <p>
        Welcome to VJB Logistics Management System ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information. By accessing or using our services, you consent to the practices described in this Privacy Policy.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect the following types of information:
      </p>
      <ul>
        <li>Personal Information: This may include your name, email address, phone number, and other identifiable information you provide when using our services.</li>
        <li>Usage Information: We may collect information about how you interact with our website and services, including IP addresses, browser type, and pages visited.</li>
        <li>Cookies and Tracking Technologies: We use cookies and similar technologies to enhance your user experience and collect information about your online activity.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>
        We may use your information for various purposes, including:
      </p>
      <ul>
        <li>Providing and improving our services.</li>
        <li>Responding to your inquiries and requests.</li>
        <li>Sending you important updates and notifications.</li>
        <li>Customizing your experience and delivering content tailored to your interests.</li>
      </ul>

      <h2>Disclosure of Your Information</h2>
      <p>
        We may share your information with third parties in the following circumstances:
      </p>
      <ul>
        <li>With your consent.</li>
        <li>When required by law or to protect our rights.</li>
        <li>With service providers who assist us in delivering our services.</li>
      </ul>

      <h2>Your Choices</h2>
      <p>
        You have choices regarding the collection and use of your information, including opting out of marketing communications and adjusting cookie settings.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable measures to protect your information; however, no data transmission or storage is completely secure. We cannot guarantee the security of your data.
      </p>

      <h2>Changes to this Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The effective date will be updated accordingly.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at [Contact Email].
      </p>
    </div>
    <div className='back'>
    <center>
      <button><Link to='/'>Back</Link></button>
    </center>
    </div>
    <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
