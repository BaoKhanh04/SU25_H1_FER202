import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    comments: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Container className="main-container py-5">
      <h2 className="booking-section-title text-center">Book Your Table</h2>
      <Row className="justify-content-center">
        <Col lg={12}>
          <Form onSubmit={handleSubmit}>
            <Row className="g-3 mb-4">
              <Col md={4}>
                <Form.Control
                  type="text"
                  placeholder="Your Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  size="lg"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  type="email"
                  placeholder="Your Email *"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  size="lg"
                />
              </Col>
              <Col md={4}>
                <Form.Select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  size="lg"
                >
                  <option value="">Select a Service</option>
                  <option value="dine-in">Dine In</option>
                  <option value="takeaway">Takeaway</option>
                  <option value="delivery">Delivery</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Please write your comment"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  size="lg"
                />
              </Col>
            </Row>
            <div className="text-start">
              <Button
                type="submit"
                variant="warning"
                size="lg"
                className="px-4 py-2 fw-semibold text-white"
              >
                Send Message
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Booking;
