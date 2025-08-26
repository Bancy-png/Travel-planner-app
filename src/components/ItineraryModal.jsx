import { useState } from "react";

export default function ItineraryModal({ isOpen, onClose, itineraries, onSave }) {
  const [selectedItinerary, setSelectedItinerary] = useState("");
  const [newItineraryName, setNewItineraryName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    const itineraryId = selectedItinerary || newItineraryName;
    if (!itineraryId) return alert("Please select or create an itinerary.");

    const entry = {
      id: Date.now(),
      itineraryId,
      date,
      time,
      notes,
    };

    onSave(entry);
    // reset
    setSelectedItinerary("");
    setNewItineraryName("");
    setDate("");
    setTime("");
    setNotes("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Add to Itinerary</h2>

        {/* Select existing itinerary */}
        <label className="block mb-2 text-sm font-medium">Choose itinerary</label>
        <select
          className="w-full border rounded-lg p-2 mb-3"
          value={selectedItinerary}
          onChange={(e) => setSelectedItinerary(e.target.value)}
        >
          <option value="">-- Select itinerary --</option>
          {itineraries.map((it) => (
            <option key={it.id} value={it.id}>
              {it.name}
            </option>
          ))}
        </select>

        {/* Or create new */}
        <label className="block mb-2 text-sm font-medium">Or create new itinerary</label>
        <input
          type="text"
          placeholder="New itinerary name"
          value={newItineraryName}
          onChange={(e) => setNewItineraryName(e.target.value)}
          className="w-full border rounded-lg p-2 mb-3"
        />

        {/* Date and time */}
        <label className="block mb-2 text-sm font-medium">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border rounded-lg p-2 mb-3"
        />

        <label className="block mb-2 text-sm font-medium">Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full border rounded-lg p-2 mb-3"
        />

        {/* Notes */}
        <label className="block mb-2 text-sm font-medium">Notes</label>
        <textarea
          placeholder="Add notes..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full border rounded-lg p-2 mb-4"
        />

        {/* Actions */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
