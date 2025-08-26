import { useState } from "react";
import ItineraryModal from "../components/ItineraryModal";

export default function Destinations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itineraries, setItineraries] = useState([
    { id: "1", name: "Summer in Paris" },
    { id: "2", name: "Kenya Safari" },
  ]);

  const handleSaveEntry = (entry) => {
    console.log("New itinerary entry:", entry);
    // Later → save into global state / database
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Destinations</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Add to Planner
      </button>

      <ItineraryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        itineraries={itineraries}
        onSave={handleSaveEntry}
      />
    </div>
  );
}
