
import {NavLink} from 'react-router-dom';


import React from 'react';

const Nav = () => {

    return (
        <nav className='navigation'>
            <ul className="nav-items">
            <li className="logo nav-item">Evan Parker</li>
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Projects</li>
                <li className="nav-item">CV</li> 
                
                {/* <li className="nav-item"><NavLink to='/' exact activeClassName='active'>Home</NavLink></li>
                <li className="nav-item"><NavLink to='/about'  activeClassName='active'>About</NavLink></li>
                <li className="nav-item"><NavLink to='/projects'  activeClassName='active'>Projects</NavLink></li>
                <li className="nav-item"><NavLink to='/cv'  activeClassName='active'>CV</NavLink></li> */}
                
            </ul>
        </nav>
    )


}

export default Nav