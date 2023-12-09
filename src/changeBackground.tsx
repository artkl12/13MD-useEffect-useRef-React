import { useRef } from "react";

function BackgroundColor() {
  const colorRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (colorRef.current) {
      colorRef.current.style.backgroundColor = "gold";
    }
  };

  return (
    <>
      <div
        ref={colorRef}
        style={{
          color: "rgba(0, 0, 0, 0",
          width: "50px",
          height: "50px",
        }}
      >
        div
      </div>
      <br />
      <button onClick={handleClick}>Change color</button>
    </>
  );
}

export default BackgroundColor;
