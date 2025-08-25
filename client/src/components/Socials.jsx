import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { IconContext } from 'react-icons';

const Socials = () => {
  return (
    <div className="socials">
      <ul>
        <IconContext.Provider value={{ size: '2rem', padding: '5em' }}>
          <li className="socials__item">
            <a href="https://github.com/evancp87">
              <AiFillGithub />
            </a>
          </li>

          <li className="socials__item">
            <a href="https://www.instagram.com/evsparks87/">
              <AiFillInstagram />
            </a>
          </li>

          <li className="socials__item">
            <a href="https://www.linkedin.com/in/evan-parker-9a336987/">
              <TiSocialLinkedinCircular />
            </a>
          </li>
        </IconContext.Provider>
      </ul>
    </div>
  );
};

export default Socials;
