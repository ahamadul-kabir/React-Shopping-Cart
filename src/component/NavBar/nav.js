import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';
const Navi = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
                <Container className='navlist'>
                <Navbar.Brand href="#home">
                     <img alt="" src="/logo192.png" width="30" height="30" className="d-inline-block align-top"/>{' '}React E-Commerce
                </Navbar.Brand>
                <Nav className="">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#product">Product</Nav.Link>
                    <Nav.Link href="#NewProduct">New Product</Nav.Link>
                    <Nav.Link href="#buy">Buy</Nav.Link>
                    <Nav.Link href="#sell">Sell</Nav.Link>
                </Nav>
                </Container>npm s
            </Navbar>
        </div>
    );
};

export default Navi;