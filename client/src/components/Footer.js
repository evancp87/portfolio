import React from 'react';
// import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import {BsFillArrowUpCircleFill} from "react-icons/md";

const Footer = () => {

    return (
        <footer className="ftr skew skew5">
            <div className="ftr-info">

                <img className="ftr-avatar" src={require("../assets/Images/footer-avatar.png")} alt="Evan Parker avatar"/>
                <p className="copyright"> Evan Parker 2022</p>
                <button className="contact-btn">Contact Me</button>
            </div>
                {/* <BsFillArrowUpCircleFill/> */}
        </footer>
    )


}

export default Footer