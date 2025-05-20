import people from "./people";

function SortedPeople() {
  const sorted = [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    return a.age - b.age;
  });

  return (
    <div>
      <h2>Sorted People</h2>
      <ul>
        {sorted.map((p, i) => (
          <li key={i}>
            {p.name} - {p.age} - {p.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortedPeople;