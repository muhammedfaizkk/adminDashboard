import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaTachometerAlt, FaBox, FaShoppingCart, FaSignInAlt } from 'react-icons/fa';

function Sidebar({ setCurrentPage, visible }) {
  return (
    <div className={`sidebar ${visible ? 'd-block' : 'd-none'}`}>
      <Nav className="flex-column">
        <div className="logo-container">
          <img src="./logo192.png" alt="Logo" className="logo-img" />
        </div>
        <div className='mt-4'>
        <Nav.Link onClick={() => setCurrentPage('dashboard')}><FaTachometerAlt className="me-2" /> Dashboard</Nav.Link>
        <Nav.Link onClick={() => setCurrentPage('productTable')}><FaBox className="me-2" /> Products</Nav.Link>
        <Nav.Link onClick={() => setCurrentPage('orders')}><FaShoppingCart className="me-2" /> Orders</Nav.Link>
        <Nav.Link onClick={() => setCurrentPage('login')}><FaSignInAlt className="me-2" /> Login</Nav.Link>
        </div>
      </Nav>
    </div>
  );
}

export default Sidebar;
