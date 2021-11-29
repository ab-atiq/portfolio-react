import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const link={
        padding:'10px',
        textDecoration:'none',
        fontSize:'20px'
    };
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home">ATIQUR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link style={link} to="/home">Home</Link>
                        <Link style={link} to="/projects">Projects</Link>
                        <Link style={link} to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;