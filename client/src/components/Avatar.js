import React from 'react';

function Avatar () {
    const profilePic = {
        width: '300px',
        height: 'auto',
        borderRadius: '50%',
        border: '10px solid black',
       
    }
    return (

        <div class="avatar-container">
            <div className="card">



        <div className="face front">

        <img style={profilePic} src={require("../assets/Images/avatar.png")} alt="Evan Parker avatar"/>
        </div>
        <div className="face back">

        <img style={profilePic} src={require("../assets/Images/footer-avatar.png")} alt="Evan Parker avatar"/>
        </div>
            </div>

          
        </div>
    )
}

export default Avatar