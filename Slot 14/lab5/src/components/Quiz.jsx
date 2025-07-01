import React, { useState } from 'react';
import { Card, Button, Container, Form, Alert } from 'react-bootstrap';

const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars'
  },
  {
    id: 3,
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4'
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      setShowResult(true);
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Quiz</h2>
      {!quizCompleted ? (
        <Card>
          <Card.Body>
            <Card.Title>Question {currentQuestion + 1} of {questions.length}</Card.Title>
            <Card.Text className="h5 mt-4">{questions[currentQuestion].question}</Card.Text>
            
            <Form className="mt-4">
              {questions[currentQuestion].options.map((option, index) => (
                <Form.Check
                  key={index}
                  type="radio"
                  id={`option-${index}`}
                  label={option}
                  name="quiz-option"
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                  className="mb-3"
                />
              ))}
            </Form>

            <Button 
              variant="primary" 
              onClick={handleNext}
              disabled={!selectedOption}
            >
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Card>
          <Card.Body className="text-center">
            <h3>Quiz Completed!</h3>
            <Alert variant="info" className="mt-3">
              Your score: {score} out of {questions.length}
            </Alert>
            <Button variant="primary" onClick={resetQuiz} className="mt-3">
              Retake Quiz
            </Button>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Quiz;
