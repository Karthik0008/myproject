import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, image, link }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      <Link to={link}>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </Link>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "men's Hair Styling",
      description: "click hear to explore mens hair styles collections.",
      image: "https://www.menshairstylestoday.com/wp-content/uploads/2024/06/Mid-Taper-Fade-Haircuts-480x480.jpg.webp",
      link: "/mens-styles", // Add route for this service
    },
    {
      title: "women's Hair styling",
      description: "click hear to explore womens hair styles collections.",
      image: "https://www.shefinds.com/files/2021/03/shutterstock_1653744169.jpg",
      link: "/womens-styles", // Add route for this service
    },
    {
      title: "kids Hair styling",
      description: "click hear to explore kids hair styles collections.",
      image: "https://cdn2.momjunction.com/wp-content/uploads/2015/08/Short-Hairstyles-For-Kids.jpg.avif",
      link: "/treatment", // Add route for this service
    },
  ];

  return (
    <div className="container mx-auto py-20 h-full">
      {/* Services Section */}
      

      {/* Services Grid */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

