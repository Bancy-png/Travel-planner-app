// src/pages/DestinationDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DestinationDetails() {
  const { id } = useParams(); // destination id from route
  const [cityInfo, setCityInfo] = useState(null);
  const [attractions, setAttractions] = useState([]);
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Mock data for flights + hotels
  const mockFlights = [
    { id: 1, airline: "Kenya Airways", price: "$420", from: "Nairobi", to: id },
    { id: 2, airline: "Qatar Airways", price: "$550", from: "Nairobi", to: id },
  ];

  const mockHotels = [
    { id: 1, name: "Grand Hotel", price: "$120/night", rating: 4.5 },
    { id: 2, name: "City Inn", price: "$80/night", rating: 4.0 },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        // ✅ Fetch city info (Teleport API)
        const cityRes = await fetch(
          `https://api.teleport.org/api/urban_areas/slug:${id.toLowerCase()}/scores/`
        );
        const cityData = await cityRes.json();
        setCityInfo(cityData);

        // ✅ Fetch attractions (OpenTripMap - mock with free API key if needed)
        const attractionRes = await fetch(
          `https://api.opentripmap.com/0.1/en/places/geoname?name=${id}&apikey=YOUR_OPENTRIPMAP_KEY`
        );
        const attractionData = await attractionRes.json();
        setAttractions(
          attractionData?.features?.slice(0, 5).map((a) => ({
            id: a.properties.xid,
            name: a.properties.name,
          })) || []
        );

        // ✅ Set mock flights + hotels
        setFlights(mockFlights);
        setHotels(mockHotels);
      } catch (err) {
        console.error("Error fetching destination details:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) return <p className="p-4">Loading destination details...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* City Summary */}
      <section>
        <h1 className="text-3xl font-bold mb-2">{id}</h1>
        {cityInfo ? (
          <p>{cityInfo.summary.replace(/<[^>]+>/g, "")}</p>
        ) : (
          <p>No city info available.</p>
        )}
      </section>

      {/* Attractions */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Top Attractions</h2>
        {attractions.length > 0 ? (
          <ul className="space-y-2">
            {attractions.map((a) => (
              <li
                key={a.id}
                className="p-3 border rounded-lg flex justify-between items-center"
              >
                <span>{a.name}</span>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">
                  Add to Planner
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No attractions found.</p>
        )}
      </section>

      {/* Flights */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Flights</h2>
        {flights.length > 0 ? (
          <ul className="space-y-2">
            {flights.map((f) => (
              <li
                key={f.id}
                className="p-3 border rounded-lg flex justify-between items-center"
              >
                <span>
                  {f.airline} — {f.from} → {f.to} ({f.price})
                </span>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">
                  Add to Planner
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No flights available.</p>
        )}
      </section>

      {/* Hotels */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Hotels</h2>
        {hotels.length > 0 ? (
          <ul className="space-y-2">
            {hotels.map((h) => (
              <li
                key={h.id}
                className="p-3 border rounded-lg flex justify-between items-center"
              >
                <span>
                  {h.name} — {h.price} ⭐ {h.rating}
                </span>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">
                  Add to Planner
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hotels available.</p>
        )}
      </section>
    </div>
  );
}
