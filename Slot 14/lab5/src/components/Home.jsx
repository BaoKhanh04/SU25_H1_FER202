import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import slide1 from '../data/image/slide1.jpg';
import slide2 from '../data/image/slide2.jpg';
import slide3 from '../data/image/slide3.jpg';

const Home = () => {
  return (
    <Container fluid className="px-0">
      <Carousel className="mb-5" style={{ width: '100%', maxWidth: '100%' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Test Your Knowledge</h3>
            <p>Take our quizzes and challenge yourself!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Latest News</h3>
            <p>Stay updated with our latest articles and updates.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Contact Us</h3>
            <p>Have questions? Reach out to our team.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Take a Quiz</h5>
              <p className="card-text">Test your knowledge with our interactive quizzes on various topics.</p>
              <a href="/quiz" className="btn btn-primary">Start Quiz</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Read News</h5>
              <p className="card-text">Stay updated with our latest articles and news updates.</p>
              <a href="/news" className="btn btn-primary">View News</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Contact Us</h5>
              <p className="card-text">Have questions? Reach out to our support team.</p>
              <a href="/contact" className="btn btn-primary">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
