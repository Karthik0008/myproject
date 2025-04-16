import React, { useState } from 'react';

const hairTreatments = [
  {
    id: 1,
    name: "Keratin Treatment",
    description: "Smooths and straightens hair, reducing frizz.",
    image: "https://ashtamudi.org/wp-content/uploads/2023/05/InShot_20220720_120958836-1024x1024.jpg",
  },
  {
    id: 2,
    name: "Scalp Treatment",
    description: "Detoxes and nourishes the scalp for healthy hair growth.",
    image: "https://i.ytimg.com/vi/p8xfGTehQZI/maxresdefault.jpg",
  },
  {
    id: 3,
    name: "Hot Oil Treatment",
    description: "Hydrates and smoothens dry, brittle hair.",
    image: "https://api.daburinternational.com/wp-content/uploads/2024/11/Vatika-Naturals-Onion-Hammam-Zaith-3.jpg",
  },
  {
    id: 4,
    name: "Deep Conditioning Treatment",
    description: "Intensely moisturizes and improves hair texture.",
    image: "https://img.buzzfeed.com/buzzfeed-static/static/2019-03/8/16/asset/buzzfeed-prod-web-03/sub-buzz-30009-1552081366-1.jpg?downsize=900:*&output-format=auto&output-quality=auto",
  },
  {
    id: 5,
    name: "Hair Botox",
    description: "Repairs damaged hair, enhancing shine and reducing frizz.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRos4JPPyuuTjjkZ3pG-8sCpk7mHeAmZ7ARJg&s",
  },
];

const Treatment = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const filteredTreatments = hairTreatments.filter(treatment =>
    treatment.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Full-screen overlay */}
      {selectedTreatment && (
        <div
          className="fixed inset-0 z-50 bg-black/90 p-4 flex items-center justify-center"
          onClick={() => setSelectedTreatment(null)}
        >
          <div className="max-w-full max-h-full">
            <img
              src={selectedTreatment.image}
              alt={selectedTreatment.name}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-2xl font-bold">{selectedTreatment.name}</h3>
              <p className="mt-2 max-w-prose mx-auto">
                {selectedTreatment.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Hair Treatment Gallery
        </h2>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="🔍 Search treatments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/3 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 border border-gray-200"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="transform hover:scale-105 transition-transform duration-300 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedTreatment(treatment)}
            >
              <div className="relative">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">
                    {treatment.name}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600">{treatment.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredTreatments.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No treatments found for "{searchQuery}"
            <button
              onClick={() => setSearchQuery('')}
              className="block mt-2 text-pink-500 hover:underline"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Treatment;
