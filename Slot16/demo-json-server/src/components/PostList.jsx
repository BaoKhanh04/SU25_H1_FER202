import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Spinner, Alert, Modal } from 'react-bootstrap';

const PostList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch dữ liệu khi component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setData(response.data); // Lưu dữ liệu vào state
        setLoading(false); // Đánh dấu việc tải xong
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setLoading(false); // Dừng trạng thái tải nếu có lỗi
      }
    };

    fetchData();
  }, []); // Chạy 1 lần khi component được mount

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Đang tải...</span>
        </Spinner>
        <p>Đang tải dữ liệu...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          <Alert.Heading>Đã xảy ra lỗi!</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Container className="mt-5">
        <Alert variant="info">Không có bài viết nào được tìm thấy!</Alert>
      </Container>
    );
  }

  // Hàm hiển thị xác nhận xóa
  const confirmDelete = (post) => {
    setPostToDelete(post);
    setShowDeleteModal(true);
  };

  // Hàm để xóa bài viết
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/posts/${postToDelete.id}`);
      setData(data.filter((post) => post.id !== postToDelete.id));
      setShowDeleteModal(false);
      setPostToDelete(null);
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
      setError("Đã xảy ra lỗi khi xóa bài viết");
    }
  };

  // Hàm đóng modal xác nhận xóa
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setPostToDelete(null);
  };

  return (
    <Container className="mt-4">
      <Row className="mb-4">
        <Col>
          <h1>Danh sách bài viết</h1>
        </Col>
        <Col className="text-end">
          <Button as={Link} to="/create" variant="primary">
            Tạo bài viết mới
          </Button>
        </Col>
      </Row>

      <Row xs={1} md={2} lg={3} className="g-4">
        {data.map((post) => (
          <Col key={post.id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between">
                <Button as={Link} to={`/edit/${post.id}`} variant="outline-primary" size="sm">
                  Chỉnh sửa
                </Button>
                <Button 
                  variant="outline-danger" 
                  size="sm"
                  onClick={() => confirmDelete(post)}
                >
                  Xóa
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal xác nhận xóa */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc chắn muốn xóa bài viết "{postToDelete?.title}" không?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Hủy
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PostList;

