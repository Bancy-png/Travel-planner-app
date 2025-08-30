// src/components/AddEntryForm.jsx
import { useState } from "react";
import { useItineraryStore } from "../store/itineraryStore";

export default function AddEntryForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addItinerary = useItineraryStore((state) => state.addItinerary);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addItinerary({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow-md space-y-3"
    >
      <h2 className="text-lg font-bold">Add New Itinerary</h2>

      <input
        type="text"
        placeholder="Itinerary title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}
