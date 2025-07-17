import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Row, Col, Button, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

const LaptopDetail = () => {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchLaptop = async () => {
      try {
        // First get all laptops
        const response = await axios.get('http://localhost:3000/Laptops');
        if (response && response.status === 200 && Array.isArray(response.data)) {
          // Find the laptop with matching ID (convert both to string for comparison)
          const foundLaptop = response.data.find(laptop => String(laptop.id) === String(id));
          
          if (foundLaptop) {
            setLaptop(foundLaptop);
            setNotFound(false);
          } else {
            setNotFound(true);
          }
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error fetching laptop details:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchLaptop();
    } else {
      setNotFound(true);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (notFound || !laptop) {
    return (
      <div className="text-center mt-5">
        <Alert variant="danger">Laptop not found.</Alert>
        <Button as={Link} to="/laptops" variant="secondary">
          Back to Laptop List
        </Button>
      </div>
    );
  }

  return (
    <Row className="justify-content-center mt-4">
      <Col md={6}>
        <Card className="mb-3">
          <Card.Img variant="top" src={laptop.image} alt={laptop.model} />
          <Card.Body>
            <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
            <Card.Text>
              <strong>Year:</strong> {laptop.year}<br />
              <strong>Price:</strong> {laptop.price}<br />
              <strong>Description:</strong> High-performance laptop suitable for professional and personal use.
            </Card.Text>
            <Button as={Link} to="/laptops" variant="primary">
              Back to Laptop List
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default LaptopDetail;
