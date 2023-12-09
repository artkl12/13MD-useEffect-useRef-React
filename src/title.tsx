import React, { useState } from "react";

function Title() {
  const [title, setTitle] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    document.title = e.target.value;
  };

  return (
    <>
      <div>
        <input type="text" onChange={handleInput} />
      </div>
      <div>{title}</div><br />
    </>
  );
}

export default Title;
