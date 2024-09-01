import React, { useEffect } from 'react';
import topImage from '../../assets/mathias-reding-cmyDyDa6Wfk-unsplash.jpg'
import clientData from '../../clientData'; // Import the client data

const AboutMe = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full">
      {/* Top Image Section */}
      <header className="relative h-64 mb-12">
        <img src= {topImage} alt="Blog Header" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl">About</h1>
            <p className="text-lg mt-4">Know More About Me</p>
          </div>
        </div>
      </header>

      {/* Two-Part Layout Below */}
      <div className="flex flex-col md:flex-row w-full mb-20">
        <div className="md:w-1/2 h-1/2 md:h-auto p-12">
          <img src={clientData.dp} alt="About Us" className="object-cover w-full h-full" />
        </div>
        <div className="md:w-1/2 h-auto bg-white flex flex-col justify-center p-8 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{clientData.agentName}</h2>
          <p className="text-gray-600">
            {clientData.aboutMeDetailed}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;