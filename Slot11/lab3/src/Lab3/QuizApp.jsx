import React, { Component } from "react";
import Question from "./Question";
import Result from "./Result";

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: "Question 1: What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        {
          id: 2,
          question: "Question 2: What is the largest planet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter",
        },
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    };
  }

  handleAnswer = (selectedOption) => {
    const { questions, currentQuestion, score } = this.state;
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    this.setState({
      score: isCorrect ? score + 1 : score,
      currentQuestion: currentQuestion + 1,
      quizEnd: currentQuestion + 1 === questions.length,
    });
  };

  handleReplay = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    });
  };

  render() {
    const { questions, currentQuestion, score, quizEnd } = this.state;
    return (
      <div>
        {!quizEnd ? (
          <Question
            question={questions[currentQuestion]}
            onAnswer={this.handleAnswer}
          />
        ) : (
          <Result
            score={score}
            total={questions.length}
            onReplay={this.handleReplay}
          />
        )}
      </div>
    );
  }
}

export default QuizApp;
