"use client";

import React, { useRef, useEffect } from 'react';
import ScrollTopButton from './Buttons/ScrollTopButton';

interface ScrollTopProps {} // Empty interface for props (optional)

const ScrollTop: React.FC<ScrollTopProps> = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 180) {
        buttonRef.current?.classList.add('right-10');
      } else {
        buttonRef.current?.classList.remove('right-10');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="overflow-hidden">
      <button
        aria-label="Scroll to top"
        className={`fixed bottom-[183px] ss:bottom-10 z-30 -right-full mr-[25px] transition-all duration-500 shadow-2xl shadow-black hover:opacity-80 active:opacity-70`}
        onClick={scrollToTop}
        ref={buttonRef}
      >
        <ScrollTopButton />
      </button>
    </div>
  );
};

export default ScrollTop;