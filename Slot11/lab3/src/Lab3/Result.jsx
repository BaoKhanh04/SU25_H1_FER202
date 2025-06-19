// Import React để sử dụng JSX
import React from "react";

// Định nghĩa component Result nhận props là score, total, onReplay
function Result({ score, total, onReplay }) {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      {/* Hiển thị tiêu đề kết thúc quiz */}
      <h2>Quiz Ended</h2>
      {/* Hiển thị điểm số của người dùng */}
      <p style={{ fontSize: "1.5rem" }}>Your Score: {score} / {total}</p>
      {/* Nút bấm để chơi lại quiz */}
      <button onClick={onReplay} style={{ padding: "0.75rem 1.5rem", fontSize: "1rem", marginTop: "1rem" }}>Replay</button>
    </div>
  );
}

export default Result; // Xuất component Result 