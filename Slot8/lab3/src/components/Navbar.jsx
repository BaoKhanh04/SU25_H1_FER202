import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container style={{maxWidth: '1320px', padding: 0}}>
        <Navbar.Brand href="#" style={{fontSize: '1.7rem', letterSpacing: '1px', minWidth: 160}}>
          <h2>Pizza House</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto align-items-center" style={{gap: '1.5rem', marginLeft: '1.5rem'}}>
            <Nav.Link href="#" active style={{fontSize: '1.1rem', marginLeft: '0.5rem'}}>Home</Nav.Link>
            <Nav.Link href="#" style={{fontSize: '1.1rem'}}>About Us</Nav.Link>
            <Nav.Link href="#" style={{fontSize: '1.1rem'}}>Contact</Nav.Link>
          </Nav>
          <Form className="d-flex ms-auto" style={{minWidth: 340, maxWidth: 400, width: '100%'}} role="search">
            <InputGroup>
              <Form.Control type="search" placeholder="Search" aria-label="Search" style={{fontSize: '1.05rem', borderRadius: 5}} />
              <Button variant="danger" style={{borderRadius: 5, fontWeight: 600}}>
                🔍
              </Button>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
