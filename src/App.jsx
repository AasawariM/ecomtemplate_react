import "./App.css";
import ColorSelector from "./components/filters/ColorSelector";
import FilterSection from "./components/filters/FilterSection";
import FilterSidebar from "./components/filters/FilterSidebar";
import MobileFilterDrawer from "./components/filters/MobileFilterDrawer";
import PriceRange from "./components/filters/PriceRange";
import SizeSelector from "./components/filters/SizeSelector";
import Navbar from "./components/Navbar";
import ProductSection from "./components/products/ProductSection";
// import new_arrival from "./assets/new_arrival_img.DaCcndrq.svg";
function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      {/* new arrivals section */}
      <div className="flex flex-col lg:flex-row">
        {/* filter drawer mobile screen */}
        <MobileFilterDrawer />
        {/* filter sidebar lg screen*/}
        <div className="hidden lg:block">
          <div className="w-full px-4 lg:px-10">
            {/* filter Sections */}
            <FilterSidebar />
          </div>
        </div>
        {/* products section */}
        <ProductSection />
      </div>
    </div>
  );
}

export default App;
