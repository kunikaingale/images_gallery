import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from '../images/logo.png'

const navbarStyle = { backgroundColor: "lightblue" };
const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <img src={logo} alt="logo"></img>
      </Container>
    </Navbar>
  );
};

export default Header;
