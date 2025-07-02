// File này được copy từ Lab3/QuizApp.jsx
// Toàn bộ code chi tiết đã được comment lại để tham khảo cấu trúc

/*
import React, { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";

const QuizApp = () => {
  // ...
};

export default QuizApp;
*/ 

// Import React và các hook để tạo component dạng function
import React, { useState, useEffect } from "react";
// Import component Question để hiển thị câu hỏi và đáp án
import Question from "./Question";
// Import component Result để hiển thị kết quả cuối cùng
import Result from "./Result";

const QuizApp = () => {
  // Khởi tạo state lưu danh sách câu hỏi
  const [questions] = useState([
    {
      id: 1,
      question: "What is the capital of France?", // Nội dung câu hỏi
      options: ["Paris", "London", "Berlin", "Madrid"], // Các đáp án
      answer: "Paris", // Đáp án đúng
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter",
    },
  ]);
  // State lưu đáp án đã chọn cho từng câu hỏi
  const [selectedAnswers, setSelectedAnswers] = useState({});
  // State kiểm tra đã kết thúc quiz chưa
  const [quizEnd, setQuizEnd] = useState(false);
  // State lưu điểm số
  const [score, setScore] = useState(0);

  // Khi chọn đáp án cho 1 câu hỏi
  const handleAnswer = (questionId, option) => {
    setSelectedAnswers((prev) => ({
      ...prev, // Giữ lại các đáp án đã chọn trước đó
      [questionId]: option, // Cập nhật đáp án mới cho câu hỏi hiện tại
    }));
  };

  // Tự động kiểm tra khi đã chọn đủ đáp án cho tất cả câu hỏi
  useEffect(() => {
    const allAnswered = questions.every((q) => selectedAnswers[q.id]); // Kiểm tra đã trả lời hết chưa
    if (allAnswered && !quizEnd) {
      let newScore = 0;
      questions.forEach((q) => {
        if (selectedAnswers[q.id] === q.answer) newScore += 1; // Tăng điểm nếu đúng đáp án
      });
      setScore(newScore); // Cập nhật điểm
      setQuizEnd(true); // Kết thúc quiz
    }
  }, [selectedAnswers, questions, quizEnd]);

  // Khi chơi lại
  const handleReplay = () => {
    setSelectedAnswers({}); // Xóa đáp án đã chọn
    setQuizEnd(false); // Đặt lại trạng thái chưa kết thúc
    setScore(0); // Đặt lại điểm
  };

  return (
    <div>
      {/* Nếu chưa kết thúc quiz thì hiển thị các câu hỏi */}
      {!quizEnd ? (
        <div style={{ display: "flex", gap: "2rem" }}>
          {questions.map((q, idx) => (
            <div key={q.id} style={{ flex: 1 }}>
              <h3>Question {idx + 1}</h3>
              <Question
                question={q}
                selected={selectedAnswers[q.id]}
                onAnswer={(option) => handleAnswer(q.id, option)}
              />
            </div>
          ))}
        </div>
      ) : (
        // Nếu đã kết thúc quiz thì hiển thị kết quả
        <Result
          score={score}
          total={questions.length}
          onReplay={handleReplay}
        />
      )}
    </div>
  );
};

// Xuất component QuizApp để sử dụng ở nơi khác
export default QuizApp; 