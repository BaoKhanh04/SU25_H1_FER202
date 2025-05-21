import React from 'react';

const Exercise5 = () => {
  const employees = [
    { name: "Anna" },
    { name: "Brian" },
    { name: "Clara" },
    { name: "Ann" },
    { name: "Elisabeth" }
  ];

  return (
    <select>
      {employees.map((e, index) => (
        <option key={index} value={e.name}>{e.name}</option>
      ))}
    </select>
  );
};

export default Exercise5;