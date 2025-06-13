const NameList = ({ names }) => {
  return (
    <div>
      <table>
        {names.map((name, index) => (
          <tr>{index}</tr>
          <tr key={index}>{name}</tr>
        ))}
      </table>
    </div>
  );
};
export default NameList;
