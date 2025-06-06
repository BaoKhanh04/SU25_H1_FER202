import { Container, Card } from "react-bootstrap"

const AboutMe = () => {
  return (
    <Container className="mt-4">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>About Me</Card.Title>
          <Card.Text>
            Xin chào! Tôi tên là Khánh - sinh viên tại Đại học FPT. 
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default AboutMe;
