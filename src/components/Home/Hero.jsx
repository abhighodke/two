import React from 'react';
import { Link } from 'react-router-dom';
import videoBg from '../../assets/7578540-uhd_3840_2160_30fps.mp4'; // Add your video file to the assets folder
import clientData from '../../clientData'; // Import clientData

const Hero = () => {
  return (
    <div className="relative h-screen hero">
      <video src={videoBg} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center bg-black bg-opacity-50">
        <p className="mb-4 text-sm lg:text-1xl">
          {clientData.subTitle} {/* Subtitle from clientData */}
        </p>
        {/* Hero Tagline */}
        <h1 className="text-4xl lg:text-6xl">
          {clientData.heroTagline} {/* Hero Tagline from clientData */}
        </h1>
        <Link to="/contact" className="text-white hover:text-gray-300 relative group">
          <button className="mt-8 px-6 py-2 bg-transparent text-white border border-white hover:bg-white hover:text-black transition duration-300">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
