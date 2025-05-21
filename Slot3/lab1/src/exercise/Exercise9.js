import React from "react";

const Exercise9 = () => {
  const employees = [
    { name: "Anna", age: 50 },
    { name: "Brian", age: 40 },
    { name: "Clara", age: 19 },
    { name: "Ann", age: 22 },
    { name: "Elisabeth", age: 16 }
  ];

  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

  return <p>Any teenager? {isTeenager ? "Yes" : "No"}</p>;
};

export default Exercise9;
