import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button, Spinner, Alert, Form } from 'react-bootstrap';

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', description: '', price: '', currentPrice: '', image: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Lấy 1 sản phẩm cụ thể theo id từ json-server
    axios.get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        const found = res.data;
        setForm({
          name: found.name,
          description: found.description,
          price: found.price,
          currentPrice: found.currentPrice,
          image: found.image
        });
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch product.');
        setLoading(false);
      });
  }, [id]);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Tạo bản sao của form để gửi đi, đảm bảo có đầy đủ dữ liệu
    const formData = {
      ...form,
      // Giữ nguyên ảnh cũ nếu không có ảnh mới được chọn
      image: form.image || (form.image === undefined ? '' : form.image)
    };

    axios.put(`http://localhost:3000/products/${id}`, formData)
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          navigate('/products-list');
        }, 1000);
      })
      .catch(() => {
        setError('Failed to update product.');
      });
  };

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

  return (
    <div style={{ background: '#23272f', minHeight: '100vh', padding: 0, margin: 0 }}>
      <Container style={{ paddingTop: 30, paddingBottom: 40 }}>
        <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: 24, fontWeight: 700 }}>Edit Product</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formName">
            <Form.Label column md={2} style={labelStyle}>Name:</Form.Label>
            <Col md={10}>
              <Form.Control name="name" value={form.name} onChange={handleInputChange} autoComplete="off" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formDescription">
            <Form.Label column md={2} style={labelStyle}>Description:</Form.Label>
            <Col md={10}>
              <Form.Control as="textarea" rows={2} name="description" value={form.description} onChange={handleInputChange} autoComplete="off" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPrice">
            <Form.Label column md={2} style={labelStyle}>Price:</Form.Label>
            <Col md={10}>
              <Form.Control name="price" value={form.price} onChange={handleInputChange} autoComplete="off" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formCurrentPrice">
            <Form.Label column md={2} style={labelStyle}>Current Price:</Form.Label>
            <Col md={10}>
              <Form.Control name="currentPrice" value={form.currentPrice} onChange={handleInputChange} autoComplete="off" />
            </Col>
          </Form.Group>
          <div className="mt-3 text-center">
            <Button variant="primary" className="me-2" onClick={() => navigate('/')}>Back Home</Button>
            <Button type="submit" variant="danger">Save Product</Button>
          </div>
          {success && <Alert variant="success" className="mt-3">Product updated successfully!</Alert>}
        </Form>
      </Container>
    </div>
  );
}

const labelStyle = {
  color: '#fff',
  fontWeight: 500,
  fontSize: 18,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0
};

export default EditProduct;
