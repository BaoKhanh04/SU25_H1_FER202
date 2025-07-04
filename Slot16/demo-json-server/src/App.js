import React from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import DeletePost from "./components/DeletePost";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { Spinner } from 'react-bootstrap';

const Navigation = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Quản lý Bài Viết</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Trang chủ</Nav.Link>
            <Nav.Link as={Link} to="/create">Tạo bài viết mới</Nav.Link>
          </Nav>
          {currentUser && (
            <Nav className="ms-auto">
              <span className="navbar-text me-3">Xin chào, {currentUser.username}</span>
              <Button variant="outline-light" onClick={handleLogout}>
                Đăng xuất
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const AppContent = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      {/* Main Content */}
      <main className="flex-grow-1 py-4">
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <ProtectedRoute>
                <PostList />
              </ProtectedRoute>
            } />
            <Route path="/create" element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            } />
            <Route path="/edit/:id" element={
              <ProtectedRoute>
                <EditPost />
              </ProtectedRoute>
            } />
            <Route path="/delete/:id" element={
              <ProtectedRoute>
                <DeletePost />
              </ProtectedRoute>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Container>
      </main>

      {/* Footer */}
      <footer className="bg-light py-3 mt-4">
        <Container className="text-center">
          <p className="mb-0">© 2023 Quản lý Bài Viết. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
