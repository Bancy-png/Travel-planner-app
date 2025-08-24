// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${search}`);
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold">Travel Planner</h1>

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
    </nav>
  );
}
