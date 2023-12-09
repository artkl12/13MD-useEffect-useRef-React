import React, { useState } from "react";
import "./App.css";

function FocusedInput() {
  const [inputValue, setInputValue] = useState("");
  const [showInputValue, setShowInputValue] = useState<string[]>([]);  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowInputValue([...showInputValue, inputValue]);
    setInputValue(" ");    
  }; 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          value={inputValue}
          required
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ul>
          {showInputValue.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
        <button type="submit">Submit</button>
        <br />
      </form>
      <br />
    </>
  );
}

export default FocusedInput;