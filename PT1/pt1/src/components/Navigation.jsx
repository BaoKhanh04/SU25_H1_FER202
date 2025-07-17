import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ user, onLogout }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/laptops">Laptop Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {user ? (
              <>
                <Nav.Link style={{ marginLeft: '900px' }} disabled>Welcome, {user.username}</Nav.Link>
                <Button variant="outline-light" onClick={onLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Nav.Link style={{ marginLeft: '1000px' }} as={Link} to="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Navigation.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
  onLogout: PropTypes.func.isRequired,
};

export default Navigation;