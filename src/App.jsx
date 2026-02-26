import "./App.css";
import { useState } from "react";
import FilterSidebar from "./components/filters/FilterSidebar";
import MobileFilterDrawer from "./components/filters/MobileFilterDrawer";
import Navbar from "./components/Navbar";
import ProductSection from "./components/products/ProductSection";
import MobileDrawer from "./assets/MobileDrawer.svg";
function App() {
  // for displaying mobile drawer on small screen
  // initially showDrawer is false so drawer hidden
  const [showDrawer, setShowDrawer] = useState(false);
  const handleClick = () => {
    setShowDrawer(!showDrawer); //toggle true/false
    // !showDrawer means showDrawer = true
  };
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      {/* new arrivals section */}
      <div className="flex flex-col lg:flex-row">
        {/* filter drawer mobile screen */}
        {/* button */}
        <div className="lg:hidden bg-gray-50 border border-gray-200 border-t-0 flex items-center justify-between p-4 text-lg font-medium">
          <p>Products</p>
          <div
            onClick={handleClick}
            className="text-sm border border-gray-300 p-2 rounded-lg flex gap-2 px-4"
          >
            <img src={MobileDrawer} className="w-4"></img>
            <p>Filters</p>
          </div>
        </div>
        {/* conditional rendering
        If showDrawer is TRUE -> render component
        If FALSE -> render nothing */}
        {/* We Pass a Function onClose as a Prop */}
        {showDrawer && (
          <MobileFilterDrawer onClose={() => setShowDrawer(false)} />
        )}
        {/* above works as
        true  && something → show something
        false && something → show nothing */}

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
