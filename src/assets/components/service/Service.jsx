import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Haircuts & Styling",
      description: "Precision haircuts and professional styling tailored to your look.",
      image: "https://www.altamodasturbridge.com/wp-content/uploads/2017/09/Hair-Cut_01.jpg",
    },
    {
      title: "Hair Coloring",
      description: "Expert hair coloring, highlights, and balayage techniques for a vibrant style.",
      image: "https://www.hairfinder.com/hairstyles12/zeitgeist-hair.jpg",
    },
    {
      title: "Hair Treatments",
      description: "Deep conditioning, keratin treatments, and scalp care for healthy hair.",
      image: "https://www.shutterstock.com/image-photo/handsome-caucasian-man-getting-relaxing-260nw-2263936295.jpg",
    },
    {
      title: "Bridal & Event Styling",
      description: "Specialized bridal and event hair styling for your big day.",
      image: "https://cbmagicspa.com/wp-content/uploads/2023/07/Men-Facial-4.png",
    }
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Services Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="text-lg text-gray-600">Discover the best hair care solutions for a stunning look.</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;