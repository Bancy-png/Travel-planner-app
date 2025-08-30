import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Hero = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section
      className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/Airplane window.jpeg')" }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Smooth Fade-out at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-white px-6">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Plan Your Perfect Trip, Stress-Free
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Discover the best destinations, activities, and accommodations tailored just for you.
        </p>

        {/* Search Bar */}
        <div className="flex items-center justify-between w-full max-w-xl mx-auto bg-white rounded-full shadow-lg overflow-hidden mb-8">
          <input
            type="text"
            placeholder="Where do you want to go?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-grow px-4 py-3 text-gray-700 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-semibold transition"
          >
            Plan Your Trip
          </button>
        </div>

        {/* CTA Button */}
        <div>
          <Link
            to="/itineraries"
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full shadow-md transition"
          >
            My Itineraries
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
