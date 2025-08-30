import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import DestinationDetails from "./pages/DestinationDetails";
import ItinerariesPage from "./pages/ItinerariesPage";
import PopularDestinations from "./components/PopularDestinations";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/destination/:city" element={<DestinationDetails />} />
          <Route path="/itineraries" element={<ItinerariesPage />} />
        </Routes>
      </div>
    </Router>
  );
}
