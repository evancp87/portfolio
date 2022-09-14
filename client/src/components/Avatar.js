import React, { useState } from "react";
const classNames = require("classnames");

// avatar component
const Avatar = () => {
  // useState to set a boolean- default false
  const [isActive, setActive] = useState(false);

  // updates state to true and sets a class below on click that transforms the image on its Y axis- creating a double sided image
  function flipImage() {
    setActive(!isActive);
  }

  return (
    <div
      className={classNames("avatar-container", isActive && "flip-img")}
      onClick={flipImage}
    >
      {/* front face of avatar */}
      <div className="avatar__card" title="Flip me">
        <img
          src={require("../assets/Images/avatar.png")}
          alt="Evan Parker hdr avatar"
          className=" avatar__front"
        />
        {/* back face of avatar */}

        <img
          src={require("../assets/Images/evan-portrait.png")}
          alt="Evan Parker back avatar"
          className=" avatar__back"
        />
      </div>
    </div>
  );
};

export default Avatar;
