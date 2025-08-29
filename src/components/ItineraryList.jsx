// src/components/ItineraryList.jsx
import { useItineraryStore } from "../store/itineraryStore";
import AddEntryForm from "./AddEntryForm";

export default function ItineraryList() {
  const itineraries = useItineraryStore((state) => state.itineraries);
  const deleteEntry = useItineraryStore((state) => state.deleteEntry);

  if (itineraries.length === 0) {
    return <p className="text-gray-600">No itineraries yet. Add one to get started!</p>;
  }

  return (
    <div className="space-y-6">
      {itineraries.map((itinerary) => (
        <div
          key={itinerary.id}
          className="border rounded-lg shadow p-4 bg-white"
        >
          <h2 className="text-xl font-semibold mb-2">{itinerary.name}</h2>

          {/* Entries */}
          {itinerary.entries.length > 0 ? (
            <ul className="list-disc list-inside mb-4">
              {itinerary.entries.map((entry, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <span>
                    <strong>{entry.date}:</strong> {entry.activity}
                  </span>
                  <button
                    onClick={() => deleteEntry(itinerary.id, idx)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 mb-4">No entries yet.</p>
          )}

          {/* Add new entry form */}
          <AddEntryForm itineraryId={itinerary.id} />
        </div>
      ))}
    </div>
  );
}
