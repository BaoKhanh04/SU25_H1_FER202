import people from "./people";

function AreAllTeenagers() {
  const allTeenagers = people.every(p => p.age >= 13 && p.age <= 19);

  return (
    <div>
      <h2>Are All Teenagers?</h2>
      <p>{allTeenagers ? "Yes, all are teenagers." : "No, not all are teenagers."}</p>
    </div>
  );
}

export default AreAllTeenagers;