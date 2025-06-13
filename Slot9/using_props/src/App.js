import "./App.css";
import Welcome from "./components/Welcome";
import UserProfile from "./components/UserProfile";
import NameList from "./components/NameList";
import StudentCard from "./components/StudentCard";
import { Container, Row, Col } from "react-bootstrap";
import stdIm1 from "./assets/images/khanh_DE180098.jpg";
import stdIm2 from "./assets/images/khoa_DE180142.jpg";
import stdIm3 from "./assets/images/kiet_DE180277.jpg";

function App() {
  const userData = { name: "Bao Khanh", age: 21 }; // Ex2
  const namesList = ["Khanh Thu 2", "Khanh Chu nhat"]; // Ex3
  // Ex4
  const students = [
    {
      name: "Hoang Vo Bao Khanh",
      age: 21,
      avatar: stdIm1,
    },
    {
      name: "Pham Nguyen Anh Khoa",
      age: 21,
      avatar: stdIm2,
    },
    {
      name: "Luong Van Tuan Kiet",
      age: 21,
      avatar: stdIm3,
    },
  ];

  return (
    <div>
      <h1 style={{color: 'red'}}>Ex1</h1>
      <Welcome name="Hoang Vo Bao Khanh@fpt.edu.vn" />
      <Welcome name="Khanh thu 2 thi khong ai la Chu nhat" />

      <h1 style={{color: 'red'}}>Ex2</h1>
      <h2>
        <UserProfile user={userData} />
      </h2>

      <h1 style={{color: 'red'}}>Ex3</h1>
      <Welcome name="Hoang Vo Bao Khanh@fpt.edu.vn" />
      <h2>
        <UserProfile user={userData} />
        <NameList names={namesList} />
      </h2>

      <h1 style={{color: 'red'}}>Ex4</h1>
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
