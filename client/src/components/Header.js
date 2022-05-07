import React from 'react';
import { MdArrowRightAlt } from "react-icons/md";
// import {ReactComponent } from '../assets/Images/brick-wall.jpg'
import Avatar from './Avatar';
import NeonButton from './NeonButton';

const Header = () => {



    return (
        <header className='hdr'>
            <div className="hdr__intro ">
                <h1 className="hdr__intro-heading">Hello, I am Evan Parker. Full Stack Developer</h1>
                <Avatar />
                <NeonButton/>
                {/* <button className="projects-link">See my work<MdArrowRightAlt/></button> */}
            </div>
        </header>
    )
}

export default Header
