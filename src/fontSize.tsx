import { useState } from "react";

function FontSize() {
  const [count, setCount] = useState(100);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>+</button>
      <div style={{ fontSize: `${count + 0}px` }}>{count + 0}</div>
      <br />
    </>
  );
}

export default FontSize;
