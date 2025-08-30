// src/pages/ItinerariesPage.jsx
import { useItineraryStore } from "../store/itineraryStore";
import AddEntryForm from "../components/AddEntryForm";

export default function ItinerariesPage() {
  const { itineraries, deleteItinerary } = useItineraryStore();

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Your Itineraries</h1>

      {/* Add new itinerary */}
      <AddEntryForm />

      {/* List itineraries */}
      {itineraries.length === 0 ? (
        <p className="text-gray-600">No itineraries yet. Start planning your trips!</p>
      ) : (
        <ul className="space-y-4">
          {itineraries.map((itinerary) => (
            <li
              key={itinerary.id}
              className="p-4 bg-white shadow rounded-lg flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{itinerary.title}</h2>
                {itinerary.description && (
                  <p className="text-gray-600">{itinerary.description}</p>
                )}
              </div>
              <button
                onClick={() => deleteItinerary(itinerary.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
