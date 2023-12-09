import React from "react";
import ReactDOM from "react-dom/client";
import FocusedInput from "./focusedInput.tsx";
import "./index.css";
import Counter from "./counter.tsx";
import Dropdown from "./dropdown.tsx";
import Render from "./render.tsx";
import FontSize from "./fontSize.tsx";
import Title from "./title.tsx";
import BackgroundColor from "./changeBackground.tsx";
import CloneDiv from "./cloneDiv.tsx";
import PositionAbsolute from "./positionAbsolute.tsx";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FocusedInput />
    <Counter />
    <Dropdown />
    <Render />
    <FontSize />
    <Title />
    <BackgroundColor />
    <CloneDiv />
    <PositionAbsolute/>   
  </React.StrictMode>
);
