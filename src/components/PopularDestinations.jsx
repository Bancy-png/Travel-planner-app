// src/components/PopularDestinations.jsx

const destinations = [
  {
    city: "Nairobi, Kenya - Wildlife, Culture, and Vibrant City life.",
    image: "/Nairobi Kenya.jpeg",
  },
  {
    city: "Paris, France - Art, Romance, and Unforgettable Cuisine.",
    image: "/Paris France.jpeg",
  },
  {
    city: "Kyoto, Japan - Tranquil temples and stunning cherry blossoms.",
    image: "/Kyoto Japan.jpeg",
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Top Picks for Your Next Adventure
        </h2>

        {/* Locked 3-column grid */}
        <div className="grid grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.city}
              className="bg-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col"
            >
              {/* Image maintains aspect ratio */}
              <div className="w-full aspect-[257/254]">
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-semibold mb-4">
                  {dest.city}
                </h3>
                <button className="mt-auto w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
