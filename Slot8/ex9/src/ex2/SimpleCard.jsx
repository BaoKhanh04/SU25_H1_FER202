import { Container, Card, Row, Col } from "react-bootstrap"
import logoImg from "../assets/logo.jpg"

const SimpleCard = () => {
  return (
    <Container className="mt-4">
      {/* FPT University Card */}
      <Card className="mb-4" style={{ maxWidth: "600px", border: "1px solid #ddd" }}>
        <Card.Body style={{ padding: "20px" }}>
          <Row className="align-items-center">
            <Col xs={6}>
              <div>
                <img
                  src={logoImg || "/placeholder.svg"}
                  alt="FPT Education Logo"
                  style={{ height: "50px", marginBottom: "15px" }}
                />
                <h4
                  style={{
                    color: "#f4902b",
                    fontWeight: "bold",
                    fontSize: "24px",
                    margin: "0",
                    letterSpacing: "0.5px",
                  }}
                >
                  FPT UNIVERSITY
                </h4>
              </div>
            </Col>
            <Col xs={6} className="text-end">
              <div>
                <div style={{ fontSize: "16px", fontWeight: "600", marginBottom: "5px", color: "#333" }}>
                  Hoai Nguyen - FPT DaNang
                </div>
                <div style={{ fontSize: "14px", color: "#666" }}>Mobile: 0982637763</div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default SimpleCard;
