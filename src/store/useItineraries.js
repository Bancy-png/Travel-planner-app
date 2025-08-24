// src/store/useItineraries.js (simple)
import { useState, useEffect } from 'react';
const STORAGE_KEY = 'travel_planner_itineraries';

export function useItineraries() {
  const [itineraries, setItineraries] = useState([]);
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setItineraries(JSON.parse(raw));
  }, []);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(itineraries));
  }, [itineraries]);

  const add = (it) => setItineraries(prev => [...prev, it]);
  const update = (id, patch) => setItineraries(prev => prev.map(i => i.id === id ? {...i, ...patch} : i));
  const remove = (id) => setItineraries(prev => prev.filter(i => i.id !== id));

  return { itineraries, add, update, remove };
}
