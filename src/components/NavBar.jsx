import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Samuel Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">Features</Nav.Link>
            <Nav.Link as={Link} to="/contact">Pricing</Nav.Link>
            <Nav.Link as={Link} to="/resume">Pricing</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">Pricing</Nav.Link>


            

          </Nav>
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;