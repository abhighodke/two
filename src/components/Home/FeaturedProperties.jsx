import React, { useState } from 'react';

const PropertyCard = ({ image, address, price, beds, baths }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden shadow-lg transition-transform duration-300 transform ${isHovered ? 'scale-105' : ''}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        willChange: 'transform, opacity'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isHovered ? 'opacity-50' : 'opacity-30'}`}></div>
      
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <h3 className="text-lg font-semibold text-white">{address}</h3>
        <p className="text-xl font-bold text-white">${price.toLocaleString()}</p>
        <p className="text-white">{beds} Beds | {baths} Baths</p>
      </div>
    </div>
  );
};

const FeaturedProperties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const properties = [
    {
      image: "https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/xrdnruslzintb3ran4de/jed-smith-rd-003",
      address: "2779 Padaro Lane Carpinteria, CA",
      price: 75000000,
      beds: 5,
      baths: 11
    },
    {
      image: "https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/sixnyt9t0tuoj4ownimo/1720274236849887300_park_granada_002",
      address: "1620 Westerly Road Santa Ynez, CA",
      price: 64500000,
      beds: 8,
      baths: 14
    },
    {
      image: "https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/j5f10ztd6t6haljbgpih/5645-medeabrook-pl-agoura-print-001-033-dsc5185-4200x2802-300dpi",
      address: "670 Hot Springs Road Montecito, CA",
      price: 60000000,
      beds: 7,
      baths: 14
    },
    {
      image: "https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/bmz4byscy2omw73wpty0/42",
      address: "1028 El Sur Street Encinitas, CA",
      price: 55000000,
      beds: 6,
      baths: 10
    },
    {
      image: "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/bfb3dqazfqrbrtjinrqn/1",
      address: "2320 Sunset Boulevard Pacific Palisades, CA",
      price: 72000000,
      beds: 9,
      baths: 15
    },
    {
      image: "https://dlajgvw9htjpb.cloudfront.net/cms/86099322-b465-4c54-851d-a3a9c80bb898/SR24123626/4532684142373114732.jpg",
      address: "1880 Skyland Drive Lake Tahoe, CA",
      price: 80000000,
      beds: 10,
      baths: 16
    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex === 0 ? properties.length - 1 : prevIndex - 1)
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex === properties.length - 1 ? 0 : prevIndex + 1)
    );
  };

  // Create an array that simulates the circular effect
  const visibleProperties = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % properties.length;
    visibleProperties.push(properties[index]);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-10 mb-10 text-center lg:text-right">Featured Properties</h2>
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-hidden">
          {visibleProperties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="m-2 px-4 py-2 bg-transparent text-black border border-black hover:bg-black hover:text-white transition duration-300"
            onClick={handlePrevClick}
          >
            Prev
          </button>
          <button
            className="m-2 px-4 py-2 bg-transparent text-black border border-black hover:bg-black hover:text-white transition duration-300"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
