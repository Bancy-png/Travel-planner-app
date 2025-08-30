// src/pages/Itineraries.jsx
import { useState } from "react";

export default function Itineraries() {
  const [itineraries] = useState([
    {
      id: 1,
      title: "Nairobi National Park Day Trip",
      description: "A short safari just outside Nairobi. Perfect for a day getaway.",
      duration: "1 Day",
      price: "KES 5,000",
    },
    {
      id: 2,
      title: "Maasai Mara 3-Day Safari",
      description: "Experience the Big Five and Maasai culture in the world-famous reserve.",
      duration: "3 Days, 2 Nights",
      price: "KES 35,000",
    },
  ]);

  return (
    <div className="px-6 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Travel Itineraries
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itineraries.map((trip) => (
          <div
            key={trip.id}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {trip.title}
            </h2>
            <p className="text-gray-600 mb-4">{trip.description}</p>

            <div className="flex justify-between text-sm text-gray-700 mb-4">
              <span>⏳ {trip.duration}</span>
              <span>💰 {trip.price}</span>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
