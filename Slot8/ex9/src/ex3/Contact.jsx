import { Container } from "react-bootstrap"

const Contact = () => {
  return (
    <Container className="text-center" style={{ margin: "40px auto" }} id="contact">
      <h3 className="mb-3" style={{ fontSize: "24px", fontWeight: "bold" }}>
        Contact
      </h3>
      <p style={{ fontSize: "16px", color: "#333" }}>For any inquiries, please contact us at example@example.com.</p>
    </Container>
  )
}

export default Contact;
