import React, { useState, useEffect } from "react";
import ServiceDetailsSection from "./ServiceDetailsSection"; // Import your OptimizationSection component

const ServicesSection = () => {
  const [optimizationData, setOptimizationData] = useState(null);
  const [selectedService, setSelectedService] = useState("Brand Consistency"); // Track selected service

  const services = [
    { name: "Brand Consistency" },
    { name: "Social Media" },
    { name: "Software Solutions" },
    { name: "True Marketing" },
    { name: "Graphic Designing" },
    { name: "Paid Advertising" },
    { name: "Business Optimization" },
    { name: "Event Management" },
    { name: "Productions" },
  ];

  const data = {
    BrandConsistency: {
      mainTitle: "Brand Consistency",
      subtitle:
        "We ensure your brand maintains consistency across all platforms to build a stronger and more recognizable identity.",
      items: [
        {
          title: "Brand Strategy",
          description:
            "We help create a cohesive brand strategy that aligns with your business objectives and resonates with your target audience.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
        {
          title: "Logo & Identity",
          description:
            "Our design experts craft logos and brand identities that effectively represent your brand's values and connect with your customers.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
      ],
    },
    SocialMedia: {
      mainTitle: "Social Media",
      subtitle: " We boost your brand's online presence through social media management, marketing,and content creation.",
      items: [
        {
          title: "Management",
          description: " We’ll manage your social media, create content, and use the right strategies and hashtags to keep your audience engaged.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
        {
          title: "Marketing",
          description:
            "We help brands grow with tailored social media strategies, targeted ads, influencer marketing, and insightful analytics.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
      ],
    },
    SoftwareSolutions: {
      mainTitle: "Software Solutions.",
      subtitle: "We create custom websites ,apps , and software solutions to fit your business needs .",
      items: [
        {
          title: "Website and App Development",
          description: "We design and develop custom websites and apps that combine stunning visuals with seamless functionality.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
        {
          title: "Software Development",
          description:
            " We create tailored software solutions to optimize workflows and boost efficiency, perfectly aligned with your business goals.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
      ],
    },
    TrueMarketing: {
      mainTitle: "True Marketing.",
      subtitle: " We drive growth through advertising, email, WhatsApp & SMS, and influencer marketing.",
      items: [
        {
          title: "Offline Marketing",
          description: "From creating campaigns to engaging events, we ensure your brand leaves a lasting impression.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
        {
          title: "SMS Marketing",
          description:
            " We design and deliver SMS campaigns that connect with your audience and achieve impactful results.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
      ],
    },
    GraphicDesigning: {
      mainTitle: "Graphic Designing",
      subtitle:
        "We create stunning website designs, posters, flyers, menus, and logos to elevate your brand.",
      items: [
        {
          title: "Logo Design",
          description:
            "  We create unique and memorable logos that capture your brand's essence and make a lasting impression rearrange.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
        {
          title: "Website Design",
          description:
            "We create custom websites that are visually appealing, easy to navigate, and designed to provide a clean user experience.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
      ],
    },
    PaidAdvertising: {
      mainTitle: "Paid Advertising",
      subtitle:
        "We help your brand with expertly managed Google Ads, Meta Ads, and tailored advertising campaigns.",
      items: [
        {
          title: "Google Ads Management",
          description:
            "We run search, display, and shopping ads on Google to drive targeted traffic and boost conversions.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
        {
          title: "Meta Ads",
          description:
            "We create and manage targeted ads on Facebook and Instagram to increase reach, engagement, and conversions.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
      ],
    },
    BusinessOptimization: {
      mainTitle: "Business Optimization",
      subtitle:
        "We optimize your business processes to ensure growth, efficiency, and profitability.",
      items: [
        {
          title: "Search Engine Optimization (SEO)",
          description:
            "We craft personalized SEO strategies to enhance your online visibility, drive organic traffic, and align perfectly with your business objectives.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
        {
          title: "Google Business Profile",
          description:
            "We create and optimize your Google Business Profile to boost local visibility, attract more customers, and align perfectly with your business growth goals.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
      ],
      
    },
    EventManagement: {
      mainTitle: "Event Management",
      subtitle:
        " We plan and execute events, managing every detail to create memorable experiences and ensure success.",
      items: [
        {
          title: "Event Marketing",
          description:
            "We create and execute event marketing strategies to boost brand awareness and drive engagement.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
        {
          title: "Webinar Management",
          description:
            "We manage webinars from start to finish, handling everything from promotion to hosting, ensuring a smooth and engaging experience.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
      ],
      
    },
    Productions: {
      mainTitle: "Productions",
      subtitle:
        "We deliver customized videography, photography, and shoot services to elevate your brand.",
      items: [
        {
          title: "Photography",
          description:
            "We capture stunning, high-quality photos that tell your brand’s story and leave a lasting impression.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
        {
          title: "Videography",
          description:
            "We create engaging and high-quality videos that showcase your brand and connect with your audience.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__zJOFi3ef7eGRIlVWo2DKdUXKrCq8dBwtQ&s",
        },
      ],
      
    },
  };

  // Set default service data (Brand Consistency) on component mount
  useEffect(() => {
    setOptimizationData(data.BrandConsistency);
  }, []);

  const handleServiceClick = (serviceName) => {
    // Set the selected service and fetch corresponding data
    setSelectedService(serviceName);
    const serviceData = data[serviceName.replace(/\s+/g, '')]; // Clean up the service name for key lookup

    if (serviceData) {
      setOptimizationData(serviceData);
    } else {
      setOptimizationData(null); // Clear optimization data for other services
    }
  };

  return (
    <>
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold mb-4">
            Our{" "}
            <span className="text-yellow-500 underline underline-offset-4 decoration-4">
              Services
            </span>
          </h2>
          {/* Services List */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Left List */}
            <ul className="space-y-4 text-lg text-left">
              {services.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleServiceClick(service.name)}
                    className={`text-black hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 ${selectedService === service.name
                        ? "text-yellow-500 font-bold"
                        : ""
                      }`}
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
            {/* Divider */}
            <div className="h-auto w-px bg-black hidden md:block"></div>
            {/* Right List */}
            <ul className="space-y-4 text-lg text-left">
              {services.slice(5).map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleServiceClick(service.name)}
                    className={`text-black hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 ${selectedService === service.name
                        ? "text-yellow-500 font-bold"
                        : ""
                      }`}
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Render ServiceDetailsSection based on selected service */}
      {optimizationData && <ServiceDetailsSection {...optimizationData} />}
    </>
  );
};

export default ServicesSection;
