import React, { useState } from "react";

const Controls = ({ handleSortValue, sortValue, setSortValue }) => {
  const [active, setActive] = useState("");
  return (
    // controlled component to filter projects
    <>
      <div className="controls">
        <button
          className="controls__btn"
          onClick={() => handleSortValue("Frontend")}
          style={sortValue === "Frontend" ? { backgroundColor: "#3E3EFF" } : {}}
        >
          Frontend
        </button>
        <button
          className="controls__btn"
          onClick={() => handleSortValue("Full-Stack")}
          style={
            sortValue === "Full-Stack" ? { backgroundColor: "#3E3EFF" } : {}
          }
        >
          Full-Stack
        </button>
        <button
          className="controls__btn"
          onClick={() => handleSortValue("React")}
          style={sortValue === "React" ? { backgroundColor: "#3E3EFF" } : {}}
        >
          React
        </button>
      </div>
      <div className="controls">
        <button
          className="controls__btn"
          onClick={() => handleSortValue("Redux")}
          style={sortValue === "Redux" ? { backgroundColor: "#3E3EFF" } : {}}
        >
          Redux
        </button>
        <button
          className="controls__btn"
          onClick={() => handleSortValue("TypeScript")}
          style={
            sortValue === "TypeScript" ? { backgroundColor: "#3E3EFF" } : {}
          }
        >
          TypeScript
        </button>
        <button className="controls__btn" onClick={() => setSortValue("")}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Controls;
