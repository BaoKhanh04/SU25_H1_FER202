
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';


const ReviewPage = () => {
  const { questions } = useSelector(state => state.quiz);

  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12}>
          <div style={{ background: '#222', color: '#fff', padding: '40px 0', marginBottom: 32 }}>
            <h1 className="text-center" style={{ fontWeight: 600, fontSize: '2.5rem' }}>Quiz Review</h1>
          </div>
        </Col>
        <Col md={10} lg={8}>
          {questions.map((q, idx) => {
            const isCorrect = q.selected === q.correct;
            return (
              <div
                key={q.id}
                style={{
                  background: isCorrect ? '#d6f5df' : '#f8d7da',
                  borderRadius: 10,
                  marginBottom: 20,
                  padding: 20,
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ fontWeight: 700, color: isCorrect ? '#155724' : '#842029', fontSize: '1.1rem', marginBottom: 8 }}>
                  Q{idx + 1}. {q.question}
                </div>
                <div style={{ marginBottom: 12 }}>
                  {q.options.map((opt, i) => {
                    const isSelected = q.selected === opt;
                    const isAnswer = q.correct === opt;
                    return (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                        <input
                          type="radio"
                          checked={isSelected}
                          readOnly
                          style={{
                            marginRight: 8,
                            accentColor: isSelected ? (isAnswer ? '#198754' : '#dc3545') : (isAnswer ? '#198754' : '#adb5bd')
                          }}
                        />
                        <span style={{
                          fontWeight: isAnswer ? 700 : 400,
                          color: isAnswer ? '#155724' : (isSelected ? (isCorrect ? '#155724' : '#842029') : '#222'),
                          opacity: isAnswer || isSelected ? 1 : 0.6,
                          textDecoration: !isAnswer && !isSelected ? 'line-through' : 'none'
                        }}>
                          {opt}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div style={{ background: '#e9ecef', borderRadius: 5, padding: 8, fontWeight: 500, color: '#222', marginTop: 8 }}>
                  Right answer is: <span style={{ fontWeight: 700 }}>{q.correct}</span>
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewPage;
