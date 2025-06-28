import React, { useState, useReducer } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

// Reducer để quản lý trạng thái form
const initialState = {
  name: "",
  age: "",
  email: "",
  sex: "",
  isSubmitted: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT":
      return { ...state, isSubmitted: true };
    default:
      return state;
  }
};
// Component Form
const MyForm2 = ({ title, onSubmit }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false); // Biến để kiểm soát việc hiển thị alert

  // Hàm xử lý thay đổi giá trị input
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  // Hàm kiểm tra lỗi trước khi submit
const handleValidation = () => {
  const newErrors = {};

  // Kiểm tra tên: không rỗng, từ 3 đến 50 ký tự
  if (!state.name || state.name.trim().length < 3 || state.name.trim().length > 50) {
    newErrors.name = "Tên phải từ 3 đến 50 ký tự!";
  }

  // Kiểm tra tuổi: là số, từ 18 đến 100
  const age = Number(state.age);
    if (!state.age) {
      newErrors.age = "Tuổi không được để trống!";
    } else if (isNaN(age)) {
      newErrors.age = "Tuổi phải là số!";
    } else if (age < 18 || age > 100) {
      newErrors.age = "Tuổi phải nằm trong khoảng từ 18 đến 100!";
    }

    // Kiểm tra email: không rỗng, đúng định dạng
    if (!state.email) {
      newErrors.email = "Email không được để trống!";
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      newErrors.email = "Email không đúng định dạng!";
    }

    // Kiểm tra số điện thoại: từ 10 đến 15 chữ số
    if (!state.phoneNumber) {
      newErrors.phoneNumber = "Số điện thoại không được để trống!";
    } else if (!/^\d{10,15}$/.test(state.phoneNumber)) {
      newErrors.phoneNumber = "Số điện thoại phải từ 10 đến 15 chữ số!";
    }

    // Kiểm tra giới tính
    if (!state.sex) {
      newErrors.sex = "Giới tính không được để trống!";
    }

    // Kiểm tra đồng ý điều khoản
    if (!state.agree) {
      newErrors.agree = "Bạn phải đồng ý với điều khoản!";
    }

  setErrors(newErrors);
  setShowAlert(Object.keys(newErrors).length > 0);

  // Nếu có lỗi, hiển thị alert
  if (Object.keys(newErrors).length > 0) {
    setShowAlert(true);
  } else {
    setShowAlert(false);
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      dispatch({ type: "SUBMIT" });
      onSubmit(state);
    }
  };

  return (
    <Container>
      <h3>{title}</h3>

      {/* Hiển thị Alert nếu có lỗi */}
      {showAlert && (
        <Alert variant="danger">
          <strong>Lỗi:</strong> Vui lòng điền đầy đủ thông tin.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="age"
            name="age"
            value={state.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="phoneNumber"
            name="pasphoneNumber"
            value={state.phoneNumber}
            onChange={handleChange}
            isInvalid={!!errors.phoneNumber}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phoneNumber}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formSex">
          <Form.Label>Giới Tính</Form.Label>
          <Form.Control
            type="sex"
            name="sex"
            value={state.sex}
            onChange={handleChange}
            isInvalid={!!errors.sex}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAgree" className="mb-3">
          <Form.Check
            type="checkbox"
            name="agree"
            label="Tôi đồng ý với điều khoản"
            checked={!!state.agree}
            onChange={e =>
              dispatch({ type: "SET_FIELD", field: "agree", value: e.target.checked })
            }
            isInvalid={!!errors.agree}
          />
            <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
              {errors.agree}
            </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-5">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
// Xác định PropTypes cho MyForm
MyForm2.propTypes = {
  title: PropTypes.string.isRequired, // Tiêu đề phải là một chuỗi
  onSubmit: PropTypes.func.isRequired, // Hàm onSubmit phải là một function
};
export default MyForm2;
