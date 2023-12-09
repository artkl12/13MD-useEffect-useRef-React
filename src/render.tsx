import React, { useState, useEffect } from "react";

function Render() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showInputValue, setShowInputValue] = useState<string[]>([]);

  useEffect(() => {
    console.log("render");
  }, []);

  useEffect(() => {
    console.log("changing count");
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("input change");
  }, [inputValue]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowInputValue([...showInputValue, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <button onClick={handleClick}>+</button>
      <div>{count + 0}</div>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          required
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p>{inputValue}</p>
      </form>
    </>
  );
}

export default Render;
