import React from "react";
import ScrollButton from "./ScrollButton";

const Footer = () => {
  // dynamic data function for copyright
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="ftr">
      <div className="ftr__info">
        <div className="ftr__container">
          {/* avatar img */}
          <img
            className="ftr__avatar"
            src={require("../assets/Images/footer-avatar.png")}
            alt="Evan Parker avatar"
          />
        </div>
        <div className="ftr__copyright">
          <p> Evan Parker ⓒ {year}</p>
          {/*  contact button*/}
          <button className="ftr__contact-btn">
            <a href="mailto:evancp@hotmail.com?subject=🫱🏼‍🫲🏽 Let's work together!">
              <div className="ftr__contact-btn-container">
                <p className="ftr__contact-btn-text"> Contact Me</p>
              </div>
              <div className="ftr__contact-btn-inner">
                <p className="ftr__contact-btn-inner-text">Now!</p>
              </div>
            </a>
          </button>
          {/* scroll to top button- nested */}
          <ScrollButton />
          {/* Accreditation for Flaticon icons */}
          <a href="https://www.flaticon.com/icons" title="Flaticon icons">
            Skill icons created by Freepik - Flaticon
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
