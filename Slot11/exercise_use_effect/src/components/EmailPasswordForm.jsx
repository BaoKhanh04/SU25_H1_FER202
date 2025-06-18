import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

// Hàm xác thực email
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Hàm xác thực mật khẩu
const validatePassword = (password) => {
  return password.length >= 8;
};

function EmailPasswordForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // useEffect để xác thực email
  useEffect(() => {
    if (emailTouched) {
      const isValidEmail = validateEmail(email);
      setEmailValid(isValidEmail);
      if (!isValidEmail && email !== "") {
        setEmailError("Vui lòng nhập một địa chỉ email hợp lệ!");
      } else {
        setEmailError("");
      }
    }
  }, [email, emailTouched]);

  // useEffect để xác thực mật khẩu
  useEffect(() => {
    if (passwordTouched) {
      const isValidPassword = validatePassword(password);
      setPasswordValid(isValidPassword);
      if (!isValidPassword && password !== "") {
        setPasswordError("Mật khẩu phải có ít nhất 8 ký tự!");
      } else {
        setPasswordError("");
      }
    }
  }, [password, passwordTouched]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid && passwordValid) {
      alert("Form submitted successfully!");
    }
  };

  const isFormValid = emailValid && passwordValid && email !== "" && password !== "";

  return (
    <div className="container mt-4">
      <h3>Exercise 5: Email and Password Validation</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
            isValid={emailTouched && emailValid && email !== ""}
            isInvalid={emailTouched && !emailValid && email !== ""}
            placeholder="Nhập email của bạn"
          />
          <Form.Control.Feedback type="invalid">
            {emailError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setPasswordTouched(true)}
            isValid={passwordTouched && passwordValid && password !== ""}
            isInvalid={passwordTouched && !passwordValid && password !== ""}
            placeholder="Nhập mật khẩu của bạn"
          />
          <Form.Control.Feedback type="invalid">
            {passwordError}
          </Form.Control.Feedback>
        </Form.Group>

        <Button 
          variant="primary" 
          type="submit" 
          disabled={!isFormValid}
          className="mt-3"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default EmailPasswordForm; 