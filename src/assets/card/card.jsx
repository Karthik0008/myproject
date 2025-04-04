import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const CardSection = () => {
  const cards = [
    {
      title: "Card One",
      description: "This is an example card description.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Card Two",
      description: "Another card with some details.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Card Three",
      description: "A final card with content.",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Card Section</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;