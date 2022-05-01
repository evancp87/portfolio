import React, {useState} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';
function ScrollButton() {

    const [visible, setVisible] = useState(false);

    function toggleVisible () {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 800) {
          return  setVisible(true);
        } else {
            return setVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth'
        })

    }

    window.addEventListener('scroll', toggleVisible);

    return (
        <button className="scroll-btn">
          <FaArrowCircleUp 
          onClick={scrollToTop}
          style={{display: visible ? 'inline' : 'none' }}
          />  
        </button>
    )
}

export default ScrollButton
