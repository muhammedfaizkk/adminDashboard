import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { FaSignOutAlt, FaBars } from 'react-icons/fa'; // Import FaBars for the toggle icon

function AppNavbar({ setCurrentPage, handleToggleSidebar, location }) {
    return (
        <Navbar expand="lg" className="navbarmain text-white" bg="dark">
            <Container fluid>
                <Navbar.Brand href="#" onClick={handleToggleSidebar}>
                    <img src="./logo192.png" alt="Logo" className="logo-mobimg d-md-none" />
                </Navbar.Brand>
                <div className='locationText d-md-block d-none d-flex align-items-center'>
                    <h5 className="mb-0">
                        {location}
                    </h5>
                </div>
                <div className="d-flex ms-auto align-items-center">

                    <Navbar.Toggle aria-controls="navbarScroll" className="toggle-icon">
                        <FaBars size={20} /> {/* Use FaBars for the toggle icon */}
                    </Navbar.Toggle>
                </div>

                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0 d-md-none">
                        <Nav.Link className="text-white" onClick={() => setCurrentPage('dashboard')}>Dashboard</Nav.Link>
                        <Nav.Link className="text-white" onClick={() => setCurrentPage('productTable')}>Product</Nav.Link>
                        <Nav.Link className="text-white" onClick={() => setCurrentPage('orders')}>Orders</Nav.Link>
                        <Nav.Link className="text-white" onClick={() => setCurrentPage('login')}>Users</Nav.Link>
                    </Nav>
                    <div className="ms-auto d-none d-lg-flex align-items-center">
                        <Button variant="light" type="submit" >
                            <FaSignOutAlt /> Logout
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
