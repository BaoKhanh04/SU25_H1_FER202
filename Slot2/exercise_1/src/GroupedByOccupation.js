import people from "./people";

function GroupedByOccupation() {
  const groups = people.reduce((acc, p) => {
    if (!acc[p.occupation]) {
      acc[p.occupation] = [];
    }
    acc[p.occupation].push(p);
    return acc;
  }, {});

  return (
    <div>
      <h2>Grouped by Occupation</h2>
      {Object.entries(groups).map(([occupation, group], index) => (
        <div key={index}>
          <h3>{occupation}</h3>
          <ul>
            {group.map((p, i) => (
              <li key={i}>{p.name} - {p.age}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupedByOccupation;