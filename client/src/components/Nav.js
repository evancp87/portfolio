import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
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

                <li className="nav-item"><FacebookTwoToneIcon /> https://www.facebook.com/redrackham87</li>
                <li className="nav-item"><InstagramIcon />https://www.instagram.com/evsparks87/?hl=en</li>
                <li className="nav-item"><TwitterIcon />https://twitter.com/EvanPar74906861</li>

            </ul>
            {/* <div>
            <img src={avatar}>
            </div> */}
        </nav>
    )


}

export default Nav