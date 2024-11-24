import React from 'react';

const generateDummyData = () => {
  const data = [];
  for (let i = 1; i <= 10; i++) {
    data.push({
      id: i,
      name: `Item ${i}`,
      description: `Description for Item ${i}`,
      quantity: Math.floor(Math.random() * 100),
      price: (Math.random() * 100).toFixed(2),
    });
  }
  return data;
};

function Report() {

  const reportData = generateDummyData();

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const thStyle = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
  };

  const tdStyle = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
  };

  return (
    <div>
      <h1>Report Page</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Quantity</th>
            <th style={thStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((item) => (
            <tr key={item.id}>
              <td style={tdStyle}>{item.id}</td>
              <td style={tdStyle}>{item.name}</td>
              <td style={tdStyle}>{item.description}</td>
              <td style={tdStyle}>{item.quantity}</td>
              <td style={tdStyle}>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Report;
