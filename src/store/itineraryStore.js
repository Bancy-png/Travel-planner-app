import { create } from "zustand";

export const useItineraryStore = create((set) => ({
  itineraries: [
    {
      id: 1,
      title: "Kenya Safari",
      destination: "Maasai Mara",
      dates: "Sept 10 - Sept 15",
    },
    {
      id: 2,
      title: "Beach Holiday",
      destination: "Diani",
      dates: "Oct 1 - Oct 5",
    },
  ],
  addItinerary: (newItinerary) =>
    set((state) => ({
      itineraries: [...state.itineraries, { id: Date.now(), ...newItinerary }],
    })),
  deleteItinerary: (id) =>
    set((state) => ({
      itineraries: state.itineraries.filter((it) => it.id !== id),
    })),
}));
