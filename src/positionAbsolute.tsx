import { useState, useRef } from "react";

function PositionAbsolute() {
  const [showDiv, setShowDiv] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setShowDiv(true);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "500px",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "lightgreen",
      }}
    >
      <button onClick={handleButtonClick}>Show Div</button>
      {showDiv && (
        <div
          ref={divRef}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            background: "white",
            padding: "10px",
            border: "1px solid black",
          }}
        >
          esmu stūrī
        </div>
      )}
    </div>
  );
}

export default PositionAbsolute;
