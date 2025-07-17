import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Form, Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LaptopManager = () => {
  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Laptops');
        if (response.status === 200 && Array.isArray(response.data)) {
          setLaptops(response.data);
          setFilteredLaptops(response.data);
          setError('');
        } else {
          setError('Invalid response from server');
        }
      } catch (err) {
        console.error('Error fetching laptops:', err);
        setError('Failed to load laptops. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchLaptops();
  }, []);

  // Update search results whenever searchTerm changes
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredLaptops(laptops);
      return;
    }
    
    const searchLower = searchTerm.toLowerCase();
    const filtered = laptops.filter(
      (laptop) =>
        (laptop.brand && laptop.brand.toLowerCase().includes(searchLower)) ||
        (laptop.model && laptop.model.toLowerCase().includes(searchLower)) ||
        (laptop.year && laptop.year.toString().includes(searchTerm))
    );
    setFilteredLaptops(filtered);
  }, [searchTerm, laptops]);

  const handleSearch = (e) => {
    e.preventDefault();
    // The search is now handled by the useEffect hook
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Laptop List</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <Form className="mb-4" onSubmit={handleSearch}>
            <Row className="align-items-center">
              <Col md={6}>
                <Form.Control
                  type="search"
                  placeholder="Search by brand, model, or year"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                  aria-label="Search laptops"
                />
              </Col>
              <Col md={2}>
                <Button variant="primary" type="submit" className="w-100">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>

          {filteredLaptops.length === 0 ? (
            <Alert variant="info">No laptops found.</Alert>
          ) : (
            <Row>
              {filteredLaptops.map((laptop) => (
                <Col md={4} key={laptop.id} className="mb-4">
                  <Card className="h-100 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={laptop.image}
                      alt={laptop.model}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                      <Card.Text>
                        <strong>Year:</strong> {laptop.year}<br />
                        <strong>Price:</strong> {laptop.price}
                      </Card.Text>
                      <Button
                        as={Link}
                        to={`/laptops/${laptop.id}`}
                        variant="primary"
                        className="mt-auto"
                      >
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </>
      )}
    </div>
  );
};

export default LaptopManager;
