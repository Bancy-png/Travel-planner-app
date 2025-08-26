// src/components/DestinationCard.jsx
export default function DestinationCard({ city, country, description, onViewDetails }) {
  return (
    <div className="bg-white shadow rounded-xl p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold">{city}</h3>
        <p className="text-gray-500 text-sm">{country}</p>
        <p className="mt-2 text-gray-700 text-sm">{description}</p>
      </div>
      <button
        onClick={onViewDetails}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        View Details
      </button>
    </div>
  );
}
