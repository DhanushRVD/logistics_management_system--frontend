import React, { useState } from 'react';
import '../../assests/css/ContactUsPage.css';
import { Link } from 'react-router-dom';
import logo from '../../assests/img/logo.png';

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFeedback = {
      name,
      email,
      message,
    };

    setFeedback(JSON.stringify(newFeedback));
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-us-page">

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
      <h1>Contact Us</h1>

      <section className="contact-information">
        <h2>Contact Information</h2>
        <p>
          Email:  vjblogistics@gmail.com
        </p>
        <p>Phone: +1 (222) 333-4444</p>
        <p>Address: 123 Main Street, Anytown, USA</p>
      </section>

      <section className="feedback-form">
        <h2>Send Us Feedback</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label>Message:</label>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />

          <button type="submit">Send Feedback</button>
        </form>

        {feedback && <p>Feedback submitted: {feedback}</p>}
      </section>
    </div>
  );
};

export default ContactUsPage;
