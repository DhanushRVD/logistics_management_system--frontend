import React from 'react';
import '../../assests/css/order.css';

function OrderListPage() {
  const orders = [
    {
      id: 1,
      product: 'Steel Plate',
      quantity: 30,
      date: '2023-09-25',
    },
    {
      id: 2,
      product: 'pepper',
      quantity: 20,
      date: '2023-09-26',
    },
    {
      id: 3,
      product: 'sandal bar',
      quantity: 10,
      date: '2023-09-27',
    },
  ];

  return (
    <div className="order-list-container">
      <h1 className="order-list-title">Order List</h1>
      <div className="order-listbox">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <h2>{order.product}</h2>
            <p>Quantity: {order.quantity}</p>
            <p>Date: {order.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderListPage;