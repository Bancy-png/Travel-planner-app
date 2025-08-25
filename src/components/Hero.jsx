import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/ac4607e0-2173-4bd7-8cda-8cf1e7245373.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-white px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Plan Your Perfect Trip, Stress-Free
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200">
          Discover the best destinations, activities, and accommodations
          tailored just for you.
        </p>

        {/* Search Input */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="px-4 py-2 rounded-md text-black w-2/3 md:w-1/2"
          />
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">
            Plan Your Trip
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
