import React from 'react';
// import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import {BsFillArrowUpCircleFill} from "react-icons/md";

const Footer = () => {
const date = new Date();
const year = date.getFullYear();
    return (
        <footer className="ftr">
            <div className="ftr-info">
<div class="ftr__container">

                <img className="ftr-avatar" src={require("../assets/Images/footer-avatar.png")} alt="Evan Parker avatar"/>
</div>
                <p className="copyright"> Evan Parker {year}</p>
                <button className="contact-btn">Contact Me</button>
            </div>
                {/* <BsFillArrowUpCircleFill/> */}
        </footer>
    )


}

export default Footer