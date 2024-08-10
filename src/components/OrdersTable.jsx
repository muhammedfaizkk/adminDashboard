import React from 'react';
import { Table } from 'react-bootstrap';

function OrdersTable() {
  const orders = [
    { id: 1, customer: 'Customer 1', total: 199.99, date: '2024-08-01' },
    { id: 2, customer: 'Customer 2', total: 299.99, date: '2024-08-02' },
    { id: 3, customer: 'Customer 3', total: 399.99, date: '2024-08-03' },
  ];

  return (
    <div className="table-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>${order.total}</td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default OrdersTable;
