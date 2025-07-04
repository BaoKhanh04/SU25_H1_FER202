import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Alert, Button, Spinner, Card } from 'react-bootstrap';

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Fetch post details
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        if (response.data) {
          setPost(response.data);
        } else {
          setError('Không tìm thấy bài viết');
        }
      } catch (err) {
        console.error("Lỗi khi lấy thông tin bài viết:", err);
        setError('Đã xảy ra lỗi khi tải thông tin bài viết');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPost();
  }, [id]);

  // Handle delete confirmation
  const handleDelete = async () => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa bài viết này không? Hành động này không thể hoàn tác.')) {
      return;
    }
    
    setIsDeleting(true);
    setError(null);
    
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      
      // Show success message before redirecting
      alert('Bài viết đã được xóa thành công!');
      
      // Redirect to home page
      navigate("/");
    } catch (err) {
      console.error("Lỗi khi xóa bài viết:", err);
      setError('Đã xảy ra lỗi khi xóa bài viết. Vui lòng thử lại.');
      setIsDeleting(false);
    }
  };
  
  // Handle cancel
  const handleCancel = () => {
    navigate(-1); // Go back to previous page
  };

  if (isLoading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Đang tải...</span>
        </Spinner>
        <p>Đang tải thông tin bài viết...</p>
      </Container>
    );
  }
  
  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          <Alert.Heading>Đã xảy ra lỗi!</Alert.Heading>
          <p>{error}</p>
          <div className="d-flex justify-content-end">
            <Button variant="outline-secondary" onClick={() => navigate('/')}>
              Quay về trang chủ
            </Button>
          </div>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Xác nhận xóa bài viết</h1>
      
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Bạn có chắc chắn muốn xóa bài viết này?</Card.Title>
          <Card.Text className="text-muted">
            Hành động này không thể hoàn tác. Tất cả dữ liệu liên quan đến bài viết sẽ bị xóa vĩnh viễn.
          </Card.Text>
          
          {post && (
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  {post.content.length > 150 
                    ? `${post.content.substring(0, 150)}...` 
                    : post.content}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
          
          <div className="d-flex gap-2 mt-4">
            <Button 
              variant="danger" 
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Đang xóa...
                </>
              ) : 'Xác nhận xóa'}
            </Button>
            
            <Button 
              variant="outline-secondary" 
              onClick={handleCancel}
              disabled={isDeleting}
            >
              Hủy bỏ
            </Button>
          </div>
        </Card.Body>
      </Card>
      
      {error && (
        <Alert variant="danger" className="mt-3">
          {error}
        </Alert>
      )}
    </Container>
  );
};

// PropTypes validation
DeletePost.propTypes = {
  // Add any props here if needed
};

export default DeletePost;
