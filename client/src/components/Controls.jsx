import React from "react";

const Controls = ({ handleSortValue, sortValue }) => {
  return (
    <div className="">
      <button onClick={() => handleSortValue("Bootcamp")}>
        Bootcamp projects
      </button>
      <button onClick={() => handleSortValue("Freelance")}>
        Freelance projects
      </button>
      <button onClick={() => handleSortValue("Other")}>Other Projects</button>
    </div>
  );
};

export default Controls;
