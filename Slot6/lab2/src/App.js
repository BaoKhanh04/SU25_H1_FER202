"use client"
import './App.css';

// Import images
import hawaiianPizza from "./assets/image/hawaiian_pizza.jpg"
import margheritaPizza from "./assets/image/margheri_pizza.jpg"
import mushroomPizza from "./assets/image/mushroom_pizza.jpg"
import pestoPizza from "./assets/image/pesto_pizza.jpg"
import backgroundImage from "./assets/image/background.jpg"

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4 text-white" href="#">
            Pizza House
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white mx-2" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white mx-2" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white mx-2" href="#">
                  Contact
                </a>
              </li>
            </ul>

            <div className="d-flex">
              <div className="input-group" style={{ width: "250px" }}>
                <input type="text" className="form-control" placeholder="Search..." />
                <button className="btn btn-danger" type="button">
                  🔍
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-3 fw-bold text-white mb-4">Neapolitan Pizza</h1>
              <p className="lead text-white">
                If you are looking for a traditional Italian pizza, the Neapolitan is the best option!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="menu-section bg-dark py-5">
        <div className="container">
          <h2 className="text-white mb-5">Our Menu</h2>
          <div className="row">
            {/* Margherita Pizza */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <div className="position-relative">
                  <img
                    src={margheritaPizza || "/placeholder.svg"}
                    alt="Margherita Pizza"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <span className="badge bg-warning position-absolute top-0 start-0 m-2">SALE</span>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Margherita Pizza</h5>
                  <div className="mb-3">
                    <span className="text-muted text-decoration-line-through me-2">$40.00</span>
                    <span className="fw-bold text-danger">$24.00</span>
                  </div>
                  <button className="btn btn-dark mt-auto">Buy</button>
                </div>
              </div>
            </div>

            {/* Mushroom Pizza */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <div className="position-relative">
                  <img
                    src={mushroomPizza || "/placeholder.svg"}
                    alt="Mushroom Pizza"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Mushroom Pizza</h5>
                  <div className="mb-3">
                    <span className="fw-bold text-danger">$25.00</span>
                  </div>
                  <button className="btn btn-dark mt-auto">Buy</button>
                </div>
              </div>
            </div>

            {/* Hawaiian Pizza */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <div className="position-relative">
                  <img
                    src={hawaiianPizza || "/placeholder.svg"}
                    alt="Hawaiian Pizza"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <span className="badge bg-warning position-absolute top-0 start-0 m-2">NEW</span>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Hawaiian Pizza</h5>
                  <div className="mb-3">
                    <span className="fw-bold text-danger">$30.00</span>
                  </div>
                  <button className="btn btn-dark mt-auto">Buy</button>
                </div>
              </div>
            </div>

            {/* Pesto Pizza */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <div className="position-relative">
                  <img
                    src={pestoPizza || "/placeholder.svg"}
                    alt="Pesto Pizza"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <span className="badge bg-warning position-absolute top-0 start-0 m-2">SALE</span>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Pesto Pizza</h5>
                  <div className="mb-3">
                    <span className="text-muted text-decoration-line-through me-2">$40.00</span>
                    <span className="fw-bold text-danger">$35.00</span>
                  </div>
                  <button className="btn btn-dark mt-auto">Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="booking-section bg-dark py-5">
        <div className="container">
          <h2 className="text-white text-center mb-5">Book Your Table</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="Your Name *" />
                  </div>
                  <div className="col-md-4">
                    <input type="email" className="form-control" placeholder="Your Email *" />
                  </div>
                  <div className="col-md-4">
                    <select className="form-select">
                      <option>Select a Service</option>
                      <option>Dine In</option>
                      <option>Takeaway</option>
                      <option>Delivery</option>
                    </select>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <textarea className="form-control" rows="5" placeholder="Please write your comment"></textarea>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <button
                      type="submit"
                      className="btn fw-bold px-4"
                      style={{
                        backgroundColor: "#ffc107",
                        borderColor: "#ffc107",
                        color: "#000",
                      }}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
