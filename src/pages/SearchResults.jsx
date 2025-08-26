// src/pages/SearchResults.jsx
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";

// Mock function for now — replace with Amadeus API call later
async function searchCities(query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!query) {
        resolve([]);
      } else if (query.toLowerCase() === "error") {
        reject(new Error("Failed to fetch destinations."));
      } else {
        resolve([
          {
            id: "1",
            city: "Nairobi",
            country: "Kenya",
            description: "The vibrant capital city with wildlife at Nairobi National Park.",
          },
          {
            id: "2",
            city: "Paris",
            country: "France",
            description: "The city of lights, love, and the iconic Eiffel Tower.",
          },
        ]);
      }
    }, 1200);
  });
}

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const navigate = useNavigate();

  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    searchCities(query)
      .then((results) => {
        setDestinations(results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [query]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg animate-pulse">Searching for “{query}”...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-64">
        <p className="text-red-600 font-semibold">⚠️ {error}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (destinations.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-64">
        <p className="text-gray-600">No results found for “{query}”.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">
        Search Results for “{query}”
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            city={dest.city}
            country={dest.country}
            description={dest.description}
            onViewDetails={() => navigate(`/destination/${dest.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
