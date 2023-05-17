import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTopButton.scss';

//scroll to top icon, used the FaArrowUp library
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      title="Scroll To Top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
