import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Check for empty fields first
    if (!username.trim() || !password.trim()) {
      setError('Username and password are required.');
      return;
    }
    
    try {
      const response = await axios.get('http://localhost:3000/UserAccounts');
      const user = response.data.find(
        (u) => u.username === username && u.password === password && u.status === 'active'
      );
      if (user) {
        setUser(user);
        setShowModal(true);
        setError('');
        setTimeout(() => {
          setShowModal(false);
          navigate('/laptops');
        }, 1500);
      } else {
        setError('Invalid username or password!');
      }
    } catch (err) {
      setError('Error connecting to server');
    }
  };

  return (
    <Row className="justify-content-center mt-5">
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title className="mb-4 text-center fw-bold fs-3">Login</Card.Title>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError(''); // Clear error when user starts typing
                  }}
                  placeholder="Enter username"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(''); // Clear error when user starts typing
                  }}
                  placeholder="Enter password"
                />
              </Form.Group>
              {error && (
                <div className="alert alert-danger text-center mb-3" role="alert">
                  {error}
                </div>
              )}
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Login Successful</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Welcome, <strong>{username}</strong>! Login Successful.
          </Modal.Body>
        </Modal>
      </Col>
    </Row>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Login;
