import React from "react";

const Exercise6 = () => {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "Finance" },
    { name: "Tom", department: "IT" }
  ];

  const itEmployees = employees.filter(e => e.department === "IT");

  return (
    <ul>
      {itEmployees.map((e, index) => (
        <li key={index}>{e.name}</li>
      ))}
    </ul>
  );
};

export default Exercise6;
