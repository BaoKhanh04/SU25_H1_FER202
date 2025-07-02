import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Counter() {
  const [count, setCount] = useState(0);
  const a = ["1","2"];
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
