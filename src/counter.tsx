import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Count: {count}</button>
      <div>{count * 2}</div>
    </>
  );
}

export default Counter;
