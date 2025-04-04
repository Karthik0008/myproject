import React from "react";
import { Link } from "react-router-dom";
// import ban from "./assets/img.jpg";



const Card = ({ title, description, image }) => {
  return (
    <div className="bg-green rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HeroWithCards = () => {
  const cards = [
    {
      title: "Mens Haircuts",
      description: "top best hair styles for mens",
      image: "https://www.menshairstylestoday.com/wp-content/uploads/2019/02/Best-Haircuts-For-Men.jpg.webp",
    },
    {
      title: "Womens Haircuts",
      description: "top best hair styles for womens",
      image: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2025/04/17-shaggy-bob-haircut.jpg?resize=878%2C974&ssl=1",
    },
    {
      title: "skin care",
      description: "top best skin care products",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2UlMjBzY3J1YnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
     <Link to="/features"> <div className="bg-blue-600 text-white text-center p-16 rounded-lg mb-8">
      {/* <img
          src={ban}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        /> */}

        <h1 className="text-4xl font-bold mb-4">Welcome to NewTrend!</h1>
        <p className="text-lg">This Page Helps You to Changr your Style</p>
      </div></Link>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default HeroWithCards;