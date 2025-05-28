import React from "react";

export default function Grid() {
  return (
    <div>

      {/* Header */}
      <div style={{ backgroundColor: "#f8f9fa" }} className="py-4 mb-4">
        <div className="container">
          <h1 className="fw-bold">Let's test the grid!</h1>
        </div>
      </div>

      {/* Nav Links */}
      <div className="container mb-4">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>

      {/* Grid Layout */}
      <div className="container mb-4">
        <div className="row g-0">
          <div className="col-6 border" style={{ backgroundColor: "#d3d3d3" }}>First col</div>
          <div className="col-6 border" style={{ backgroundColor: "#d3d3d3" }}>Second col</div>
        </div>

        <div className="row g-0">
          <div className="col-4 border" style={{ backgroundColor: "#d3d3d3" }}>col</div>
          <div className="col-4 border" style={{ backgroundColor: "#d3d3d3" }}>col</div>
          <div className="col-4 border" style={{ backgroundColor: "#d3d3d3" }}>col</div>
        </div>

        <div className="row g-0">
          <div className="col-3 border" style={{ backgroundColor: "#d3d3d3" }}>col</div>
          <div className="col-3 border" style={{ backgroundColor: "#d3d3d3" }}>col</div>
          <div className="col-3 border" style={{ backgroundColor: "#d3d3d3" }}>col</div>
          <div className="col-3 border" style={{ backgroundColor: "#d3d3d3" }}>col</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: "#d4b4af" }} className="py-2">
        <h2 className="text-center fw-bold m-0 text-dark">Created by Khanh!</h2>
      </div>

    </div>
  );
}
