import { useState } from "react";
import "./App.css";

function App() {
  const [selectedColor, setSelectedColor] = useState("");
  const [boxColors, setBoxColors] = useState<string[]>([]);

  const handleClick = () => {
    setBoxColors([...boxColors, selectedColor]);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(e.target.value);
  };

  return (
    <>
      <select value={selectedColor} onChange={handleColorChange}>
        <option value="green">green</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
      </select>
      <button onClick={() => handleClick()}>+</button>
      <div style={{ display: "flex" }}>
        {boxColors.map((_value, index) => (
          <div
            key={index}
            style={{
              backgroundColor: boxColors[index],
              width: "50px",
              height: "50px",
              margin: "10px",
            }}
          ></div>
        ))}
      </div>
      <br />
    </>
  );
}

export default App;
