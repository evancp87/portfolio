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
        <button className="contact-btn">

        <a  href="mailto:evancp@hotmail.com?subject=🫱🏼‍🫲🏽 Let's work together!">
          <div className="contact__btn-container">

          <p className="contact__btn-text"> Contact Me</p>
          </div>
          <div className="contact__btn-inner">
            <p className="contact__btn-inner-text">Now!</p>
            </div>
         
          </a>
        </button>
        <ScrollButton/>
        </div>
      </div>
      {/* <BsFillArrowUpCircleFill/> */}
    </footer>
  );
};

export default Footer;
