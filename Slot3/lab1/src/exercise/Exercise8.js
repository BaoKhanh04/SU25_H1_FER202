import React from "react";

const Exercise8 = () => {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "Finance" },
    { name: "Ann", department: "Finance" },
    { name: "Tom", department: "IT" }
  ];

  const grouped = employees.reduce((acc, curr) => {
    acc[curr.department] = acc[curr.department] || [];
    acc[curr.department].push(curr.name);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(grouped).map(([dept, names]) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {names.map((name, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Exercise8;
