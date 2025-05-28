import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import logo from "./assets/logofpt.jpg";
import image1 from "./assets/image1.jpg";
import img1 from "./assets/kiet_DE180277.jpg";
import img2 from "./assets/quan_DE180121.jpg";
import img3 from "./assets/khanh_DE180098.jpg";
import img4 from "./assets/khoa_DE180142.jpg";

export default function Exercise5() {
  const students = [
    {
      img: img1,
      id: "DE160182",
      name: "Lương Văn Tuấn Kiệt",
      location: "Đà Nẵng",
    },
    {
      img: img2,
      id: "DE160377",
      name: "Võ Chiêu Quân",
      location: "Quảng Nam",
    },
    {
      img: img3,
      id: "DE160547",
      name: "Hoàng Võ Bảo Khánh",
      location: "Hà Tĩnh",
    },
    {
      img: img4,
      id: "DE170049",
      name: "Phạm Nguyễn Anh Khoa",
      location: "Quảng Ngãi",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <header style={{ backgroundColor: "#f4a13d" }} className="p-3">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <img src={logo} alt="FPT Logo" style={{ height: 60 }} />
          <nav className="d-flex align-items-center gap-3">
            <a className="text-dark text-decoration-none" href="#">🏠 Trang chủ</a>
            <a className="text-dark text-decoration-none" href="#">📚 Ngành học</a>
            <a className="text-dark text-decoration-none" href="#">📝 Tuyển sinh</a>
            <a className="text-dark text-decoration-none" href="#">📋 Sinh viên</a>
            <span className="ms-3">
              <label className="me-1">Search:</label>
              <input type="text" className="form-control d-inline-block" style={{ width: 150 }} />
            </span>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <div className="text-center" style={{ backgroundColor: "#f7941e" }}>
        <img src={image1} alt="Banner" className="img-fluid" style={{ maxHeight: 400 }} />
      </div>

      {/* Breadcrumb */}
      <div className="container mt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Students</li>
          </ol>
        </nav>
      </div>

      {/* Students Detail */}
      <div className="container text-center my-4">
        <h3 className="fw-bold mb-4">Students Detail</h3>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {students.map((student, index) => (
            <div className="col" key={index}>
              <div className="card h-100 shadow-sm">
                <img src={student.img} className="card-img-top" alt={student.name} />
                <div className="card-body">
                  <h6>{student.id}</h6>
                  <p className="mb-1">{student.name}</p>
                  <p className="text-muted mb-2">{student.location}</p>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name={`status-${index}`} id={`absent-${index}`} />
                    <label className="form-check-label" htmlFor={`absent-${index}`}>Absent</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name={`status-${index}`} id={`present-${index}`} />
                    <label className="form-check-label" htmlFor={`present-${index}`}>Present</label>
                  </div>
                  <div className="d-grid mt-3">
                    <button className="btn btn-warning">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "#f7941e" }} className="text-white py-4 mt-auto">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <div>
            <h6>Our Address</h6>
            <p className="mb-1">Khu đô thị FPT Đà Nẵng</p>
            <p className="mb-1">📞 +84023111111</p>
            <p className="mb-1">📠 +852 8765 4321</p>
            <p>📧 <a className="text-white text-decoration-none" href="mailto:fptudn@fpt.edu.vn">fptudn@fpt.edu.vn</a></p>
          </div>
          <div className="d-flex align-items-end gap-3 fs-4">
            <i className="bi bi-google"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-envelope"></i>
          </div>
        </div>
        <div className="text-center mt-3">&copy; Copyright 2023</div>
      </footer>
    </div>
  );
}
