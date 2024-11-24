import React from 'react';

const customers = [
  { id: 1, name: 'balaji', email: 'b@example.com', phone: '1234567890' },
  { id: 2, name: 'harish', email: 'h@example.com', phone: '9876543210' },
  { id: 3, name: 'dhanush', email: 'd@example.com', phone: '5555555555' },
];

const CustomerPage = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Customer List</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2', color: '#333' }}>ID</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2', color: '#333' }}>Name</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2', color: '#333' }}>Email</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd', backgroundColor: '#f2f2f2', color: '#333' }}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{customer.id}</td>
              <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{customer.name}</td>
              <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{customer.email}</td>
              <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{customer.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerPage;
