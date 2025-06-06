import { Nav } from "react-bootstrap"
import logoImg from "../assets/logo.jpg"

const Header = () => {
  return (
    <div style={{ backgroundColor: "#f4902b", width: "100%", padding: "20px 0" }}>
      {/* White section with logo centered */}
      <div
        style={{
          backgroundColor: "white",
          maxWidth: "500px",
          margin: "0 auto 15px auto",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <img
          src={logoImg || "/placeholder.svg"}
          alt="FPT Education Logo"
          style={{ height: "60px", marginBottom: "15px" }}
        />
        <h2
          style={{
            color: "#f4902b",
            fontWeight: "bold",
            fontSize: "32px",
            margin: "0",
            letterSpacing: "1px",
          }}
        >
          FPT UNIVERSITY
        </h2>
      </div>

      {/* Navigation menu */}
      <div className="text-center">
        <Nav className="justify-content-center">
          <Nav.Link href="#home" className="text-white mx-2" style={{ fontSize: "16px" }}>
            Home
          </Nav.Link>
          <Nav.Link href="#about" className="text-white mx-2" style={{ fontSize: "16px" }}>
            About
          </Nav.Link>
          <Nav.Link href="#contact" className="text-white mx-2" style={{ fontSize: "16px" }}>
            Contact
          </Nav.Link>
        </Nav>
      </div>
    </div>
  )
}

export default Header;
