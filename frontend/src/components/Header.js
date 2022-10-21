import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const navbarStyle = { backgroundColor: "lightblue" };
const Header = ({ title }) => {
  return (
  <Navbar style={navbarStyle} >
  <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
        </Container>
        </Navbar>
    );
};

export default Header;
