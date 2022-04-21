import React from 'react';
import { MdArrowRightAlt } from "react-icons/md";


const Header = () => {
const profilePic = {
    width: '300px',
    height: 'auto',
    borderRadius: '50%',
    border: '10px solid black',
   
}

    return (
        <header className='hdr skew1'>
            <div className="hdr__intro">
                <h1 className="hdr__intro-heading">Hello, I am Evan Parker. Full Stack Developer</h1>
                <picture className="avatar">

                <img style={profilePic} src={require("../assets/Images/avatar.png")} alt="Evan Parker avatar"/>
                </picture>
                <button className="projects-link">See my work<MdArrowRightAlt/></button>
            </div>
        </header>
    )
}

export default Header
