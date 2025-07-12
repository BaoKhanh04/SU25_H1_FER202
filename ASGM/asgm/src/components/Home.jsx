import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleViewDetail = (id) => {
    navigate(`/product-detail/${id}`);
  };

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((res) => {
        setProducts(res.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch products.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <Spinner animation="border" variant="light" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (!products.length) {
    return (
      <div style={{ background: '#23272f', minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: 48, fontWeight: 700, marginBottom: 16, fontFamily: 'Segoe UI, Arial, sans-serif' }}>Product List</h2>
        <div style={{ color: '#fff', fontSize: 32, fontFamily: 'Segoe UI, Arial, sans-serif' }}>No products found.</div>
      </div>
    );
  }

  return (
    <div style={{ background: '#000', minHeight: '100vh', padding: '0', margin: 0 }}>
      <Container style={{ paddingTop: 40, paddingBottom: 40 }}>
        <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: 32 }}>Product List</h2>
        <Row>
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex align-items-stretch">
              <Card style={{ width: '100%', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #0001', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Card.Img variant="top" src={product.image} alt={product.name} style={{ height: 300, objectFit: 'cover', borderTopLeftRadius: 12, borderTopRightRadius: 12, background: '#fff' }} />
                <Card.Body className="d-flex flex-column text-center">
                  <Card.Title style={{ color: '#d7263d', fontSize: 17 }}>{product.name}</Card.Title>
                  <Card.Text style={{ color: '#444', fontSize: 14, minHeight: 60 }}>{product.description}</Card.Text>
                  <div style={{ marginTop: 'auto' }}>
                    <div>
                      <span style={{ textDecoration: 'line-through', color: '#888', fontSize: 15 }}>{product.price} đ</span>
                    </div>
                    <div>
                      <span style={{ color: '#d7263d', fontWeight: 'bold', fontSize: 20 }}>{product.currentPrice} đ</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <Button variant="danger" size="sm" style={{ fontSize: 12, width: '100px', padding: '4px 16px' }} onClick={() => handleViewDetail(product.id)}>View Details</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
