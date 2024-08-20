import React from 'react';
import { Link } from 'react-router-dom';
import closeIcon from '../../assets/close-icon.png'; // Update with a white icon if necessary

const MenuDrawer = ({ isOpen, onClose }) => {
  // Function to handle link clicks and close the drawer
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`w-full h-full p-8 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col justify-start pl-16`}>
        <button onClick={onClose} className="absolute top-8 right-8">
          <img src={closeIcon} alt="Close" className="w-8 h-8" />
        </button>
        <ul className="space-y-8 mt-32">
          <li className="relative group">
            <Link to="/" className="text-white text-5xl relative" onClick={handleLinkClick}>
              Home
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link to="/about" className="text-white text-5xl relative" onClick={handleLinkClick}>
              About
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link to="/resources" className="text-white text-5xl relative" onClick={handleLinkClick}>
              Resources
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link to="/contact" className="text-white text-5xl relative" onClick={handleLinkClick}>
              Contact
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuDrawer;
