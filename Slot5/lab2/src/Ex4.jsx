import React from "react";
import logo from "./assets/logofpt.jpg"; // ✅ Cập nhật đường dẫn ảnh vì file nằm trong src

export default function Exercise4() {
  return (
    <div>

      {/* Header - Logo + Menu */}
      <div style={{ backgroundColor: "#ed8b2d" }} className="py-4">
        <div className="container text-center">
          <img
            src={logo}
            alt="FPT University Logo"
            className="img-fluid mb-3"
            style={{ maxHeight: "120px" }}
          />
          <nav className="nav justify-content-center">
            <a className="nav-link text-white" href="#">Home</a>
            <a className="nav-link text-white" href="#">About</a>
            <a className="nav-link text-white" href="#">Contact</a>
          </nav>
        </div>
      </div>

      {/* Content - About + Contact */}
      <div className="container text-center my-5">
        <h4 className="fw-bold">About</h4>
        <p>This is the about section of the website.</p>

        <h4 className="fw-bold mt-4">Contact</h4>
        <p>
          For any inquiries, please contact us at{" "}
          <a href="mailto:example@example.com">example@example.com</a>.
        </p>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "#f9d28c" }} className="text-center py-3">
        <p className="mb-0">&copy; 2023 Website. All rights reserved.</p>
      </footer>

    </div>
  );
}
