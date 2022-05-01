import React from "react";

function Avatar() {
  const profilePic = {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    border: "10px solid black",
    position: "absolute",
    left: "40%",
    top: "50%"
  };
  return (
    <div class="avatar-container">
      {/* <div className="card">
        <div className="face front">
          <img
            style={profilePic}
            src={require("../assets/Images/avatar.png")}
            alt="Evan Parker avatar"
          />
        </div>
        <div className="face back">
          <img
            style={profilePic}
            src={require("../assets/Images/footer-avatar.png")}
            alt="Evan Parker avatar"
          />
        </div>
      </div> */}
        <div className="card" title="Flip me" >
    
          <img
            style={profilePic}
            src={require("../assets/Images/avatar.png")}
            alt="Evan Parker avatar"
            className="face front"
          />
        
    
          <img
            style={profilePic}
            src={require("../assets/Images/footer-avatar.png")}
            alt="Evan Parker avatar"
            className="face back"
          />
        
      </div>
    </div>
  );
}


// http://css3.bradshawenterprises.com/flip/#xandy
export default Avatar;
