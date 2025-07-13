import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, Alert, Card } from 'react-bootstrap';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(() => setError('Product not found'));
  }, [id]);

  if (error) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Container>
    );
  }

  // Chuyển đổi và tính toán
  const price = parseFloat(product.price) || 0;
  const currentPrice = parseFloat(product.currentPrice) || 0;
  const discountPercentage = price > 0 ? Math.round(((price - currentPrice) / price) * 100) : 0;

  return (
    <div className="bg-dark text-white align-items-center justify-content-center d-flex" style={{ minHeight: '100vh' }}>
      <Card className="text-center p-4 bg-dark border-0" style={{ maxWidth: '600px' }}>
        <h2 className="mb-4">{product.name}</h2>
        <div className="mb-4">
          <Card.Img 
            variant="top"
            src={product.image || 'https://via.placeholder.com/500x300?text=No+Image'} 
            alt={product.name}
            className="img-fluid mx-auto"
            style={{ maxHeight: '250px', objectFit: 'contain', backgroundColor: '#fff', padding: '10px', borderRadius: '8px' }}
          />
        </div>

        <div className="mb-3 text-white">
          <p>{product.description || 'No description available.'}</p>
          <p><strong>Price:</strong> {product.price} đ</p>
          <p><strong>Current Price:</strong> {product.currentPrice} đ</p>
          <p><strong>Discount:</strong> {discountPercentage} %</p>
        </div>

        <div className="d-flex justify-content-center gap-3 mt-1">
          <Button variant="primary" onClick={() => navigate('/')}>Back Home</Button>
          <Button variant="danger" onClick={() => navigate(`/edit-product/${product.id}`)}>Edit</Button>
        </div>
      </Card>
    </div>
  );
}

export default ProductDetail;
