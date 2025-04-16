import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MensStyles = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const styles = [
    { name: "Buzz Cut", image: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2025/02/13-classy-mid-fade-buzz-cut.jpg?resize=1440%2C1565&ssl=1" },
    { name: "Fade", image: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2017/08/5-low-taper-fade-with-pompadour.jpg?resize=500%2C525&ssl=1" },
    { name: "Undercut", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwliiN4CeWM-z_fJrwKP5xV8Zu-T648LYpDg&s" }
    // Add more styles as needed
  ];

  // Filter styles based on search term
  const filteredStyles = styles.filter(style =>
    style.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (


    <div className="min-h-screen bg-blue-100 py-20">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search hairstyles..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredStyles.length > 0 ? (
          filteredStyles.map((style, index) => (
            <Link 
              to={`/mens-styles/${style.name.toLowerCase().replace(/ /g, '-')}`} 
              key={index} 
              className="rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={style.image} 
                  alt={style.name} 
                  loading="lazy" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 p-4 text-white bg-gray-800 bg-opacity-75">
                  <h3 className="text-xl font-semibold">{style.name}</h3>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-lg">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default MensStyles;