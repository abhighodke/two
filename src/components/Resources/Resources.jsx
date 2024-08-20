import React, { useState, useEffect, memo } from 'react';
import blogImage from '../../assets/blog_bg.jpg'; // Replace with the correct path to your image
import cardImage1 from '../../assets/blogOne.jpg'; // Replace with the correct path to your card images
import cardImage2 from '../../assets/blogTwo.jpg';
import cardImage3 from '../../assets/blogThree.jpg';

const ResourceCard = memo(({ image, header, date, onReadMore }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col h-1.5/2">
    <img src={image} alt="Blog" className="w-full h-72 object-cover rounded-lg mb-4" loading="lazy" />
    <div className="flex-grow">
      <h3 className="text-lg font-semibold mb-2">{header}</h3>
      <p className="text-gray-600 mb-4">{date}</p>
      <button 
        onClick={onReadMore}
        className="text-black border-b-2 border-transparent hover:border-black transition-colors duration-300"
      >
        Read More
      </button>
    </div>
  </div>
));

const Resources = () => {
  const blogPosts = [
    { 
      image: cardImage1, 
      header: "Understanding Market Trends", 
      date: "August 15, 2024", 
      description: "In the ever-evolving landscape of real estate, understanding market trends is crucial for making informed investment decisions. Market trends provide valuable insights into buyer behavior, property demand, and pricing strategies, helping investors navigate the complexities of the market. For instance, the rise of remote work has fueled demand for properties in suburban and rural areas, as more people seek larger spaces and a better quality of life away from urban centers. Conversely, urban markets are seeing a shift towards luxury apartments and condos, driven by young professionals and downsizing retirees. Understanding these dynamics allows investors to identify emerging opportunities and tailor their strategies accordingly. Additionally, market trends highlight the importance of timing in real estate transactions. Knowing when to buy or sell a property can significantly impact the return on investment. In a seller's market, where demand outpaces supply, prices tend to rise, providing an ideal environment for sellers. On the other hand, a buyer's market, characterized by higher inventory levels, offers more negotiating power to buyers. By staying attuned to these trends, investors can maximize their profits and minimize risks. Furthermore, market trends are influenced by economic factors such as interest rates, inflation, and employment levels. For example, low-interest rates often lead to increased borrowing, driving up property prices. Conversely, economic downturns can suppress demand and lower property values. Understanding the interplay of these factors is essential for making sound investment decisions. In summary, staying informed about market trends is key to successful real estate investing. By analyzing buyer behavior, economic indicators, and market dynamics, investors can position themselves to capitalize on emerging opportunities and achieve long-term financial success." // Use 500 words description
    },
    { 
      image: cardImage2, 
      header: "Top Neighborhoods for Investment", 
      date: "July 22, 2024", 
      description: "Investing in real estate is a strategic move that requires careful consideration of various factors, and one of the most important is location. Identifying top neighborhoods for investment can significantly influence the success of your real estate ventures. These neighborhoods often possess key characteristics such as strong economic growth, low crime rates, good schools, and access to amenities like shopping centers, parks, and public transportation. In many cases, they are up-and-coming areas that are undergoing revitalization or have potential for future development. For instance, a neighborhood with new infrastructure projects, such as improved roads or public transit expansions, often sees a surge in property values. Similarly, areas with a growing job market attract professionals and families, increasing demand for housing. When choosing a neighborhood for investment, it's also essential to consider the local real estate market's supply and demand dynamics. In high-demand areas with limited housing supply, property values tend to appreciate rapidly, offering investors substantial returns. Additionally, neighborhoods with a mix of residential and commercial properties can provide diverse investment opportunities, from single-family homes to multifamily units and commercial spaces. Understanding the local market's nuances can help investors make informed decisions and maximize their returns. Another critical factor is the neighborhood's demographic profile. Areas with a young, educated population often experience increased demand for rental properties, making them ideal for investors looking to generate steady rental income. These neighborhoods typically offer vibrant social scenes, cultural attractions, and a high quality of life, making them attractive to tenants. In summary, selecting the right neighborhood is crucial for real estate investment success. By focusing on areas with strong economic fundamentals, growth potential, and attractive amenities, investors can secure properties that appreciate over time and generate consistent income." 
    },
    { 
      image: cardImage3, 
      header: "How to Choose the Right Property", 
      date: "June 10, 2024", 
      description: "Choosing the right property is a critical step in any real estate investment journey. Whether you're a first-time buyer or an experienced investor, selecting the right property can make or break your investment. The process begins with understanding your financial goals and risk tolerance. Are you looking for a property to generate rental income, or are you aiming for long-term capital appreciation? Your investment strategy will guide your property selection, helping you identify whether a residential, commercial, or mixed-use property aligns with your objectives. Location is another vital factor when choosing the right property. The old adage location, location, location holds true in real estate, as the property's location often determines its value, demand, and potential for appreciation. Proximity to amenities like schools, hospitals, shopping centers, and public transportation can enhance a property's attractiveness to potential buyers or tenants. Additionally, consider the neighborhood's future development plans, as new infrastructure or commercial projects can significantly boost property values over time. The property's condition and potential for value-added improvements are also important considerations. A property in need of renovation might offer a lower purchase price, but the costs of repairs and upgrades should be factored into your investment analysis. Properties with unique features or historic charm may attract higher demand, but they might also come with higher maintenance costs. Assessing the property's long-term potential and understanding the local market trends can help you make an informed decision. Finally, conducting a thorough due diligence process is essential. This includes inspecting the property for any structural or legal issues, reviewing property records, and understanding zoning regulations. Working with experienced real estate professionals, such as agents, inspectors, and attorneys, can provide valuable insights and ensure that you choose the right property for your investment goals." 
    },
    // Add more blog posts with descriptions
  ];



  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const openDrawer = (post) => {
    setSelectedPost(post);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setSelectedPost(null);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(blogPosts.length / postsPerPage)));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Part */}
      <header className="relative h-96 mb-12">
        <img src={blogImage} alt="Blog Header" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Blog</h1>
            <p className="text-lg mt-4">Latest insights into real estate market</p>
          </div>
        </div>
      </header>

      {/* Bottom Part */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <ResourceCard 
              key={index} 
              {...post} 
              onReadMore={() => openDrawer(post)} 
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 mb-24 space-x-2">
          <button 
            onClick={prevPage} 
            disabled={currentPage === 1} 
            className="px-3 py-1 rounded-full bg-gray-200 text-black hover:bg-black hover:text-white transition-colors duration-300 disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: Math.ceil(blogPosts.length / postsPerPage) }, (_, index) => (
            <button 
              key={index} 
              onClick={() => paginate(index + 1)} 
              className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-gray-200 text-black'} hover:bg-black hover:text-white transition-colors duration-300`}
            >
              {index + 1}
            </button>
          ))}
          <button 
            onClick={nextPage} 
            disabled={currentPage === Math.ceil(blogPosts.length / postsPerPage)} 
            className="px-3 py-1 rounded-full bg-gray-200 text-black hover:bg-black hover:text-white transition-colors duration-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>

      {/* Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-end">
          <div className="bg-white w-full max-w-4xl h-full overflow-y-auto p-8">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold mb-4">{selectedPost.header}</h2>
              <button 
                onClick={closeDrawer} 
                className="text-gray-500 font-bold"
              >
                Close
              </button>
            </div>
            <img 
              src={selectedPost.image} 
              alt="Blog Detail" 
              className="w-full h-64 object-cover rounded mb-8" 
              loading="lazy" 
            />
            <p className="text-lg leading-relaxed mb-4">{selectedPost.description}</p>
            <p className="text-sm text-gray-600">Author: John Doe</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;
