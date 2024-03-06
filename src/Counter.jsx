import React from "react";

function Counter({ index, value }) {
  const increment = () => {};
  const decrement = () => {};

  return (
    <div>
      <h2>Counter Number: {index}</h2>
      <button onClick={increment}>+</button>
      <p>{}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
