import people from "./people";

function FirstTeenager() {
  const firstTeenager = people.find(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>First Teenager</h2>
      {firstTeenager ? (
        <p>{firstTeenager.name} - {firstTeenager.age} years old</p>
      ) : (
        <p>No teenager found.</p>
      )}
    </div>
  );
}

export default FirstTeenager;
