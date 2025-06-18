import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function ComprehensiveForm() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    country: "",
    agreeToTerms: false
  });

  const [touched, setTouched] = useState({
    name: false,
    gender: false,
    country: false,
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({
    name: "",
    gender: "",
    country: "",
    agreeToTerms: ""
  });

  const [isValid, setIsValid] = useState({
    name: true,
    gender: true,
    country: true,
    agreeToTerms: true
  });

  // useEffect để xác thực tên
  useEffect(() => {
    if (touched.name) {
      const nameValid = formData.name.trim().length >= 2;
      setIsValid(prev => ({ ...prev, name: nameValid }));
      setErrors(prev => ({
        ...prev,
        name: nameValid ? "" : "Tên phải có ít nhất 2 ký tự!"
      }));
    }
  }, [formData.name, touched.name]);

  // useEffect để xác thực giới tính
  useEffect(() => {
    if (touched.gender) {
      const genderValid = formData.gender !== "";
      setIsValid(prev => ({ ...prev, gender: genderValid }));
      setErrors(prev => ({
        ...prev,
        gender: genderValid ? "" : "Vui lòng chọn giới tính!"
      }));
    }
  }, [formData.gender, touched.gender]);

  // useEffect để xác thực quốc gia
  useEffect(() => {
    if (touched.country) {
      const countryValid = formData.country !== "";
      setIsValid(prev => ({ ...prev, country: countryValid }));
      setErrors(prev => ({
        ...prev,
        country: countryValid ? "" : "Vui lòng chọn quốc gia!"
      }));
    }
  }, [formData.country, touched.country]);

  // useEffect để xác thực checkbox
  useEffect(() => {
    if (touched.agreeToTerms) {
      const termsValid = formData.agreeToTerms;
      setIsValid(prev => ({ ...prev, agreeToTerms: termsValid }));
      setErrors(prev => ({
        ...prev,
        agreeToTerms: termsValid ? "" : "Bạn phải đồng ý với điều khoản!"
      }));
    }
  }, [formData.agreeToTerms, touched.agreeToTerms]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      name: true,
      gender: true,
      country: true,
      agreeToTerms: true
    });

    // Check if all fields are valid
    const allValid = Object.values(isValid).every(valid => valid) &&
                     formData.name.trim() !== "" &&
                     formData.gender !== "" &&
                     formData.country !== "" &&
                     formData.agreeToTerms;

    if (allValid) {
      alert("Form submitted successfully!");
      console.log("Form data:", formData);
    }
  };

  const isFormValid = Object.values(isValid).every(valid => valid) &&
                     formData.name.trim() !== "" &&
                     formData.gender !== "" &&
                     formData.country !== "" &&
                     formData.agreeToTerms;

  return (
    <div className="container mt-4">
      <h3>Exercise 6: Comprehensive Form Validation</h3>
      <Form onSubmit={handleSubmit}>
        {/* Textbox - Name */}
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Họ và tên</Form.Label>
          <Form.Control
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            onBlur={() => setTouched(prev => ({ ...prev, name: true }))}
            isValid={touched.name && isValid.name && formData.name.trim() !== ""}
            isInvalid={touched.name && !isValid.name}
            placeholder="Nhập họ và tên của bạn"
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Radio Button - Gender */}
        <Form.Group controlId="gender" className="mb-3">
          <Form.Label>Giới tính</Form.Label>
          <div>
            <Form.Check
              inline
              type="radio"
              name="gender"
              id="male"
              label="Nam"
              value="male"
              checked={formData.gender === "male"}
              onChange={(e) => handleInputChange("gender", e.target.value)}
            />
            <Form.Check
              inline
              type="radio"
              name="gender"
              id="female"
              label="Nữ"
              value="female"
              checked={formData.gender === "female"}
              onChange={(e) => handleInputChange("gender", e.target.value)}
            />
            <Form.Check
              inline
              type="radio"
              name="gender"
              id="other"
              label="Khác"
              value="other"
              checked={formData.gender === "other"}
              onChange={(e) => handleInputChange("gender", e.target.value)}
            />
          </div>
          {touched.gender && !isValid.gender && (
            <div className="text-danger small">{errors.gender}</div>
          )}
        </Form.Group>

        {/* Dropdown - Country */}
        <Form.Group controlId="country" className="mb-3">
          <Form.Label>Quốc gia</Form.Label>
          <Form.Select
            value={formData.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
            onBlur={() => setTouched(prev => ({ ...prev, country: true }))}
            isValid={touched.country && isValid.country && formData.country !== ""}
            isInvalid={touched.country && !isValid.country}
          >
            <option value="">Chọn quốc gia</option>
            <option value="vietnam">Việt Nam</option>
            <option value="usa">Hoa Kỳ</option>
            <option value="uk">Anh</option>
            <option value="japan">Nhật Bản</option>
            <option value="korea">Hàn Quốc</option>
            <option value="china">Trung Quốc</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.country}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Checkbox - Terms */}
        <Form.Group controlId="agreeToTerms" className="mb-3">
          <Form.Check
            type="checkbox"
            id="agreeToTerms"
            label="Tôi đồng ý với các điều khoản và điều kiện"
            checked={formData.agreeToTerms}
            onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
            onBlur={() => setTouched(prev => ({ ...prev, agreeToTerms: true }))}
            isValid={touched.agreeToTerms && isValid.agreeToTerms}
            isInvalid={touched.agreeToTerms && !isValid.agreeToTerms}
          />
          {touched.agreeToTerms && !isValid.agreeToTerms && (
            <div className="text-danger small">{errors.agreeToTerms}</div>
          )}
        </Form.Group>

        <Button 
          variant="primary" 
          type="submit" 
          disabled={!isFormValid}
          className="mt-3 mb-3"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ComprehensiveForm; 