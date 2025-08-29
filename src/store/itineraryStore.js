import { create } from "zustand";

export const useItineraryStore = create((set) => ({
  itineraries: [],

  addItinerary: (title) =>
    set((state) => ({
      itineraries: [
        ...state.itineraries,
        { id: Date.now(), title, entries: [] },
      ],
    })),

  addEntry: (itineraryId, entry) =>
    set((state) => ({
      itineraries: state.itineraries.map((itinerary) =>
        itinerary.id === itineraryId
          ? {
              ...itinerary,
              entries: [
                ...itinerary.entries,
                { id: Date.now(), ...entry },
              ],
            }
          : itinerary
      ),
    })),

  deleteEntry: (itineraryId, entryId) =>
    set((state) => ({
      itineraries: state.itineraries.map((itinerary) =>
        itinerary.id === itineraryId
          ? {
              ...itinerary,
              entries: itinerary.entries.filter(
                (entry) => entry.id !== entryId
              ),
            }
          : itinerary
      ),
    })),

  deleteItinerary: (itineraryId) =>
    set((state) => ({
      itineraries: state.itineraries.filter(
        (itinerary) => itinerary.id !== itineraryId
      ),
    })),
}));
