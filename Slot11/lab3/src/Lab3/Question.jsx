// Import React để sử dụng JSX
import React from "react";

// Định nghĩa component Question nhận props là question và onAnswer
function Question({ question, onAnswer }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>{question.question}</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {question.options.map((option) => (
          <li key={option} style={{ margin: "0.5rem 0" }}>
            <button onClick={() => onAnswer(option)} style={{ width: "500px", padding: "0.5rem", fontSize: "1rem" }}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question; 