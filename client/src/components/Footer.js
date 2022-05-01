import React from "react";
import ScrollButton from './ScrollButton';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="ftr">
      <div className="ftr-info">
        <div class="ftr__container">
          <img
            className="ftr-avatar"
            src={require("../assets/Images/footer-avatar.png")}
            alt="Evan Parker avatar"
          />
        </div>
        <div className="copyright">

        <p> Evan Parker ⓒ {year}</p>
        <button className="contact-btn"><span>Contact Me</span></button>
        <ScrollButton/>
        </div>
      </div>
      {/* <BsFillArrowUpCircleFill/> */}
    </footer>
  );
};

export default Footer;
