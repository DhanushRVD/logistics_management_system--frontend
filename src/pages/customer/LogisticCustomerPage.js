import React, { useState } from 'react';
import '../../assests/css/LogisticsCustomerPage.css';
import { Link } from 'react-router-dom';

const LogisticsCustomerPage = () => {
  const [shipmentMethod, setShipmentMethod] = useState('');
  const [cargoType, setCargoType] = useState('');
  const [logisticsList, setLogisticsList] = useState([]);
  const [logisticsHistory, setLogisticsHistory] = useState([]);

  const handleAddLogistics = () => {
    const newLogistics = {
      shipmentMethod,
      cargoType,
      status: 'Pending',
    };
    setLogisticsList([...logisticsList, newLogistics]);
  };

  const handlePlaceLogistics = (logisticsId) => {
    const updatedLogistics = logisticsList.map((logistics) => {
      if (logistics.id === logisticsId) {
        return { ...logistics, status: 'Processing' };
      }
      return logistics;
    });
    setLogisticsList(updatedLogistics);
  };

  const handleViewLogisticsHistory = (logisticsId) => {
    const historyEntry = {
      logisticsId,
      status: 'Delivered',
      timestamp: '2023-11-17 00:04 IST',
    };
    setLogisticsHistory([...logisticsHistory, historyEntry]);
  };

  return (
    <div className="logistics-customer-page">
      <h1>VJB LOGISTICS</h1>

      <div className="add-logistics">
        <h2>NEW Logistics</h2>
        <form onSubmit={handleAddLogistics}>
          <label>Shipment Method:</label>
          <select
            value={shipmentMethod}
            onChange={(event) => setShipmentMethod(event.target.value)}
          >
            <option value="air">Air</option>
            <option value="sea">Sea</option>
            <option value="road">Road</option>
          </select>

          <label>Cargo Type:</label>
          <select
            value={cargoType}
            onChange={(event) => setCargoType(event.target.value)}
          >
            <option value="general">General</option>
            <option value="perishable">Perishable</option>
            <option value="hazardous">Hazardous</option>
          </select>

          <button type="submit">Add Logistics</button>
        </form>
      </div>

      <div className="logistics-list">
        <h2>Logistics List</h2>
        <table>
          <thead>
            <tr>
              <th>Shipment Method</th>
              <th>Cargo Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {logisticsList.map((logistics) => (
              <tr key={logistics.id}>
                <td>{logistics.shipmentMethod}</td>
                <td>{logistics.cargoType}</td>
                <td>{logistics.status}</td>
                <td>
                  <button
                    onClick={() => handlePlaceLogistics(logistics.id)}
                    disabled={logistics.status === 'Processing'}
                  >
                    Place Logistics
                  </button>
                  <button
                    onClick={() => handleViewLogisticsHistory(logistics.id)}
                    disabled={logistics.status !== 'Delivered'}
                  >
                    View History
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="logistics-history">
        <h2>Logistics History</h2>
        <table>
          <thead>
            <tr>
              <th>Logistics ID</th>
              <th>Status</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {logisticsHistory.map((historyEntry) => (
              <tr key={historyEntry.id}>
                <td>{historyEntry.logisticsId}</td>
                <td>{historyEntry.status}</td>
                <td>{historyEntry.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <center>
      <button><Link to='/'>Back</Link></button>
      </center>
    </div>

  );
};

export default LogisticsCustomerPage;
