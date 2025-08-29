import { useState } from "react";
import { useItineraryStore } from "../store/itineraryStore";

export default function AddEntryForm({ itineraryId }) {
  const [day, setDay] = useState("");
  const [description, setDescription] = useState("");
  const addEntry = useItineraryStore((state) => state.addEntry);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!day || !description) return;
    addEntry(itineraryId, { day, description });
    setDay("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        placeholder="Day"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
}
