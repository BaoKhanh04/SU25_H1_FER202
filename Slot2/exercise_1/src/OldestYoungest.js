import people from "./people";

function OldestYoungest() {
  const sorted = [...people].sort((a, b) => a.age - b.age);
  const youngest = sorted[0];
  const oldest = sorted[sorted.length - 1];

  return (
    <div>
      <h2>Oldest and Youngest</h2>
      <p>Youngest: {youngest.name} - {youngest.age} years old</p>
      <p>Oldest: {oldest.name} - {oldest.age} years old</p>
    </div>
  );
}

export default OldestYoungest;