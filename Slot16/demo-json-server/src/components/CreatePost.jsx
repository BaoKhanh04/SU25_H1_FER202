import React, { useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const navigate = useNavigate();
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Vui lòng nhập tiêu đề';
    } else if (formData.title.length < 5) {
      newErrors.title = 'Tiêu đề phải có ít nhất 5 ký tự';
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'Vui lòng nhập nội dung';
    } else if (formData.content.length < 10) {
      newErrors.content = 'Nội dung phải có ít nhất 10 ký tự';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    
    try {
      await axios.post("http://localhost:3000/posts", formData);
      
      setStatus({
        type: 'success',
        message: 'Bài viết đã được tạo thành công! Đang chuyển hướng...'
      });
      
      // Clear form
      setFormData({ title: '', content: '' });
      
      // Redirect after 1.5 seconds
      setTimeout(() => {
        navigate("/");
      }, 1500);
      
    } catch (error) {
      console.error("Lỗi khi tạo bài viết:", error);
      setStatus({
        type: 'danger',
        message: 'Đã xảy ra lỗi khi tạo bài viết. Vui lòng thử lại.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Thêm bài viết mới</h1>
      
      {status.message && (
        <Alert variant={status.type} className="mb-4">
          {status.message}
        </Alert>
      )}
      
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Nhập tiêu đề bài viết"
            value={formData.title}
            onChange={handleChange}
            isInvalid={!!errors.title}
          />
          <Form.Control.Feedback type="invalid">
            {errors.title}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-4" controlId="formContent">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="content"
            placeholder="Nhập nội dung bài viết"
            value={formData.content}
            onChange={handleChange}
            isInvalid={!!errors.content}
          />
          <Form.Control.Feedback type="invalid">
            {errors.content}
          </Form.Control.Feedback>
        </Form.Group>
        
        <div className="d-flex gap-2">
          <Button 
            variant="primary" 
            type="submit"
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
                Đang tạo...
              </>
            ) : 'Tạo bài viết'}
          </Button>
          
          <Button 
            variant="outline-secondary" 
            type="button"
            onClick={() => navigate('/')}
          >
            Quay lại
          </Button>
        </div>
      </Form>
    </Container>
  );
};

// PropTypes validation
CreatePost.propTypes = {
  // Add any props here if needed
};

export default CreatePost;
