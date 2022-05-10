import React, { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 0.8) {
      return setVisible(true);
    } else {
      return setVisible(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      overflowY: "scroll",
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className="ftr__scroll-btn"
      onClick={scrollToTop}
      style={{
        display: visible ? "inline" : "none",
      }}
    >
      <BsFillArrowUpCircleFill className="ftr__scroll-button-arrow" />
    </button>
  );
};

export default ScrollButton;
