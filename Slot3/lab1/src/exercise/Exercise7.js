import React from "react";

const Exercise7 = () => {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "Finance" },
    { name: "Ann", department: "Finance" },
    { name: "Tom", department: "IT" }
  ];

  const sorted = [...employees].sort((a, b) => {
    const depCompare = a.department.localeCompare(b.department);
    return depCompare !== 0 ? depCompare : a.name.localeCompare(b.name);
  });

  return (
    <ul>
      {sorted.map((e, index) => (
        <li key={index}>
          {e.name} - {e.department}
        </li>
      ))}
    </ul>
  );
};

export default Exercise7;
