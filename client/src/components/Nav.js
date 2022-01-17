
import {NavLink} from 'react-router-dom';


import React from 'react';

const Nav = () => {

    return (
        <nav className='navigation'>
            <div className="logo">Evan Parker</div>
            <ul className="nav-items">
                <li className="nav-item"><NavLink to='/' exact activeClassName='active'>Home</NavLink></li>
                <li className="nav-item"><NavLink to='/skills'  activeClassName='active'>Skills</NavLink></li>
                <li className="nav-item"><NavLink to='/about'  activeClassName='active'>About</NavLink></li>
                <li className="nav-item"><NavLink to='/projects'  activeClassName='active'>Projects</NavLink></li>
                <li className="nav-item"><NavLink to='/cv'  activeClassName='active'>CV</NavLink></li>
                
            </ul>
            {/* <div>
            <img src={avatar}>
            </div> */}
        </nav>
    )


}

export default Nav