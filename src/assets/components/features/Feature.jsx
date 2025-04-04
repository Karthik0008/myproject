import React from "react";
import img from "../../../assets/img2.jpg";

const Features = () => {
  return (
    <section className="py-16 bg-gray-100">
        
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Amazing Features</h2>
        <p className="mt-4 text-gray-600">
          Discover the incredible features that make our service stand out.
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">Fast & Secure</h3>
          <p className="mt-2 text-gray-600">
            Enjoy blazing-fast performance with top-notch security.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">Responsive Design</h3>
          <p className="mt-2 text-gray-600">
            Optimized for all devices to ensure seamless experiences.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">Easy Integration</h3>
          <p className="mt-2 text-gray-600">
            Effortlessly integrate with your existing tools and platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;