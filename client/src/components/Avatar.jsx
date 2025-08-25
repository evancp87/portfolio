import React, { useState } from 'react';
import classNames from 'classnames';
import Front from '../assets/Images/avatar-one.png';
import Back from '../assets/Images/evan-portrait-lilac.jpg';

// avatar component
const Avatar = () => {
  const [isActive, setActive] = useState(false);

  function flipImage() {
    setActive(!isActive);
  }

  return (
    <div
      className={classNames('avatar-container', isActive && 'flip-img')}
      onClick={flipImage}
    >
      {/* front face of avatar */}
      <div className="avatar__card" title="Flip me">
        <img
          src={Front}
          alt="Evan Parker hdr avatar"
          className=" avatar__front"
        />
        {/* back face of avatar */}

        <img
          src={Back}
          alt="Evan Parker back avatar"
          className=" avatar__back"
        />
      </div>
    </div>
  );
};

export default Avatar;
