import React from 'react';
import lakeAustin from '../../assets/Lake.jpg';
import travisHeights from '../../assets/Travis.jpg';
import downtownAustin from '../../assets/downtown.jpg';
import all from '../../assets/Explore_Nei.jpg';

const NeighborhoodCard = ({ name, image, isViewAll, url }) => (
  <div
    className="relative h-64 w-full md:h-full overflow-hidden bg-cover bg-center transition-opacity duration-300 hover:opacity-80 z-10 hover:z-20"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="text-center relative z-10">
        <h3 className="text-white text-2xl font-bold mb-4">{name}</h3>
        <a
          href={isViewAll ? 'https://www.google.com' : url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 relative group"
        >
          <button className="mt-8 px-6 py-2 bg-transparent text-white border border-white hover:bg-white hover:text-black transition duration-300">
            {isViewAll ? 'View All' : 'Learn More'}
          </button>
        </a>
      </div>
    </div>
  </div>
);

const Neighborhoods = () => {
  const neighborhoods = [
    { name: "LAKE AUSTIN", image: lakeAustin, url: 'https://en.wikipedia.org/wiki/Lake_Austin' },
    { name: "TRAVIS HEIGHTS", image: travisHeights, url: 'https://en.wikipedia.org/wiki/Travis_Heights,_Austin,_Texas' },
    { name: "DOWNTOWN AUSTIN", image: downtownAustin, url: 'https://en.wikipedia.org/wiki/Downtown_Austin' },
    { name: "FEATURED COMMUNITIES", image: all, isViewAll: true },
  ];

  return (
    <div className="relative w-full h-auto md:h-screen grid grid-cols-1 md:grid-cols-2 gap-0">
      {neighborhoods.map((neighborhood, index) => (
        <NeighborhoodCard key={index} {...neighborhood} />
      ))}
    </div>
  );
};

export default Neighborhoods;
