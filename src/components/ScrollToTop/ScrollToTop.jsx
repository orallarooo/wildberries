import React, { useState, useEffect } from 'react';

import "./ScrollToTop.css"

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 240) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <button className="scroll-to-top" onClick={scrollToTop} style={{ display: showButton ? 'block' : 'none' }}>
    </button>
  );
}

export default ScrollToTop;