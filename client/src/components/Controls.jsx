import React, { useState } from "react";

const Controls = ({ handleSortValue, sortValue }) => {
  const [active, setActive] = useState("");
  return (
    // controlled component to filter projects
    <div className="controls">
      <button
        className="controls__btn"
        onClick={() => handleSortValue("Bootcamp")}
        style={sortValue === "Bootcamp" ? { backgroundColor: "#3E3EFF" } : {}}
      >
        Bootcamp
      </button>
      <button
        className="controls__btn"
        onClick={() => handleSortValue("Freelance")}
        style={sortValue === "Freelance" ? { backgroundColor: "#3E3EFF" } : {}}
      >
        Freelance
      </button>
      <button
        className="controls__btn"
        onClick={() => handleSortValue("Other")}
        style={sortValue === "Other" ? { backgroundColor: "#3E3EFF" } : {}}
      >
        Other
      </button>
    </div>
  );
};

export default Controls;
