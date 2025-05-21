import React from 'react';

const Exercise4 = () => {
  const averageAge = (...ages) => {
    const total = ages.reduce((sum, age) => sum + age, 0);
    return (total / ages.length).toFixed(2);
  };

  const result = averageAge(20, 30, 40, 50, 60);

  return <p>Average Age: {result}</p>;
};

export default Exercise4;