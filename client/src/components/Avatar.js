import React, { useState } from "react";
const classNames= require('classnames');

function Avatar() {
  const [isActive, setActive] = useState(false);

  function flipImage() {
    setActive(!isActive);
  }

  
  return (
    <div className={classNames('avatar-container', isActive && "flip-img")} onClick={flipImage}>
      <div className="card" title="Flip me">
       
          <img
            src={require("../assets/Images/avatar.png")}
            alt="Evan Parker avatar"
            className=" front"
          />

          <img
            src={require("../assets/Images/evan-portrait.jpeg")}
            alt="Evan Parker avatar"
            className=" back"
          />
      </div>
    </div>
  );
}

// http://css3.bradshawenterprises.com/flip/#xandy
export default Avatar;
