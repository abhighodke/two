import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import hamburgerIcon from '../../assets/hamburger-icon.png'; // Add your hamburger icon to the assets folder
import clientData from '../../clientData'; // Import clientData

const Header = ({ onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = heroRef.current ? heroRef.current.offsetHeight : 0;
      const currentScrollY = window.scrollY;

      if (currentScrollY > heroHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }

      if (currentScrollY > lastScrollY && currentScrollY > heroHeight) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= heroHeight) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      setScrollTimeout(setTimeout(() => {
        if (window.scrollY === currentScrollY) {
          setIsVisible(true);
        }
      }, 200));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 py-4 px-8 transition-all duration-300 flex justify-between items-center ${
          isScrolled ? 'bg-black' : 'bg-transparent'
        } ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}
      >
        <div className="text-4xl font-bold text-white">
          <Link to="/">
            {/* Header Initials */}
            <h3>{clientData.headerInitials}</h3>
          </Link>
        </div>
        <nav className="flex space-x-8 items-center">
          <button onClick={onMenuClick} className="text-white transform transition-transform duration-700 hover:scale-110">
            <img src={hamburgerIcon} alt="Menu" className="w-10 h-10" />
          </button>
        </nav>
      </header>
      <div className="hero" ref={heroRef}></div>
    </>
  );
};

export default Header;
