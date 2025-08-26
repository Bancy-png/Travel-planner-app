// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${search}`);
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Travel Planner</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="hover:text-yellow-300">Home</a>
          <a href="#" className="hover:text-yellow-300">Destinations</a>
          <a href="#" className="hover:text-yellow-300">About</a>
          <a href="#" className="hover:text-yellow-300">Contact</a>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="text"
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none text-black"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black px-4 py-2 rounded-r-md hover:bg-yellow-300"
            >
              Search
            </button>
          </form>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a href="#" className="block hover:text-yellow-300">Home</a>
          <a href="#" className="block hover:text-yellow-300">Destinations</a>
          <a href="#" className="block hover:text-yellow-300">About</a>
          <a href="#" className="block hover:text-yellow-300">Contact</a>

          {/* Search Bar Mobile */}
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="text"
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none text-black w-full"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black px-4 py-2 rounded-r-md hover:bg-yellow-300"
            >
              Go
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}
