import React, { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
function ScrollButton() {
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
      className="scroll-btn"
      onClick={scrollToTop}
      style={{
        display: visible ? "inline" : "none",
        // border: "none",
        // background: "none",
        // width: "150px",
        // height: "auto",
        // transition: "1s",
      }}
    >
      <BsFillArrowUpCircleFill className="scroll-button-arrow" />
    </button>
  );
}

export default ScrollButton;
