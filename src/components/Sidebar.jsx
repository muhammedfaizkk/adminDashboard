import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FaTachometerAlt, FaBox, FaShoppingCart, FaUser } from 'react-icons/fa';

function Sidebar({ setCurrentPage, visible }) {
    return (
        <div className={`sidebar ${visible ? 'd-block' : 'd-none'}`}>
            <Nav className="flex-column">
                <Nav.Link onClick={() => setCurrentPage('dashboard')} className="nav-link mb-4">
                    <img className='logo-img' src="./logo192.png" alt="Logo" />
                </Nav.Link>
                <Nav.Link onClick={() => setCurrentPage('dashboard')} className="nav-link">
                    <FaTachometerAlt className="me-2" /> Dashboard
                </Nav.Link>
                <Nav.Link onClick={() => setCurrentPage('productTable')} className="nav-link">
                    <FaBox className="me-2" /> Product
                </Nav.Link>
                <Nav.Link onClick={() => setCurrentPage('orders')} className="nav-link">
                    <FaShoppingCart className="me-2" /> Orders
                </Nav.Link>
                <Nav.Link onClick={() => setCurrentPage('login')} className="nav-link">
                    <FaUser className="me-2" /> Users
                </Nav.Link>
            </Nav>
        </div>
    );
}

export default Sidebar;
