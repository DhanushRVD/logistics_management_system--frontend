import React from 'react';
import '../../assests/css/Dashboard.css';
import{ FontAwesomeIcon } from'@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const shipments = [
  { id: 1, origin: 'New York', destination: 'Los Angeles', status: 'In Transit' },
  { id: 2, origin: 'Chicago', destination: 'Houston', status: 'Delivered' },
];

const vendors = [
  { id: 1, name: 'balaji', available: true },
  { id: 2, name: 'harish', available: false },
  { id: 3, name: 'Dhanush', available: false },
];

const stockAvailable = 120;
const totalIncome = 25000;
const totalExpense = 15000;

const orderList = [
  { id: 1, product: 'sandal bar', quantity: 5 },
  { id: 2, product: 'pepper', quantity: 8 },
];

function Dashboard() {
  return (
    <div>
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>VJB Logistics</h1>
      </header>
      <div className="dashboard-content">
        <section className="shipment-list">
          <h2>Shipments</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((shipment) => (
                <tr key={shipment.id}>
                  <td>{shipment.id}</td>
                  <td>{shipment.origin}</td>
                  <td>{shipment.destination}</td>
                  <td>{shipment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="vendor-list">
          <h2>Vendors</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Available</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor) => (
                <tr key={vendor.id}>
                  <td>{vendor.name}</td>
                  <td>{vendor.available ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="summary">
          <div className="summary-card">
            <h2>Stock Available</h2>
            <p>{stockAvailable}</p>
          </div>
          <div className="summary-card">
            <h2>Total Income</h2>
            <p>${totalIncome}</p>
          </div>
          <div className="summary-card">
            <h2>Total Expense</h2>
            <p>${totalExpense}</p>
          </div>
        </section>
        <section className="order-list">
          <h2>Order List</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.product}</td>
                  <td>{order.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
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

export default Dashboard;
