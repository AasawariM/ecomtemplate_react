import "./App.css";
import ColorSelector from "./components/filters/ColorSelector";
import FilterSection from "./components/filters/FilterSection";
import FilterSidebar from "./components/filters/FilterSidebar";
import PriceRange from "./components/filters/PriceRange";
import SizeSelector from "./components/filters/SizeSelector";
import Navbar from "./components/Navbar";
// import new_arrival from "./assets/new_arrival_img.DaCcndrq.svg";
function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      {/* new arrivals section */}
      <div className="flex flex-col lg:flex-row">
        {/* filter sidebar */}
        <div className="hidden lg:block">
          <div className="w-full px-4 lg:px-10">
            {/* Sections */}
            <FilterSidebar />
          </div>
        </div>
        {/* new arrival products */}
        <div className="flex-1 min-w-0">
          <h1>New Arrival</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
