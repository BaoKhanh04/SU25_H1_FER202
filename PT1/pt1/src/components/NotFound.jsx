import React from 'react';
import { Container, Alert } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="mt-4">
      <Alert variant="danger">
        <h4>404 Not Found</h4>
        <p>The requested laptop was not found.</p>
      </Alert>
    </Container>
  );
};

export default NotFound;