import React from "react";
import MyForm from "./components/MyForm"; 
import MyForm2 from "./components/MyForm2";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
  };
  const handleFormSubmit2 = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
  };
  return (
    <div className="App">
      <h1>Example3</h1>
      <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
      <br/>
      <h1>Example4</h1>
      <MyForm2 title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit2} />
    </div>
  );
};

export default App;
