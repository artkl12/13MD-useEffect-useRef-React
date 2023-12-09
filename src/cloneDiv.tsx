import { useRef } from "react";

function CloneDiv() {
  const divToCloneRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (divToCloneRef.current) {
      const clonedDiv = divToCloneRef.current.cloneNode(true);
      divToCloneRef.current.parentNode?.appendChild(clonedDiv);
    }
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <br />
        <div
          ref={divToCloneRef}
          style={{
            display: "flex",
            flexDirection: "row",
            background: "gold",
            color: "rgba(0, 0, 0, 0",
            width: "50px",
            height: "50px",
            margin: "10px",
          }}
        >
          div
        </div>
        <br />
      </div>
      <button onClick={handleClick}>Clone div</button>      
    </>
  );
}

export default CloneDiv;
