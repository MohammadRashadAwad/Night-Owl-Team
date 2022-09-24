import React, { Fragment } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
            <Navbar.Brand as={NavLink} to='/' >NIGHT OWL</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
             <Nav.Link as={NavLink} to='/'  >Home</Nav.Link>
             
             <Nav.Link as={NavLink} to='/services' >Services</Nav.Link>
             
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item as={NavLink} to='/project'>Project</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <Nav.Link as={NavLink} to='/about' >About</Nav.Link>
              <Nav.Link as={NavLink} to='/contact' eventKey={2} >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavigationBar;
