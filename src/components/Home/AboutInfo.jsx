import React from 'react';
import { Link } from 'react-router-dom';
import clientData from '../../clientData'; // Import clientData

const AboutInfo = () => {
  return (
    <div className="bg-white mt-12 py-16 px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between">
      <div className="lg:w-1/2 w-60 mb-8 lg:mb-0 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-10">
          {clientData.heroTagline}
        </h2>
        <h3 className="text-xl lg:text-1xl text-gray-600 mt-4">
          Trusted Real Estate Advisor
        </h3>
        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          {clientData.aboutMeShort}
        </p>
        <Link to="/about" className="text-white hover:text-gray-300 relative group">
          <button className="mt-16 px-6 py-2 bg-transparent text-black border border-black hover:bg-black hover:text-white transition duration-300">
            Learn More
          </button>
        </Link>
      </div>

      <div className="lg:w-1/2 w-full mt-6">
        <img src={clientData.dp} alt="About" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default AboutInfo;