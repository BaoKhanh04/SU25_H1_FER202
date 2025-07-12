import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Spinner, Alert, Form, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/330px-Placeholder_view_vector.svg.png';
  const [form, setForm] = useState({ name: '', description: '', price: '', currentPrice: '', image: defaultImage });
  const navigate = useNavigate(); 

  // Load product list from API
  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch products.');
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const { name, description, price, currentPrice } = form;
    if (!name || !description || !price || !currentPrice) return;

    try {
      const productData = {
        ...form,
        image: form.image || defaultImage
      };
      const res = await axios.post('http://localhost:3000/products', productData);
      setProducts([...products, res.data]);
      setForm({ name: '', description: '', price: '', currentPrice: '', image: defaultImage });
    } catch (err) {
      setError('Failed to add product.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      setProducts(products.filter(p => p.id !== id));
    } catch (err) {
      setError('Failed to delete product.');
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
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
      <Container style={{ paddingTop: 20, paddingBottom: 40 }}>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={10} xl={10}>
            <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: 16, fontWeight: 700 }}>Add Product</h2>
            <Form onSubmit={handleAddProduct} className="mb-4">
              <Form.Group as={Row} className="mb-3" controlId="formName">
                <Form.Label column md={2} style={{ color: '#fff', fontWeight: 500, fontSize: 18, textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: 0 }}>Name:</Form.Label>
                <Col md={10}>
                  <Form.Control name="name" value={form.name} onChange={handleInputChange} autoComplete="off" style={{ textAlign: 'left' }} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formDescription">
                <Form.Label column md={2} style={{ color: '#fff', fontWeight: 500, fontSize: 18, textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: 0 }}>Description:</Form.Label>
                <Col md={10}>
                  <Form.Control name="description" value={form.description} onChange={handleInputChange} autoComplete="off" style={{ textAlign: 'left' }} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPrice">
                <Form.Label column md={2} style={{ color: '#fff', fontWeight: 500, fontSize: 18, textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: 0 }}>Price:</Form.Label>
                <Col md={10}>
                  <Form.Control name="price" value={form.price} onChange={handleInputChange} autoComplete="off" style={{ textAlign: 'left' }} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formCurrentPrice">
                <Form.Label column md={2} style={{ color: '#fff', fontWeight: 500, fontSize: 18, textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: 0 }}>Current Price:</Form.Label>
                <Col md={10}>
                  <Form.Control name="currentPrice" value={form.currentPrice} onChange={handleInputChange} autoComplete="off" style={{ textAlign: 'left' }} />
                </Col>
              </Form.Group>
              <div className="mt-3" style={{ textAlign: 'center' }}>
                <Button type="submit" variant="primary">Add Product</Button>
              </div>
            </Form>
            <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: 16, fontWeight: 700 }}>Product List</h2>
            <div style={{ background: '#fff', borderRadius: 8, overflow: 'auto' }}>
              <Table striped bordered hover responsive style={{ marginBottom: 0 }}>
                <thead>
                  <tr style={{ textAlign: 'left', verticalAlign: 'middle' }}>
                    <th style={{ textAlign: 'left', width: 40 }}>#</th>
                    <th style={{ textAlign: 'left', minWidth: 180 }}>Name</th>
                    <th style={{ textAlign: 'left' }}>Description</th>
                    <th style={{ textAlign: 'left', minWidth: 140 }}>Price</th>
                    <th style={{ textAlign: 'left', minWidth: 150 }}>Current Price</th>
                    <th style={{ textAlign: 'center', width: 90 }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length === 0 ? (
                    <tr>
                      <td colSpan="6" style={{ textAlign: 'center', fontWeight: 500, fontSize: 20 }}>No products found.</td>
                    </tr>
                  ) : (
                    products.map((product, idx) => (
                      <tr key={product.id} style={{ verticalAlign: 'middle' }}>
                        <td style={{ textAlign: 'left' }}>{idx + 1}</td>
                        <td style={{ textAlign: 'left' }}>{product.name}</td>
                        <td style={{ textAlign: 'left' }}>{product.description}</td>
                        <td style={{ textDecoration: 'line-through', color: '#888', textAlign: 'left' }}>{product.price} đ</td>
                        <td style={{ color: '#d7263d', fontWeight: 'bold', textAlign: 'left' }}>{product.currentPrice} đ</td>
                        <td style={{ textAlign: 'center' }}>
                          <Button variant="danger" size="sm" onClick={() => handleDelete(product.id)}>Delete</Button>
                          <Button className="mt-2" variant="danger" size="sm" onClick={() => handleEdit(product.id)}>Edit</Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductList; 