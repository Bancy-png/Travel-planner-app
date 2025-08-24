// src/App.jsx
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-semibold">Welcome to Travel Planner ✈️</h2>
        <p className="mt-2 text-gray-700">
          Start planning your dream trip by searching above!
        </p>
      </div>
    </div>
  );
}
