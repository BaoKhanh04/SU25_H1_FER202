// Import React và Component để tạo component dạng class
import React, { Component } from "react";
// Import component Question để hiển thị câu hỏi và đáp án
import Question from "./Question";
// Import component Result để hiển thị kết quả cuối cùng
import Result from "./Result";

// Định nghĩa component chính QuizApp quản lý toàn bộ ứng dụng quiz
class QuizApp extends Component {
  // Hàm khởi tạo (constructor) để khởi tạo state
  constructor(props) {
    super(props); // Gọi constructor của lớp cha (Component)
    // Khởi tạo state với các thuộc tính:
    this.state = {
      questions: [ // Mảng các câu hỏi
        {
          id: 1, // ID của câu hỏi
          question: "Question 1: What is the capital of France?", // Nội dung câu hỏi
          options: ["Paris", "London", "Berlin", "Madrid"], // Các đáp án
          answer: "Paris", // Đáp án đúng
        },
        {
          id: 2, // ID của câu hỏi thứ 2
          question: "Question 2: What is the largest planet in our solar system?", // Nội dung câu hỏi thứ 2
          options: ["Jupiter", "Saturn", "Mars", "Earth"], // Các đáp án
          answer: "Jupiter", // Đáp án đúng
        },
        // Có thể thêm nhiều câu hỏi ở đây
      ],
      currentQuestion: 0, // Chỉ số câu hỏi hiện tại (bắt đầu từ 0)
      score: 0,           // Điểm số hiện tại của người dùng
      quizEnd: false,     // Trạng thái: đã kết thúc quiz hay chưa
    };
  }

  // Hàm xử lý khi người dùng chọn một đáp án
  handleAnswer = (selectedOption) => {
    // Lấy thông tin từ state
    const { questions, currentQuestion, score } = this.state;
    // Kiểm tra đáp án người dùng chọn có đúng không
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    // Cập nhật state:
    this.setState({
      score: isCorrect ? score + 1 : score, // Nếu đúng thì cộng điểm
      currentQuestion: currentQuestion + 1, // Chuyển sang câu hỏi tiếp theo
      quizEnd: currentQuestion + 1 === questions.length, // Nếu hết câu hỏi thì kết thúc quiz
    });
  };

  // Hàm xử lý khi người dùng bấm nút chơi lại (Replay)
  handleReplay = () => {
    // Đặt lại state về trạng thái ban đầu
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    });
  };

  // Hàm render để hiển thị giao diện
  render() {
    // Lấy dữ liệu từ state
    const { questions, currentQuestion, score, quizEnd } = this.state;
    return (
      <div>
        {/* Nếu quiz chưa kết thúc thì hiển thị câu hỏi hiện tại */}
        {!quizEnd ? (
          <Question
            question={questions[currentQuestion]} // Truyền câu hỏi hiện tại vào component Question
            onAnswer={this.handleAnswer}          // Truyền hàm xử lý khi chọn đáp án
          />
        ) : (
          // Nếu quiz đã kết thúc thì hiển thị kết quả
          <Result
            score={score}                         // Truyền điểm số đạt được
            total={questions.length}              // Truyền tổng số câu hỏi
            onReplay={this.handleReplay}          // Truyền hàm xử lý khi bấm nút Replay
          />
        )}
      </div>
    );
  }
}

// Xuất component QuizApp để sử dụng ở nơi khác
export default QuizApp; 