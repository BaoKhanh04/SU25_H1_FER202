import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswer, next, prev, first, last, submit } from '../redux/quizSlice';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentIndex, questions } = useSelector(state => state.quiz);
  const current = questions[currentIndex];
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    dispatch(submit());
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      navigate('/quiz/review');
    }, 1200);
  };

  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12}>
          <div style={{ background: '#222', color: '#fff', padding: '40px 0', marginBottom: 32 }}>
            <h1 className="text-center" style={{ fontWeight: 600, fontSize: '2.5rem' }}>JavaScript Quiz</h1>
          </div>
        </Col>
        <Col md={10} lg={8}>
          <div className="mb-4">
            <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>Q.{currentIndex + 1} Inside which HTML element do we put the JavaScript?</span>
          </div>
          <Row className="mb-4" xs={1} md={2}>
            {current.options.map((opt, idx) => (
              <Col key={idx} className="mb-3">
                <Button
                  variant={current.selected === opt ? 'primary' : 'outline-primary'}
                  className="w-100 text-start py-3"
                  style={{ backgroundColor: '#e7f1ff', color: '#222', border: current.selected === opt ? '2px solid #0d6efd' : 'none' }}
                  onClick={() => dispatch(selectAnswer({ index: currentIndex, answer: opt }))}
                >
                  <span style={{ marginRight: 8 }}>
                    <input type="radio" checked={current.selected === opt} readOnly style={{ marginRight: 8 }} />
                  </span>
                  {opt.replace(/<|>/g, match => match === '<' ? '&lt;' : '&gt;')}
                </Button>
              </Col>
            ))}
          </Row>
          <hr />
          <div className="d-flex justify-content-center mb-4 gap-2">
            <Button variant="primary" onClick={() => dispatch(first())}>First</Button>
            <Button variant="primary" onClick={() => dispatch(prev())}>Prev</Button>
            <Button variant="primary" onClick={() => dispatch(next())}>Next</Button>
            <Button variant="primary" onClick={() => dispatch(last())}>Last</Button>
          </div>
          <div className="d-flex justify-content-start gap-2">
            <Button variant="info" onClick={() => window.location.href='/quizzes'}>Quiz</Button>
            <Button variant="info" onClick={() => window.location.href='/quiz/review'}>Quiz Review</Button>
            <Button variant="info" onClick={handleSubmit}>Submit</Button>
          </div>
          {showAlert && (
            <div className="alert alert-success mt-3" role="alert">
              Nộp bài thành công! Đang chuyển sang trang Quiz Review...
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default QuizPage;
