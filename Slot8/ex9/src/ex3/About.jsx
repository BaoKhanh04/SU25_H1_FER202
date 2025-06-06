import { Container } from "react-bootstrap"

const About = () => {
  return (
    <Container className="text-center" style={{ margin: "40px auto" }} id="about">
      <h3 className="mb-3" style={{ fontSize: "24px", fontWeight: "bold" }}>
        About
      </h3>
      <p style={{ fontSize: "16px", color: "#333" }}>This is the about section of the website.</p>
    </Container>
  )
}

export default About;
