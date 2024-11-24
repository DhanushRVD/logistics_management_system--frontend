import React, { useState } from 'react';
import '../../assests/css/faq.css'
import Footer from './Footer';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Q1: What is VJB Logistics Management System?',
      answer:
        'A1: VJB Logistics Management System is a comprehensive platform for managing logistics and supply chain operations.',
    },
    {
      question: 'Q2: How can I create a new shipment?',
      answer:
        'A2: To create a new shipment, log in to your account, go to the dashboard, and click on the "New Shipment" button.',
    },
    {
      question: 'Q3: What payment methods are accepted?',
      answer: 'A3: We accept credit cards, PayPal, and bank transfers for payments.',
    },
    {
      question: 'Q4: How can I track my shipments?',
      answer:
        'A4: You can track your shipments by entering the tracking number provided when you created the shipment.',
    },
    {
      question: 'Q5: Is my personal information secure?',
      answer: 'A5: Yes, we take data security seriously and have implemented measures to protect your information.',
    },
  ];

  return (
    <>
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div
            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAnswer(index)}
          >
            {item.question}
            <span className="toggle-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          <p className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>{item.answer}</p>
        </div>
      ))}
    </div>
    <div className='back'>
    <center>
      <button><Link to='/'>Back</Link></button>
    </center>
    </div>
    <Footer/>
    </>
  );
};

export default FAQ;
