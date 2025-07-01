import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import about_us from '../data/image/about_us.jpg';

const About = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">About Our Online Quiz App</h2>
      
      <Row className="mb-5">
        <Col md={6}>
          <h3>Our Mission</h3>
          <p className="lead">
            We are dedicated to providing an engaging and educational platform for users to test their knowledge 
            across various topics through interactive quizzes.
          </p>
          <p>
            Our goal is to make learning fun and accessible to everyone, whether you're a student looking to 
            prepare for exams or someone who enjoys challenging themselves with trivia.
          </p>
        </Col>
        <Col md={6}>
          <img 
            src={about_us} 
            alt="About Us" 
            className="img-fluid rounded"
            style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }}
          />
        </Col>
      </Row>

      <h3 className="mb-4">Features</h3>
      <Row className="g-4 mb-5">
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Interactive Quizzes</Card.Title>
              <Card.Text>
                Test your knowledge with our wide range of quizzes on various topics. Each quiz is designed to be both challenging and educational.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Latest News</Card.Title>
              <Card.Text>
                Stay updated with our regularly updated news section featuring interesting articles and updates in the world of education and technology.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>User-Friendly Interface</Card.Title>
              <Card.Text>
                Our intuitive design ensures a seamless experience for users of all ages and technical abilities.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
