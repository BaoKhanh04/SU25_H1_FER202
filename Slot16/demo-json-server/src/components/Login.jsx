import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Container, Card, Alert, Spinner } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  // Redirect if already logged in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('auth'));
    if (user) {
      navigate(from, { replace: true });
    }
  }, [navigate, from]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Vui lòng nhập tên đăng nhập';
    }
    
    if (!formData.password) {
      newErrors.password = 'Vui lòng nhập mật khẩu';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const success = await login(formData.username, formData.password);
      if (success) {
        setLoginSuccess(true);
        // Show success message for 1.5 seconds before redirecting
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1500);
      } else {
        setServerError('Tên đăng nhập hoặc mật khẩu không chính xác');
      }
    } catch (error) {
      setServerError('Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại sau.');
      console.error('Login error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Card className="w-100" style={{ maxWidth: '400px' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Đăng nhập</h2>
          
          {loginSuccess && (
            <Alert variant="success">
              Đăng nhập thành công với username: {formData.username}. Đang chuyển hướng...
            </Alert>
          )}
          
          {serverError && <Alert variant="danger">{serverError}</Alert>}
          
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                name="username"
                placeholder="Nhập tên đăng nhập" 
                value={formData.username}
                onChange={handleChange}
                disabled={isSubmitting}
                isInvalid={!!errors.username}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control 
                type="password" 
                name="password"
                placeholder="Nhập mật khẩu" 
                value={formData.password}
                onChange={handleChange}
                disabled={isSubmitting}
                isInvalid={!!errors.password}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              className="w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Đang xử lý...
                </>
              ) : (
                'Đăng nhập'
              )}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

Login.propTypes = {
  // Add any props validation if needed
};

export default Login;
