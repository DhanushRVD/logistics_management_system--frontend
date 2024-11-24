import React from 'react';
import '../../assests/css/Terms.css'
import Footer from './Footer';
import { Link } from 'react-router-dom';
const TermsAndConditions = () => {
  return (
    <div>
    <div className="terms-and-conditions">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to VJB Logistics Management System. These terms and conditions ("Terms") govern your use of our services, including our website, mobile application, and any related services offered by VJB Logistics.
      </p>
      <p>
        By accessing or using our services, you agree to comply with these Terms. If you do not agree with any part of these Terms, please do not use our services.
      </p>

      <h2>1. Use of Our Services</h2>
      <p>
        You must be at least 18 years old to use our services. You agree to provide accurate and complete information when using our services, and you are solely responsible for maintaining the confidentiality of your account information.
      </p>

      <h2>2. Privacy and Data Security</h2>
      <p>
        We are committed to protecting your privacy and data security. Our Privacy Policy outlines how we collect, use, and protect your personal information. By using our services, you consent to our data practices as described in the Privacy Policy.
      </p>

      <h2>3. Service Availability</h2>
      <p>
        Our services may be subject to interruptions, delays, or errors. We do not guarantee that our services will be available at all times. We reserve the right to modify, suspend, or discontinue any part of our services without notice.
      </p>

      <h2>4. User Responsibilities</h2>
      <p>
        You agree not to misuse our services, including but not limited to attempting to gain unauthorized access to our systems or interfering with the functionality of our services. You are responsible for any content you submit or share through our platform.
      </p>

      <h2>5. Disclaimer of Warranties</h2>
      <p>
        Our services are provided "as is" and "as available" without warranties of any kind, whether express or implied. We do not guarantee the accuracy, reliability, or completeness of any information provided through our services.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        XYZ Logistics shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use of our services.
      </p>

      <h2>7. Governing Law</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
      </p>

      <p>
        Please review these Terms carefully. If you have any questions or concerns, contact us at [Contact Email].
      </p>
    </div>
    <div className='back'>
    <center>
      <Link to='/'>Back</Link>
    </center>
    </div>
    <Footer />
    </div>
);
};

export default TermsAndConditions;
