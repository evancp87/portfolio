import React from 'react';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

    return (
        <footer>
            <section className="social">
                <ul className="social">
                <li className="nav-item"><GitHubIcon /> https://github.com/evancp87</li>    
                <li className="nav-item"><FacebookTwoToneIcon /> https://www.facebook.com/redrackham87</li>
                <li className="nav-item"><InstagramIcon />https://www.instagram.com/evsparks87/?hl=en</li>
                <li className="nav-item"><TwitterIcon />https://twitter.com/EvanPar74906861</li>

                </ul>
            </section>
            <section className="copyright">@2022 Evan Parker</section>
        </footer>
    )


}

export default Footer