import React from "react";

const ServiceDetailsSection = ({ mainTitle, subtitle, items }) => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
      {/* Main Content */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          {/* Heading */}
          <h1 className="text-8xl font-extrabold text-black">
            {mainTitle} <span className="text-yellow-500">.</span>
          </h1>
          {/* Underline */}
          <div className="w-24 h-2 bg-yellow-500 mx-auto mt-4 mb-6"></div>
          {/* Subheading */}
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-7 mt-16">
            {/* Conditionally render content and image */}
            {index % 2 === 0 ? (
              <>
                <div className="flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-slate-950 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-slate-950 text-lg mb-5 font-mono">
                    {item.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h2 className="text-5xl font-bold text-slate-950 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-slate-950 text-lg mb-5 font-mono">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg object-cover"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetailsSection;
