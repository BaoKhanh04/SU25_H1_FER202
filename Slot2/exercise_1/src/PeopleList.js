function PeopleList() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 19, occupation: "Student" },
    { name: "Charlie", age: 32, occupation: "Teacher" },
  ];

  return (
    <div>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} - {person.age} - {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;
