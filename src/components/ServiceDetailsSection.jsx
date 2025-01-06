import React from "react";

const ServiceDetailsSection = ({ mainTitle, subtitle, items }) => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl px-6 text-center">
        {/* Main Heading */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            {mainTitle} <span className="text-yellow-500">.</span>
          </h1>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center lg:px-36 lg:mx-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl max-w-xs"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsSection;
