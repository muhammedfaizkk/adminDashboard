import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';

function AppNavbar() {
    return (
        <Navbar expand="lg" className="navbarmain text-white ">
            <Container fluid>


                <Navbar.Brand href="#">
                    <div className="logo-container">
                        <img src="./logo192.png" alt="Logo" className="logo-mobimg" />
                    </div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 text-white"

                    >
                        <Nav.Link href="#home" className='text-white'>Dashboard</Nav.Link>
                        <Nav.Link href="#features" className='text-white'>Product</Nav.Link>
                        <Nav.Link href="#pricing" className='text-white'>Orders</Nav.Link>
                        <Nav.Link href="#disabled" className='text-white'>Users</Nav.Link>
                    </Nav>

                    <Button variant="outline-success" className="me-2">Search</Button>

                    <Button variant="outline-danger" className="d-none d-lg-inline-flex">
                        <FaSignOutAlt /> Logout
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
