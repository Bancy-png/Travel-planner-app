// src/pages/Itineraries.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Itineraries() {
  const [itineraries, setItineraries] = useState([
    { id: 1, name: "Paris Trip", days: 5 },
    { id: 2, name: "Tokyo Adventure", days: 7 },
    { id: 3, name: "Nairobi Culture", days: 3 },
    { id: 4, name: "New York Getaway", days: 3 },
  ]);

  const handleDelete = (id) => {
    setItineraries(itineraries.filter((itinerary) => itinerary.id !== id));
  };

  const handleEdit = (id) => {
    const newName = prompt("Enter new itinerary name:");
    if (newName) {
      setItineraries(
        itineraries.map((itinerary) =>
          itinerary.id === id ? { ...itinerary, name: newName } : itinerary
        )
      );
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Itineraries</h1>
      {itineraries.length === 0 ? (
        <p>No itineraries saved yet.</p>
      ) : (
        <ul className="space-y-4">
          {itineraries.map((itinerary) => (
            <li
              key={itinerary.id}
              className="flex justify-between items-center p-4 bg-white rounded-xl shadow-md"
            >
              <div>
                <h2 className="text-lg font-semibold">{itinerary.name}</h2>
                <p className="text-gray-500">{itinerary.days} days</p>
              </div>
              <div className="flex gap-3">
                <Link
                  to={`/itinerary/${itinerary.id}`}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  View
                </Link>
                <button
                  onClick={() => handleEdit(itinerary.id)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(itinerary.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
