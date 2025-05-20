import people from "./people";

function AverageAgeByOccupation() {
  const occupationMap = people.reduce((acc, p) => {
    if (!acc[p.occupation]) {
      acc[p.occupation] = [];
    }
    acc[p.occupation].push(p.age);
    return acc;
  }, {});

  return (
    <div>
      <h2>Average Age by Occupation</h2>
      <ul>
        {Object.entries(occupationMap).map(([occupation, ages], index) => {
          const avg = ages.reduce((sum, age) => sum + age, 0) / ages.length;
          return (
            <li key={index}>
              {occupation}: {avg.toFixed(1)} years old
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;