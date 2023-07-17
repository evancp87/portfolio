import React, { useState } from "react";
import ScrollButton from "./ScrollButton";
import Avatar from "../assets/Images/avatar-two.png";

const Footer = () => {
  // dynamic data function for copyright
  const date = new Date();
  const year = date.getFullYear();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Name:", name);
    console.log("Message:", message);
  };
  return (
    <footer className="ftr">
      <div className="ftr__info">
        <div className="ftr__container">
          {/* avatar img */}
          <img className="ftr__avatar" src={Avatar} alt="Evan Parker avatar" />
        </div>
        <div className="ftr__copyright">
          <p> Evan Parker ⓒ {year}</p>
          {/*  contact button*/}

          <form className="ftr__form">
            <label htmlFor="email">
              <input
                className="ftr__field ftr__field--input"
                type="text"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="email"
              />
            </label>
            <label htmlFor="name">
              <input
                className="ftr__field ftr__field--input"
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
                placeholder="name"
              />
            </label>

            <label htmlFor="email-body">
              <textarea
                className="ftr__field"
                name="email-body"
                id=""
                cols="30"
                rows="10"
                value={message}
                onChange={handleMessageChange}
                placeholder="message"
              ></textarea>
            </label>
            <button
              type="submit"
              className="ftr__contact-btn"
              onClick={handleSubmit}
              action="mailto:evancp@hotmail.com"
              method="post"
              encType="text/plain"
            >
              <a href="mailto:evancp@hotmail.com?subject=🫱🏼‍🫲🏽 Let's work together!">
                <div className="ftr__contact-btn-container">
                  <p className="ftr__contact-btn-text"> Contact Me</p>
                </div>
                <div className="ftr__contact-btn-inner">
                  <p className="ftr__contact-btn-inner-text">Now!</p>
                </div>
              </a>
            </button>
          </form>
          {/* scroll to top button- nested */}
          <ScrollButton />
        </div>
      </div>
      {/* Accreditation for Flaticon icons */}
      <div className="ftr__accreditation">
        <a href="https://www.flaticon.com/icons" title="Flaticon icons">
          Skill icons created by Freepik - Flaticon
        </a>
      </div>
    </footer>
  );
};

export default Footer;
